import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link, NavLink } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";
import { LoginOutlined, LogoutOutlined } from "@mui/icons-material";

export default function Navigation() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { user, logout } = useAuth();

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" sx={{ boxShadow: 2 }} position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none", color: "#19D3AE" }}>
              Doctor's Portal
            </Link>
          </Typography>
          {auth && (
            <div>
              <IconButton
                style={{ color: "#0FCFEC" }}
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <NavLink
                    to="/home"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "#0FCFEC",
                    }}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Home
                  </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <NavLink
                    to="/appointment"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "#0FCFEC",
                    }}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Appointment
                  </NavLink>
                </MenuItem>
                {user?.email ? (
                  <Box>
                    <MenuItem onClick={handleClose}>
                      <NavLink
                        to="/dashboard"
                        activeStyle={{
                          fontWeight: "bold",
                          color: "#0FCFEC",
                        }}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Dashboard
                      </NavLink>
                    </MenuItem>
                    <MenuItem onClick={logout}>
                      <div style={{ display: "flex" }}>
                        Logout <LogoutOutlined />
                      </div>
                    </MenuItem>
                  </Box>
                ) : (
                  <MenuItem onClick={handleClose}>
                    <NavLink
                      to="/login"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "#0FCFEC",
                      }}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <div style={{ display: "flex" }}>
                        Login <LoginOutlined />
                      </div>
                    </NavLink>
                  </MenuItem>
                )}
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
