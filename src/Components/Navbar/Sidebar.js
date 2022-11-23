import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormLabel,
  FormControl,
  Radio,
  RadioGroup,
  Button
} from "@mui/material";
import LandscapeIcon from "@mui/icons-material/Landscape";
import { useNavigate } from "react-router";
import { shades } from "../UI/colorTheme";
const categories = [
  "T-shirt",
  "Sweatshirt",
  "Dress",
  "Pants & Skirts",
  "Accessories",
];

function Sidebar(props) {
  const navigate = useNavigate()
  return (
    <Box className="sidebar"
      sx={{
        width: `${props.length ? props.length : '15%'}`,
        height: "100vh",
        border:"0.1rem solid",
        borderColor: 'gainsboro',
        position: 'fixed',
        borderTop: 0,
      }}
    >
      <Box
      className="sidebarcontents"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          overflow:'hidden'
        }}
      >
        {/* content wrapper  */}
        <Box
          sx={{
            width:'100%',
            display: "flex",
            alignItems: "center",
            height:'76px',
            borderBottom: 0.5,
            borderColor: "gainsboro",
            justifyContent: "center",
            transition: 'all 300ms',
            '&:hover':{
              cursor:'pointer',
              color: shades.primary[500],
            }
          }}
          onClick={() => {navigate('/')}}
        >
          <LandscapeIcon sx={{ color: shades.primary[500], fontSize: { xs: 20, sm: 35 } }}/>
          <Typography sx={{textAlign:"center", fontSize: { xs: 15, sm: 21 }}}variant="h6" component="h1">
            EveryDay Culture
          </Typography>
        </Box>
        <Box sx={{ width: "100%", p: "15px" }}>
          <Typography variant="h7" component="h3" sx={{ textAlign:'center', fontSize: { xs: 15, sm: 18, md:19, lg:21 } }}>
            {" "}
            Category{" "}
          </Typography>
          <List>
            {categories.map((category, index) => (
              <ListItem key={index} disablePadding >
                <ListItemButton>
                  <ListItemText 
                    primary={category}
                    sx={{ textAlign: "center", my:0 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <hr />
        </Box>
        <Box sx={{ width: "100%", paddingY:"5px", paddingX:"15px" }}>
          <Typography variant="h7" component="h3" sx={{ textAlign:'center', fontSize: { xs: 15, sm: 18, md:19, lg:21 } }}>
            Filter By:
          </Typography>
          <FormControl sx={{width:'100%'}}>
            <FormLabel id="type-form">Type</FormLabel>
            <RadioGroup
              aria-labelledby="type-radio-button-group-label"
              defaultValue="basic"
              name="type" 
              sx={{width:'100%'}}
            >
              <FormControlLabel
                value="basic"
                control={<Radio />}
                label="basic"
              />
              <FormControlLabel
                value="pattern"
                control={<Radio />}
                label="pattern"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box sx={{ width: "100%", paddingY:"5px", paddingX:"15px"}}>
          <FormGroup>
          <FormLabel id="color-form">Color</FormLabel>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Black"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Grey"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Multi-color"
            />
          </FormGroup>
        </Box>
        <Button variant="contained">Submit</Button>
      </Box>
    </Box>
  );
}

export default Sidebar;
