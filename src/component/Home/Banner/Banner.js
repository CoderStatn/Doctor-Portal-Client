import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import MuiButton from "../../../StyledComponent/MuiButton";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";

const Banner = () => {
  const style = {
    display: "flex",
    alignItems: "center",
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition:'center'
  };

  return (
    <div style={style}>
      <Container>
        <Grid container spacing={2} sx={{ alignItems: "center", my:3 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              Your New Smile <br /> Start Here
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 2, my: 3 }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur nemo suscipit aperiam rem at officiis quae nam
              pariatur aut illum.
            </Typography>
            <MuiButton>Get Appointment</MuiButton>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={chair} alt="" width="100%" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;
