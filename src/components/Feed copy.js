import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";

const Feed = () => {
  //   return <Box bgcolor="pink">Feed</Box>;
  //   return <Box sx={{ backgroundColor: "pink" }}>Feed</Box>;
  //   return (
  //     <Box sx={{ backgroundColor: "pink" }} width="50%">
  //       Feed
  //     </Box>
  //   );
  return (
    // <Box sx={{ backgroundColor: "pink" }} flex={4} p={2}>
    <Box flex={4} p={2}>
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
