import { createTheme } from "@mui/material";

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'capitalize',
                    fontWeight: 600,
                    letterSpacing: 1.2,
                },
            },
        },
    },
    palette: {
        primary: {
            main: "#076d91",
        },
        secondary: {
            main: "#0e0e0e",
        },
    },
    typography: {
        fontFamily: "Quicksand",
        // fontWeight: 700,
        Headings: {
            fontFamily: 'Outfit',
            fontWeight: 700,
        },
    },
});

export default theme;