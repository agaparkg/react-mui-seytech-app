// import { Box, Container, Stack } from "@mui/material";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import AddNewPost from "./components/AddNewPost";
import { useState } from "react";

function App() {
  // const [mode, setMode] = useState("dark");
  const [mode, setMode] = useState("light");
  // Toggling Dark theme mode to Light theme mode
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    // Material UI -> Components -> Layout -> Box
    // <Box>
    //   <Navbar />
    //   <Sidebar />
    //   <Feed />
    //   <Rightbar />
    // </Box>

    // Material UI -> Components -> Layout -> Container
    // <Container sx={{ backgroundColor: "grey" }}>
    //   <Navbar />
    //   <Sidebar />
    //   <Feed />
    //   <Rightbar />
    // </Container>

    // Material UI -> Components -> Layout -> Stack

    // We need wrap our app for dark/light mode toggling
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack
          direction="row"
          justifyContent="space-between"
          // bgcolor="grey"
        >
          <Sidebar mode={mode} setMode={setMode} />
          <Feed />
          <Rightbar />
        </Stack>
        <AddNewPost />
      </Box>
    </ThemeProvider>

    // Without dark/light toggling
    // <Box>
    //   <Navbar />
    //   <Stack
    //     direction="row"
    //     spacing={2}
    //     justifyContent="space-between"
    //     // bgcolor="grey"
    //     // sx={{ backgroundColor: "grey" }}
    //   >
    //     <Sidebar />
    //     <Feed />
    //     <Rightbar />
    //   </Stack>
    //   <AddNewPost />
    // </Box>
  );
}

export default App;
