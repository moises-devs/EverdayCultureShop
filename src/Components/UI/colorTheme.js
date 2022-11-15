import { createTheme } from "@mui/material/styles";

const shades = {
    primary: {
        100: "#d5ccf6",
        200: "#aa99ee",
        300: "#8067e5",
        400: "#5534dd",
        500: "#2b01d4",
        600: "#2201aa",
        700: "#1a017f",
        800: "#110055",
        900: "#09002a"
    },
    secondary: {
        100: "#fbfafe",
        200: "#f6f5fd",
        300: "#f2f1fd",
        400: "#edecfc",
        500: "#e9e7fb",
        600: "#bab9c9",
        700: "#8c8b97",
        800: "#5d5c64",
        900: "#2f2e32"
    },

    neutral: {
        100: "#fbfbfb",
        200: "#f8f8f8",
        300: "#f4f4f4",
        400: "#f1f1f1",
        500: "#ededed",
        600: "#bebebe",
        700: "#8e8e8e",
        800: "#5f5f5f",
        900: "#2f2f2f"
    }
};



export const colorTheme = createTheme({
    palette: {
        primary: {
            main: shades.primary[500]
        },
        secondary: {
            main: shades.secondary[500]
        },
        neutral: {
            main: shades.neutral[500]
        }
    }
});


