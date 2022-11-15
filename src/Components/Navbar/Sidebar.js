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

const categories = [
  "T-shirt",
  "Sweatshirt",
  "Dress",
  "Pants & Skirt",
  "Accessories",
];

function Sidebar() {
  return (
    <Box
      sx={{
        width: "15%",
        height: "100vh",
        border: 0.5,
        borderColor: "gainsboro",
        position: "fixed",
        borderTop: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
        }}
      >
        {/* content wrapper  */}
        <Box
          sx={{
            width:'100%',
            display: "flex",
            alignItems: "center",
            height:'7%',
            borderBottom: 0.5,
            borderColor: "gainsboro",
            justifyContent: "center"
          }}
        >
          <LandscapeIcon sx={{ color: "#2b01d4", fontSize: 40}}/>
          <Typography sx={{textAlign:"center"}}variant="h6" component="h1">
            EveryDay Culture
          </Typography>
        </Box>
        <Box sx={{ width: "100%", p: "3%" }}>
          <Typography variant="h7" component="h3">
            {" "}
            Category{" "}
          </Typography>
          <List>
            {categories.map((category, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={category}
                    sx={{ textAlign: "center" }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <hr />
        </Box>
        <Box sx={{ width: "100%", paddingY:"4%", paddingX:"8%" }}>
          <Typography variant="h7" component="h3">
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
        <Box sx={{ width: "100%", paddingY:"4%", paddingX:"8%" }}>
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
