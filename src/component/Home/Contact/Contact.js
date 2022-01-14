import { Container, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import MuiButton from "../../../StyledComponent/MuiButton";
import bg from "../../../images/appointment-bg.png";

const Contact = () => {
  const useStyle = makeStyles({
    root: {
      background: `url(${bg})`,
      backgroundColor: "#3A4256",
      backgroundBlendMode: "multiply",
      backgroundSize: "cover",
      textAlign: "center",
      padding: "30px",
    },
  });
  const { root } = useStyle();
  return (
    <div className={root}>
      <Container maxWidth="md">
        <Typography variant="h6" color="#19D3AE">
          Contact
        </Typography>
        <Typography variant="h4" color="white">
          Always Connect With Us
        </Typography>
        <form action="">
          <TextField
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              my: 5,
            }}
            fullWidth
            required
            id="email"
            variant="filled"
            label="Email Address"
            type="email"
          />
          <TextField
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
            }}
            fullWidth
            required
            id="email"
            variant="filled"
            label="Subject"
            type="text"
          />
          <TextField
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              my: 5,
            }}
            fullWidth
            required
            id="outlined-multiline-static"
            variant="filled"
            label="Your Message"
            multiline
            rows={5}
          />
          <MuiButton type="submit">Submit</MuiButton>
        </form>
      </Container>
    </div>
  );
};

export default Contact;
