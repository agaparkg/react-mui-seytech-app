import { Button, Typography } from "@mui/material";
// import SettingsIcon from "@mui/icons-material/Settings";
// import Add from "@mui/icons-material/Add";
import { Add, Settings } from "@mui/icons-material";
import styled from "@emotion/styled";

const MyButton1 = styled(Button)({
  backgroundColor: "purple",
  color: "#eee",
  margin: 5,
  "&:hover": {
    backgroundColor: "lightBlue",
  },
});

const MyButton2 = styled(Button)({
  backgroundColor: "blue",
  color: "white",
  margin: 5,
  "&:disabled": {
    color: "white",
    backgroundColor: "green",
  },
});

// Creating a theme and using it here
const MyButton3 = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  margin: 5,
  "&:disabled": {
    color: "white",
    backgroundColor: "green",
  },
}));

function App() {
  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <Button
        startIcon={<Settings />}
        variant="contained"
        color="secondary"
        size="small"
      >
        Settings
      </Button>
      <Button
        startIcon={<Add />}
        variant="contained"
        color="success"
        size="small"
      >
        Add new post
      </Button>
      <Button startIcon={<Add />} disabled variant="outlined">
        Outlined
      </Button>
      <Typography variant="h1" component="h2">
        h2. Heading
      </Typography>
      <Typography variant="h1" component="h1">
        h1. Heading
      </Typography>
      <Typography variant="h1" component="p">
        It uses h1 style, but it's a p tag
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "skyblue",
          color: "#888",
          margin: 5,
          "&:hover": {
            backgroundColor: "lightBlue",
          },
        }}
      >
        My unique button 1
      </Button>
      <Button
        variant="contained"
        disabled
        sx={{
          backgroundColor: "skyblue",
          color: "#888",
          margin: 5,
          "&:disabled": {
            backgroundColor: "gray",
            color: "white",
          },
        }}
      >
        My unique button 2
      </Button>
      <MyButton1>My unique styled button 1</MyButton1>
      <MyButton2>My unique styled button 2</MyButton2>
      <MyButton3>My unique styled button 3</MyButton3>
      <Button variant="contained" color="otherColor">
        My button that uses custom color from theme
      </Button>
    </div>
  );
}

export default App;
