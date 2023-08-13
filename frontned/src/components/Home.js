import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

function Home() {
  return (
    <>
      <div>
        <Box display="flex" marginTop="10%" flexDirection="column" alignItems="center">
          <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
            This is Home Page
          </Typography>
          <Button LinkComponent={ NavLink } to="/books"  style={{ marginTop: '20px' }} variant="contained" type='submit'>View Books</Button>
        </Box>
      </div>
    </>
  )
}




export default Home