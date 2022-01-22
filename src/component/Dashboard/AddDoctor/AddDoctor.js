import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Alert, Container, Input, Typography } from "@mui/material";
import MuiButton from "../../../StyledComponent/MuiButton";

const AddDoctor = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("image", image);

    fetch("https://lit-headland-42306.herokuapp.com/doctors", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess(true);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <Container sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, color: "#0FCFEC" }}
      >
        Add Doctor
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ width: "50%", my: 3 }}
          required
          onChange={(e) => setName(e.target.value)}
          id="standard-basic"
          label="Name"
          type="text"
          variant="standard"
        />
        <br />
        <TextField
          sx={{ width: "50%" }}
          required
          onChange={(e) => setEmail(e.target.value)}
          id="standard-basic"
          label="Email"
          type="email"
          variant="standard"
        />
        <br />
        <Input
          sx={{ width: "50%", my: 3 }}
          accept="image/*"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />
        <MuiButton variant="contained" type="submit">
          Add Doctor
        </MuiButton>
      </form>
      {success && (
        <Alert sx={{ my: 1 }} variant="outlined" severity="success">
          Doctor Added Successfully
        </Alert>
      )}
    </Container>
  );
};

export default AddDoctor;
