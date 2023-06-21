import { Container, Grid, Stack, TextField, Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

export default function Search() {
  //   const { handleSubmit, register } = useForm();

  //   const onSubmit = (data) => {
  //     console.log(data); // You can handle the form data here
  //   };
  return (
    <Grid item xs={10} sx={{ marginTop: -5 }}>
      <Grid
        container
        bgcolor="#fff"
        // bgcolor="red"
        columns={16}
        justifyContent="center"
        alignItems="center"
        p={1}
        borderRadius="6px"
        zIndex={4}
      >
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <TextField
          label="Search"
          name="search"
          //   inputRef={register}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Location"
          name="location"
          //   inputRef={register}
          margin="normal"
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
        {/* </form> */}
      </Grid>
    </Grid>
  );
}
