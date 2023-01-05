import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { shades } from "../UI/colorTheme";
import { IconButton } from "@mui/material";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useDispatch, useSelector } from "react-redux";
import { toggleWish } from "../../Store/wishSlice";
import { useNavigate } from "react-router";
import { addItem } from "../../Store/cartSlice";
export default function Item(props) {
  const [showThumbnail, setShowThumbnail] = React.useState(false);
  let wishList = useSelector((state) => state.wish.wishes);
  let showWish = wishList.find((wish) => wish.id === props.id);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishHandler = () => {
    let item = { ...props };
    dispatch(toggleWish(item));
  };
  const addHandler = () => {
    let item = {...props, amount:1};
    dispatch(addItem(item));
  }
  return (
    <Card
      sx={{
        maxWidth: "32s0px",
        minWidth: "180px",
        flexBasis: "20%",
        m: "2%",
        position: "relative",
        height:{xs:435, sm:440,}
      }}
      onMouseLeave={() => setShowThumbnail(false)}
    >
      <CardMedia
        component="img"
        alt={props.attributes.name}
        height="250"
        image={`${process.env.REACT_APP_UPLOAD_URL}${props.attributes?.img?.data[0]?.attributes?.formats?.medium?.url}`}
        onMouseOver={() => setShowThumbnail(true)}
      />
      <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
        {showThumbnail && (
          <Box
            onClick={() => navigate(`/item/${props.id}`,)}
            sx={{
              top: 0,
              left: 0,
              width: "100%",
              height: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background:
                "linear-gradient(to bottom, rgba(25,0,20,0.2), rgba(23,34,33,0.5))",
              position: "absolute",
              zIndex: 10,
              "&:hover": { cursor: "pointer" },
            }}
          >
            <Typography
              variant="body2"
              component="span"
              sx={{ color: "white" }}
            >
              Click to see more Details
            </Typography>
          </Box>
        )}
        {props.attributes.label && (
          <Typography
            variant="body2"
            component="span"
            sx={{
              position: "absolute",
              top: "3%",
              left: "3%",
              background: shades.secondary[500],
              color: shades.primary[500],
              padding: "3%",
              borderRadius: "0.2rem",
            }}
          >
            {" "}
            {props.attributes.label}{" "}
          </Typography>
        )}
        <Typography gutterBottom variant="h5" component="div" sx={{height:60}}>
          {props.attributes.name}
        </Typography>
        <Box sx={{width:'100%', display: "flex", justifyContent: "space-between", mt: 3 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="body2" color={shades.neutral[800]}>
              price
            </Typography>
            <Typography variant="body1" color="black">
              {`$${props.attributes.price}`}
            </Typography>
          </Box>
          <CardActions>
            <Button
              onClick={addHandler}
              size="small"
              sx={{
                minWidth: "50px",
                backgroundColor: shades.primary[500],
                border: "0.2rem solid transparent",
                color: "white",
                "&:hover": {
                  backgroundColor: "white",
                  border: "0.2rem solid black",
                  borderColor: shades.primary[500],
                  color: shades.primary[500],
                },
              }}
            >
              <ShoppingCartOutlinedIcon />
            </Button>
            <IconButton
              onClick={wishHandler}
              sx={{
                zIndex: 12,
                position: "absolute",
                color: `${
                  showWish ? shades.primary[500] : shades.secondary[500]
                }`,
                top: '3%',
                "&:hover": { color: shades.primary[500] },
              }}
            >
              <FavoriteOutlinedIcon />
            </IconButton>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
}
