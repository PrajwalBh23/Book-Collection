import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box display="flex" marginTop="10%" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
          This is a my First MERN Project
        </Typography>
      </Box>
    </div>
  );
};

export default About;