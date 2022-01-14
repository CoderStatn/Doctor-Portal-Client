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
import { NavLink } from "react-router-dom";
import MuiButton from "../../../StyledComponent/MuiButton";

import login from "../../../images/login.png";
import useAuth from "../../../hooks/useAuth";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Password Didn't Matched");
      return;
    }
    registerUser(loginData.name, loginData.email, loginData.password, history);
    e.preventDefault();
  };
  return (
    <Container sx={{ textAlign: "center" }}>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Grid item xs={12} md={6}>
          <Paper elevation={0} sx={{ p: 3 }}>
            <Typography variant="body1">Create New Account</Typography>
            {!isLoading && (
              <form onSubmit={handleLoginSubmit}>
                <TextField
                  variant="standard"
                  label="Your Name"
                  sx={{ width: "75%", m: 1 }}
                  id="outlined-size-small"
                  type="text"
                  name="name"
                  onBlur={handleOnBlur}
                  size="small"
                />
                <TextField
                  variant="standard"
                  label="User Email"
                  sx={{ width: "75%", m: 1 }}
                  id="outlined-size-small"
                  type="email"
                  name="email"
                  onBlur={handleOnBlur}
                  size="small"
                />
                <TextField
                  variant="standard"
                  id="outlined-password-input"
                  sx={{ width: "75%", m: 1 }}
                  label="Password"
                  name="password"
                  onBlur={handleOnBlur}
                  type="password"
                  autoComplete="current-password"
                  size="small"
                />
                <TextField
                  variant="standard"
                  id="outlined-password-input"
                  sx={{ width: "75%", m: 1 }}
                  label="Confirm Your Password"
                  name="password2"
                  onBlur={handleOnBlur}
                  type="password"
                  autoComplete="current-password"
                  size="small"
                />
                <MuiButton sx={{ width: "75%", m: 1 }} type="submit">
                  Sing In
                </MuiButton>
                <NavLink style={{ textDecoration: "none" }} to="/login">
                  <Button variant="text">
                    Already Registered? Please Login
                  </Button>
                </NavLink>
              </form>
            )}
            {isLoading && <LinearProgress sx={{ width: "100%", my: 5 }} />}
            {user?.email && (
              <Alert variant="outlined" severity="success">
                Congratulation Account Created Successfully!
              </Alert>
            )}
            {authError && (
              <Alert variant="outlined" severity="error">
                {authError}
              </Alert>
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={login} alt="" width="88%" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
