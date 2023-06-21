import { Typography, Box, Grid } from "@mui/material";
import React, { useContext } from "react";
import HeaderBackground from "../assets/imgs/header-background.svg";
// import Search from "./Search";
import { ColorModeContext } from "./App";
//icons and imgs
import SunIcon from "../assets/imgs/sun-icon.svg";
import MoonIcon from "../assets/imgs/moon-icon.svg";

import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 10,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(15px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: "3px 3px",
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#fff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#5964E0",
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 10,
    height: 10,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "&:hover .MuiSwitch-thumb": {
    backgroundColor: "#939BF4", // replace "red" with the desired color
  },
  "& .MuiSwitch-track": {
    // borderRadius: 16 / 2,
    borderRadius: "12px",
    opacity: 1,
    backgroundColor: "#fff",
    boxSizing: "border-box",
  },
}));

export default function Header() {
  const { toggleColorMode } = useContext(ColorModeContext);

  const handleColorModeChange = () => {
    toggleColorMode();
  };
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      item
      xs={12}
      pb={8}
      pt={4}
      sx={{
        backgroundImage: `url(${HeaderBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "0px 0px 0px 100px",
      }}
    >
      <Grid
        item
        xs={10}
        // py={2}
        my={2}
        // pb={{ xs: 2, sm: 10 }}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h4" fontWeight={"bold"} color="#fff">
          dejobs
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <img src={SunIcon} alt="sun" className="switch-icon" />
          <AntSwitch
            disableRipple
            inputProps={{ "aria-label": "ant design" }}
            onChange={handleColorModeChange}
          />
          <img src={MoonIcon} alt="moon" className="switch-icon" />
        </Box>
      </Grid>
      {/* <Search /> */}
    </Grid>
  );
}
