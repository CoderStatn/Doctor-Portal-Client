import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import doctorImg from "../../../images/doctor.png";
import MuiButton from "../../../StyledComponent/MuiButton";
import bg from "../../../images/appointment-bg.png";

const Appointment = () => {
  const useStyle = makeStyles({
    root: {
      background: `url(${bg})`,
      backgroundColor: "#3A4256",
      backgroundBlendMode: "multiply",
      backgroundPosition: "center",
      backgroundSize: "auto",
      display: "flex",
      alignItems: "center",
      margin: "80px 0px 50px 0px",
    },
  });
  const { root } = useStyle();
  return (
    <div className={root}>
      <Container>
        <Grid container spacing={2} sx={{ alignItems: "center" }}>
          <Grid item xs={12} md={5}>
            <img
              src={doctorImg}
              alt=""
              width="100%"
              style={{ marginTop: -110, marginBottom: -7 }}
            />
          </Grid>
          <Grid item xs={12} md={7} sx={{ my: 2 }}>
            <Typography variant="h6" color="#19D3AE">
              Appointment
            </Typography>
            <Typography variant="h4" color="white">
              Make an Appointment Today
            </Typography>
            <Typography variant="body1" sx={{ my: 3, color: "white" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores harum, labore perspiciatis non ut velit!
            </Typography>
            <MuiButton>Learn More</MuiButton>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Appointment;
