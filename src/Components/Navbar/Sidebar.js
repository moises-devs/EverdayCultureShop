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
import { useState } from "react";
const categories = [
  "T-shirt",
  "Sweatshirt",
  "Dress",
  "Pants and Skirts",
  "Accessories",
];

function Sidebar(props) {
  const navigate = useNavigate();
  const [type, setType] = useState(false); 
  const [black, setBlack] = useState(false);
  const [grey, setGrey] = useState(false);
  const [multiColor, setMultiColor] = useState({});
  const onFilterHandler = (data, type) => {
    let path = data;
    if (type === 'category') {
      console.log('dealing with a category');
      path = `&filters[${type}][$eq]=${data}`
    }
    props.onFilter({path:path, type:data})
    navigate("/");
  }

  const submitFilterHandler = () => {
    let filterBy = {...type, items: [black,grey,multiColor]};
    let typePath = filterBy.type ? `&filter[type][$eq]=${filterBy.type}` : '';
    let colorPath = filterBy.items.map((color) => {
      if(color) {
        if (color.colorProps) {
          return color.colorProps.isChecked ? `&filter[color][$eq]=${color.colorProps.colorName}` :''
        }
      }
      return ''
    }).join('');
    props.onFilter({path:`${typePath}${colorPath}`, type:'Filtered Items'});
  } 

  const onTypeChangeHandler = (e) => {
    setType({type:e.target.value});
  }

  const onColorHandler = (e) => {
    switch( e.target.labels[0].outerText ) {
      case 'Black':
        setBlack({colorProps:{colorName: e.target.labels[0].outerText, isChecked:e.target.checked}});
        break;
      case 'Grey':
        setGrey({colorProps:{colorName: e.target.labels[0].outerText, isChecked:e.target.checked}});
        break;
      case 'Multi-color':
        setMultiColor({colorProps:{colorName: e.target.labels[0].outerText, isChecked:e.target.checked}});
        break;
      default:
        console.log('someting went wrong');
    }
  }

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
          onClick={onFilterHandler.bind(this, '', '')}
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
                <ListItemButton onClick={onFilterHandler.bind(this, category, 'category')}>
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
              name="type" 
              sx={{width:'100%'}}
              onChange={onTypeChangeHandler}
            >
              <FormControlLabel
                value="Basic"
                control={<Radio />}
                label="Basic"
              />
              <FormControlLabel
                value="Pattern"
                control={<Radio />}
                label="Pattern"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box sx={{ width: "100%", paddingY:"5px", paddingX:"15px"}}>
          <FormGroup>
          <FormLabel id="color-form">Color</FormLabel>
            <FormControlLabel
              control={<Checkbox onChange={onColorHandler} />}
              label="Black"
            /> 
            <FormControlLabel
              control={<Checkbox  onChange={onColorHandler}  />}
              label="Grey"
            />
            <FormControlLabel
              control={<Checkbox  onChange={onColorHandler}  />}
              label="Multi-color"
            />
          </FormGroup>
        </Box>
        <Button onClick={submitFilterHandler} type="submit" variant="contained">Submit</Button>
      </Box>
    </Box>
  );
}

export default Sidebar;
