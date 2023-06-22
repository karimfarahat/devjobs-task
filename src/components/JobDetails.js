import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
// import HeaderBackground from "../assets/imgs/header-background.svg";

import Header from "./Header";
import { useLocation } from "react-router-dom";
import JobFullPage from "./JobFullPage";
export default function JobDetails() {
  //3ashan negeeb el state
  const location = useLocation();

  //now we ahve the job here
  const job = location.state;

  console.log(job.related_links);
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Header />

      <Grid
        container
        item
        xs={8}
        bgcolor="background.paper"
        borderRadius="6px"
        sx={{ marginTop: -5 }}
      >
        <Grid item xs={2}>
          <Box
            sx={{ width: "100%", height: "100%" }}
            display="flex"
            alignItems={"center"}
          >
            <img src={job.thumbnail} className="img-fluid" alt="company logo" />
          </Box>
        </Grid>
        <Grid
          item
          xs={10}
          p={4}
          container
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item xs={6}>
            <Stack spacing={1}>
              <Typography
                color={"text.primary"}
                sx={{ fontSize: "20px", fontWeight: "bold" }}
              >
                {job.company_name}
              </Typography>
              {job.related_links && (
                <Typography fontSize="16px" m={0} color="text.secondary">
                  {job.related_links[0].text}
                </Typography>
              )}
            </Stack>
          </Grid>
          <Grid item xs={3}>
            {/* mehtageen neghayar el color */}
            <Button
              variant="contained"
              color="secondary"
              sx={{ fontWeight: "bold", color: "secondary.light" }}
              href="/"
            >
              Company Site
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <JobFullPage job={job} />
    </Grid>
  );
}
