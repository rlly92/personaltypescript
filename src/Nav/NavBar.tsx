//________IMPORTS FOR REACT_______//
import React from "react";
import { useNavigate } from "react-router-dom";

//________IMPORTS FOR MUI_______//
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material";

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
          <Button
            variant="contained"
            disableElevation
            onClick={() => navigate("/home")}
          >
            Home
          </Button>

          <Button
            variant="contained"
            disableElevation
            onClick={() => navigate("/portfolio")}
          >
            Portfolio
          </Button>
          <Button
            variant="contained"
            disableElevation
            onClick={() => navigate("/contact")}
          >
            Contact
          </Button>
          <IconButton
            color="inherit"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/reubenlim123456789/",
                "_blank",
                "noopener noreferrer"
              )
            }
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            color="inherit"
            onClick={() =>
              window.open(
                "https://github.com/rlly92",
                "_blank",
                "noopener noreferrer"
              )
            }
          >
            <GitHub />
          </IconButton>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
