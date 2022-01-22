import {
  Alert,
  Button,
  Container,
  Grid,
  LinearProgress,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import login from "../../../images/login.png";
import useAuth from "../../../hooks/useAuth";
import MuiButton from "../../../StyledComponent/MuiButton";
import { useLocation } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";

const Login = () => {
  const { user, loginUser, isLoading, singInWithGoogle, authError } = useAuth();

  const [loginData, setLoginData] = useState({});

  const location = useLocation();
  const navigate = useNavigate();
  
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };

  const handleGoogleSingIn = () => {
    singInWithGoogle(location, navigate)
  }
  return (
    <Container sx={{ textAlign: "center" }}>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Grid item xs={12} md={6}>
          <Paper elevation={0} sx={{ p: 3 }}>
            <Typography variant="body1">Login</Typography>
            <form onSubmit={handleLoginSubmit}>
              <TextField
                variant="standard"
                label="User Email"
                sx={{ width: "75%", m: 1 }}
                id="outlined-size-small"
                type="email"
                name="email"
                onBlur={handleOnChange}
                size="small"
              />
              <TextField
                variant="standard"
                id="outlined-password-input"
                sx={{ width: "75%", m: 1 }}
                label="Password"
                name="password"
                onBlur={handleOnChange}
                type="password"
                autoComplete="current-password"
                size="small"
              />
              <MuiButton sx={{ width: "75%", m: 1 }} type="submit">
                Sing In
              </MuiButton>
              <NavLink style={{ textDecoration: "none" }} to="/register">
                <Button variant="text">New User? Please Register</Button>
              </NavLink>
              {isLoading && <LinearProgress sx={{ width: "100%", my: 5 }} />}
              {user?.email && (
                <Alert variant="outlined" severity="success">
                  Login Successfully!
                </Alert>
              )}
              {authError && (
                <Alert variant="outlined" severity="error">
                  {authError}
                </Alert>
              )}
            </form>
            <p>------------or------------</p>
            <Button
              onClick={handleGoogleSingIn}
              variant="outlined"
              color="error"
            >
              <GoogleIcon />
              oogle
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={login} alt="" width="88%" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
