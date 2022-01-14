import { Container, Grid, Typography, Alert } from "@mui/material";
import React, { useState } from "react";
import { bookings } from "../../../data/data";
import Booking from "../Booking/Booking";

const AvailableAppointments = ({ date }) => {
  const [bookingSuccess, setBookingSuccess] = useState(false);
  return (
    <Container>
      <Typography
        variant="h5"
        sx={{ color: "#19D3AE", my: 5, textAlign: "center" }}
      >
        Available Appointments on {date.toDateString()}
      </Typography>
      {bookingSuccess && (
        <Alert sx={{mb:5}} variant="outlined" severity="success">
          Appointment Booked Successfully!
        </Alert>
      )}
      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking
            key={booking.id}
            booking={booking}
            date={date}
            setBookingSuccess={setBookingSuccess}
          ></Booking>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointments;
