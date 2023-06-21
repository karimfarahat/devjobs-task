// import { theme } from "../styles/theme";
import "../styles/style.css";
import { ThemeProvider, CssBaseline, createTheme, Button } from "@mui/material";
import { amber, grey, deepOrange } from "@mui/material/colors";

import React from "react";

import Home from "./Home";
import JobDetails from "./JobDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const getDesignTokens = (mode) => ({
  typography: {
    fontFamily: "Kumbh Sans",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#5964e0",
            light: "#939bf4",
          },
          secondary: { main: "#eff0fc", light: "#c5c9f4" },
          background: {
            default: "#f4f6f8",
            paper: "#fff",
          },

          text: {
            primary: "#19202D",
            secondary: "#6E8098",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#5964e0",
            light: "#939bf4",
          },
          secondary: { main: "#eff0fc", light: "#c5c9f4" },
          background: {
            default: "#121721",
            paper: "#19202d",
          },

          text: {
            primary: "#fff",
            secondary: "#6E8098",
          },
        }),
  },
});

//context for theme toggling
export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

function App() {
  //mode state
  const [mode, setMode] = React.useState("light");

  //memoizing the colormode to save re-renders
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/job" element={<JobDetails />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
