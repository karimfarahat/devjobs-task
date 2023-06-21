import { Grid } from "@mui/material";
import React from "react";

export default function JobDetails() {
  return (
    <Grid container item xs={8} sx={{ marginTop: -5 }}>
      <Grid item xs={2}>
        image
      </Grid>
      <Grid item xs={10}>
        companyName
      </Grid>
    </Grid>
  );
}
