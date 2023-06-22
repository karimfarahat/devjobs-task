import {
  Container,
  Grid,
  Stack,
  TextField,
  Button,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

import SearchIcon from "../assets/imgs/search-icon.svg";
import LocationIcon from "../assets/imgs/location-icon.svg";

export default function Search({
  handleQuery,
  handleLocation,
  handleFulltime,
}) {
  //   const { handleSubmit, register } = useForm();

  //   const onSubmit = (data) => {
  //     console.log(data); // You can handle the form data here
  //   };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // {
    //   data.country &&
    handleQuery(data.country);
    // }
    // {
    //   data.location &&
    handleLocation(data.location);

    handleFulltime(data.fulltime ? "FULLTIME" : "");
    // }
  };
  return (
    <Grid item xs={10} sx={{ marginTop: -5 }}>
      <Grid
        container
        bgcolor="background.paper"
        columns={16}
        justifyContent="center"
        alignItems="center"
        p={1}
        borderRadius="6px"
        zIndex={4}
        // onSubmit={handleSubmit(onSubmit)}
      >
        <form
          style={{
            width: "100%",
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "space-between",
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Stack
            spacing={2}
            // divider

            direction={"row"}
            width={"100%"}
            alignItems="center"
            // justifyContent="space-between"
          >
            <TextField
              fullWidth
              //   label="Search"
              name="search"
              margin="normal"
              variant="standard"
              {...register("country")}
              InputProps={{
                startAdornment: (
                  <InputAdornment sx={{ pl: 2 }} position="start">
                    <img src={SearchIcon} alt="search" />
                  </InputAdornment>
                ),
                disableUnderline: true,
              }}
            />
            <Divider variant="fullWidth" flexItem orientation="vertical" />
            <TextField
              fullWidth
              //   label="Location"
              name="location"
              margin="normal"
              variant="standard"
              {...register("location")}
              InputProps={{
                startAdornment: (
                  <InputAdornment sx={{ pl: 2 }} position="start">
                    <img src={LocationIcon} alt="Location" />
                  </InputAdornment>
                ),
                disableUnderline: true,
              }}
            />
            <Divider variant="fullWidth" flexItem orientation="vertical" />
            <Stack
              p={4}
              direction={"row"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <FormControlLabel
                color="primary"
                control={<Checkbox {...register("fulltime")} />}
                label={
                  <Typography
                    width={"100%"}
                    color={"contrastText"}
                    sx={{ fontWeight: "bold", fontSize: "16px" }}
                  >
                    Fulltime Only
                  </Typography>
                }
              />
              <Button type="submit" variant="contained" color="primary">
                Search
              </Button>
            </Stack>
          </Stack>
        </form>
      </Grid>
    </Grid>
  );
}
