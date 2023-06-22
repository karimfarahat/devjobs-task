import { Grid, Box, Stack, Typography, Button } from "@mui/material";
import React from "react";

export default function JobFullPage({ job }) {
  //   console.log(job);
  return (
    <>
      <Grid item xs={8} borderRadius="6px">
        <Box
          mt={{ xs: 3, sm: 6, md: 10 }}
          bgcolor={"background.paper"}
          display="flex"
          flexDirection={"column"}
          justifyContent={"center"}
        >
          {/* ////////////////////////////////UPPERCONTAINER.................................. */}
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            alignItems={"center"}
            justifyContent={"space-between"}
            px={8}
            py={6}
          >
            <Stack spacing={2}>
              <Stack spacing={1} alignItems="end" direction="row">
                <Typography color={"text.secondary"} sx={{ fontSize: "16px" }}>
                  {job.detected_extensions.posted_at}
                </Typography>
                <Typography
                  color={"text.secondary"}
                  //   paddingBottom={1}

                  sx={{ fontSize: "24px", fontWeight: "bold" }}
                >
                  .
                </Typography>

                <Typography color={"text.secondary"} sx={{ fontSize: "16px" }}>
                  {job.detected_extensions.schedule_type}
                </Typography>
              </Stack>
              <Typography
                color={"text.primary"}
                sx={{ fontSize: "28px", fontWeight: "bold" }}
              >
                {job.title}
              </Typography>
              <Typography
                color={"primary"}
                sx={{ fontSize: "14px", fontWeight: "bold" }}
              >
                {job.location}
              </Typography>
            </Stack>
            <Button href={"/"} variant="contained" color="primary">
              Apply Now
            </Button>
          </Box>

          {/* /////////////////////////////////////LOWER CONTAINER//////////////////////////// */}
          <Box px={8} py={3}>
            <Typography color="text.secondary">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet viverra, tortor libero sodales leo,
              eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
              Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros
              pede semper est, vitae luctus metus libero eu augue. Morbi purus
              libero, faucibus adipiscing, commodo quis, gravida id, est. Sed
              lectus. Praesent elementum hendrerit tortor. Sed semper lorem at
              felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
              euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede
              arcu, dapibus eu, fermentum et, dapibus sed, urna.
            </Typography>
          </Box>
          <Box px={8} py={3}>
            <Typography
              color={"text.primary"}
              sx={{ fontSize: "20px", fontWeight: "bold" }}
              pb={3}
            >
              Requirements
            </Typography>
            <Typography color="text.secondary">
              Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia,
              magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae
              facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis,
              adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse
              ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante,
              mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede,
              ornare a, lacinia eu, vulputate vel, nisl.
            </Typography>
            <ul className="normal-list">
              <li>
                <Typography color="text.secondary">
                  Morbi interdum mollis sapien. Sed
                </Typography>
              </li>
              <li>
                <Typography color="text.secondary">
                  Phasellus lacinia magna a ullamcorper laoreet, lectus arcu
                  pulvinar risus
                </Typography>
              </li>
              <li>
                <Typography color="text.secondary">
                  Mauris nibh felis, adipiscing varius, adipiscing in, lacinia
                  vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut
                  lectus.
                </Typography>
              </li>
              <li>
                <Typography color="text.secondary">
                  Morbi interdum mollis sapien. Sed
                </Typography>
              </li>
            </ul>
          </Box>
          <Box px={8} py={3}>
            <Typography
              color={"text.primary"}
              sx={{ fontSize: "20px", fontWeight: "bold" }}
              pb={3}
            >
              What Will You Do
            </Typography>
            <Typography color="text.secondary">
              Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia,
              magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae
              facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis,
              adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse
              ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante,
              mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede,
              ornare a, lacinia eu, vulputate vel, nisl.
            </Typography>
            <ol className="number-list">
              <li>
                <Typography color="text.secondary">
                  Morbi interdum mollis sapien. Sed
                </Typography>
              </li>
              <li>
                <Typography color="text.secondary">
                  Phasellus lacinia magna a ullamcorper laoreet, lectus arcu
                  pulvinar risus
                </Typography>
              </li>
              <li>
                <Typography color="text.secondary">
                  Mauris nibh felis, adipiscing varius, adipiscing in, lacinia
                  vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut
                  lectus.
                </Typography>
              </li>
              <li>
                <Typography color="text.secondary">
                  Morbi interdum mollis sapien. Sed
                </Typography>
              </li>
            </ol>
          </Box>
        </Box>
      </Grid>
      {/* //footer starts here........................... */}
      <Box
        borderRadius={3}
        width={"100%"}
        bgcolor={"background.paper"}
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={{ xs: 8, sm: 16, md: 24, lg: 28, xl: 40 }}
        py={2}
        mt={3}
      >
        <Stack>
          <Typography
            color={"text.primary"}
            sx={{ fontSize: "20px", fontWeight: "bold" }}
          >
            {job.title}
          </Typography>
          <Typography color={"text.secondary"} sx={{ fontSize: "16px" }}>
            {job.company_name}
          </Typography>
        </Stack>
        <Button href={"/"} variant="contained" color="primary">
          Apply Now
        </Button>
      </Box>
    </>
  );
}
