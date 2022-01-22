import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("https://lit-headland-42306.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <Container sx={{ textAlign: "center", my: 5 }}>
      <Typography
        sx={{ fontWeight: 600, m: 2, color: "#19D3AE" }}
        variant="h6"
        component="div"
      >
        OUR DOCTORS
      </Typography>
      <Grid container spacing={2}>
        {doctors.map((doctor) => (
          <Doctor key={doctor._id} doctor={doctor}></Doctor>
        ))}
      </Grid>
    </Container>
  );
};

export default Doctors;
