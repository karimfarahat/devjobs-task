import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

// pass el props keda ya keks w malaksh da3wa
export default function JobCard({ job, handleClick }) {
  console.log(job);
  return (
    <Grid item xs={10} sm={4}>
      <Box
        position="relative"
        height="100%"
        bgcolor="background.paper"
        onClick={handleClick}
      >
        <img
          src={job.thumbnail}
          className="card-thumb"
          alt="man"
          style={{
            position: "absolute",
            top: -20,
            left: 20,
            borderRadius: "15px",
          }}
        />
        <Stack
          //   height="100%"
          spacing={3}
          sx={{
            py: 8,
            px: 4,
            //  backgroundColor: "#fff"
          }}
        >
          <Stack spacing={1} alignItems="end" direction="row">
            <Typography color={"text.secondary"} sx={{ fontSize: "16px" }}>
              {job.detected_extensions.posted_at}
            </Typography>
            <Typography
              color={"text.secondary"}
              //   paddingBottom={1}

              sx={{ fontSize: "24px", fontWeight: "bold" }}
            >
              {job.detected_extensions.schedule_type && "."}
            </Typography>
            <Typography color={"text.secondary"} sx={{ fontSize: "16px" }}>
              {job.detected_extensions.schedule_type &&
                job.detected_extensions.schedule_type}
            </Typography>
          </Stack>

          <Typography
            color={"text.primary"}
            sx={{ fontSize: "20px", fontWeight: "bold" }}
          >
            {job.title}
          </Typography>

          <Typography
            color={"text.secondary"}
            sx={{ fontSize: "14px", fontWeight: "normal" }}
          >
            {job.company_name}
          </Typography>
          <Typography
            color={"primary"}
            sx={{ fontSize: "14px", fontWeight: "bold" }}
          >
            {job.location}
          </Typography>
        </Stack>
      </Box>
    </Grid>
  );
}
