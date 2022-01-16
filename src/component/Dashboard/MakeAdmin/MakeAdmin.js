import { Alert, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import MuiButton from "../../../StyledComponent/MuiButton";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://lit-headland-42306.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });
    e.preventDefault();
  };
  return (
    <div style={{ textAlign: "center" }}>
      <Typography
        variant="h5"
        component="div"
        sx={{ flexGrow: 1, color: "#0FCFEC" }}
      >
        Make an Admin
      </Typography>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          variant="standard"
          label="Email"
          sx={{ width: "55%", my: 5 }}
          id="outlined-size-small"
          type="email"
          name="email"
          onBlur={handleOnBlur}
          size="small"
        />
        <br />
        <MuiButton type="submit">Make Admin</MuiButton>
      </form>
      {success && (
        <Alert variant="outlined" severity="success">
          Admin Added Successfully!
        </Alert>
      )}
    </div>
  );
};

export default MakeAdmin;
