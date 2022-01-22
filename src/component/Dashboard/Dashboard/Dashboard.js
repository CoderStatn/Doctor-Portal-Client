import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import {
  Link,
  Outlet,
} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { admin } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Link style={{ textDecoration: "none" }} to="/dashboard">
        <Button
          sx={{
            width: "100%",
            background: "linear-gradient(90deg, #19D3AE, #0FCFEC)",
            color: "white",
            fontWeight: 600,
          }}
        >
          Dashboard
        </Button>
      </Link>
      {admin && (
        <Box>
          <Link style={{ textDecoration: "none" }} to={`/dashboard/makeAdmin`}>
            <Button
              sx={{
                width: "100%",
                background: "linear-gradient(90deg, #19D3AE, #0FCFEC)",
                color: "white",
                fontWeight: 600,
                my: 1,
              }}
            >
              Make Admin
            </Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to={`/dashboard/addDoctor`}>
            <Button
              sx={{
                width: "100%",
                background: "linear-gradient(90deg, #19D3AE, #0FCFEC)",
                color: "white",
                fontWeight: 600,
              }}
            >
              Add Doctor
            </Button>
          </Link>
        </Box>
      )}
      <Link style={{ textDecoration: "none" }} to="/appointment">
        <Button
          sx={{
            width: "100%",
            background: "linear-gradient(90deg, #19D3AE, #0FCFEC)",
            color: "white",
            fontWeight: 600,
            mt: 1,
          }}
        >
          Appointment
        </Button>
      </Link>
      <Divider />
      <Box sx={{ my: 10 }}>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <Button sx={{ width: "100%" }}>Back to home page</Button>
        </Link>
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },

          background: "white",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "#0FCFEC" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#19D3AE" }}
          >
            Doctor's Portal
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
