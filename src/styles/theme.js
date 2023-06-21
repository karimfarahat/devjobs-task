import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "40px",
          padding: "10px 36px",
          fontSize: "14px",
          fontWeight: "bold", // Override button text color to white
          // backgroundColor: "#ffa62b", // Override button background color to orange
        },
        //apply style only to text button variant
        text: {
          padding: 0,
        },
      },
    },
  },
  typography: {
    fontFamily: "Kumbh Sans",
  },
});
