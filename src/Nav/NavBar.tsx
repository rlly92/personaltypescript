import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate, Outlet } from "react-router-dom";

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
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
              onClick={() => navigate("/about")}
            >
              About Me
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
          </Typography>
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
};

export default NavBar;
