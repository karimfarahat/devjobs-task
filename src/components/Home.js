import React from "react";
import Header from "./Header";
import { Box, Button, Grid } from "@mui/material";
import Search from "./Search";
import JobCard from "./JobCard";

import { useNavigate } from "react-router-dom";

export default function Home() {
  const [jobs, setJobs] = React.useState([]);
  const [query, setQuery] = React.useState("all");
  const [location, setLocation] = React.useState("egypt");
  const [page, setPage] = React.useState(0);
  const [fulltime, setFulltime] = React.useState("");

  React.useEffect(() => {
    // Fetch jobs from API
    // and update the component state
    fetchJobs();
    console.log(query, location);
  }, [page, query, location, fulltime]);
  //   }, [page]);

  const pageHandler = () => {
    setPage((prevPage) => prevPage + 1);
    console.log(page);
  };

  const handleQuery = (val) => {
    console.log(val);
    setQuery(val);
  };
  const handleLocation = (val) => {
    console.log(val);
    setLocation(val);
  };
  const handleFulltime = (val) => {
    console.log(val);
    setFulltime(val);
  };

  const fetchJobs = async () => {
    try {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/serpapi.com/search.json?api_key=f24bfe567bb4b401abe3e7a8015e565aac1f2a8438205f602217d6082f49f3e6&engine=google_jobs&q=" +
          query +
          "&start=" +
          page +
          "&hl=en&location=" +
          location +
          "&chips=employment_type:" +
          fulltime
        // 'https://cors-anywhere.herokuapp.com/serpapi.com/search.json?api_key=00ee15c7b1ccde001d017f17deb072cafb16a044fec08c5dbcc43a33c2b11da1&engine=google_jobs&q='+queryfinal+'&start='+page+'&hl=en&location='+locationfinal+'&chips=employment_type:'+fulltimeFinal+'
      );
      const data = await response.json();
      console.log(data);
      const jobList = data.jobs_results || []; // Assuming the jobs list is present in the "jobs" property of the response data
      setJobs(jobList);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const navigate = useNavigate();

  const handleClick = (job) => {
    // Open the JobDetails component

    // console.log("target", e);
    navigate("/job", { state: job });
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Header />
      <Search
        handleQuery={handleQuery}
        handleLocation={handleLocation}
        handleFulltime={handleFulltime}
      />

      {/* jobList Render */}
      <Grid container marginTop={10} spacing={5} item xs={10}>
        {jobs.map((job, index) => (
          //lama a3ooz ady parameter men gher execution
          <JobCard
            key={index}
            job={job}
            handleClick={() => {
              handleClick(job);
            }}
          />
        ))}
      </Grid>
      <Grid
        container
        item
        xs={10}
        alignItems="center"
        justifyContent="center"
        p={3}
      >
        {/* <Box> */}
        <Button variant="contained" onClick={pageHandler} sx={{ py: 1, px: 3 }}>
          Load More
        </Button>
        {/* </Box> */}
      </Grid>
    </Grid>
  );
}
