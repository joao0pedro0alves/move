import {createTheme, responsiveFontSizes} from "@mui/material"

const theme = responsiveFontSizes(
    createTheme({
        palette: {
            primary: {
                main: "#FF3800",
                light: "#FA4A19",
                dark: "#BF2A00",
            },
            secondary: {
                main: "#141414",
                light: "#242424",
                dark: "#0F0E0E",
            },
            success: {
                main: "#61E16E",
            },
            error: {
                main: "#FF8989",
            },
            grey: {
                "100": "#F8FAFF",
                "200": "#EDE8E8",
            },
            background: {
                default: "#F8FAFF",
            },
        },
    })
)

export default theme
