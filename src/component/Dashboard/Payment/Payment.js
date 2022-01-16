import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import { Container, Typography } from "@mui/material";

const stripePromise = loadStripe(
  "pk_test_51KIYUND29HRu6XRp9hN1HS8ZRNax4Q4mTArJCwsNTqeBPipfdSFcUmDUNKk5mnRyszqdJYS0qbk0HDQDmQqCiOgq00smmg0lJf"
);

const Payment = () => {
  const { appointmentId } = useParams();
  const [appointment, setAppointment] = useState({});
  useEffect(() => {
    fetch(
      `https://lit-headland-42306.herokuapp.com/appointments/${appointmentId}`
    )
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [appointmentId]);
  return (
    <Container style={{ textAlign: "center" }}>
      <Typography variant="h6">
        Hello,{" "}
        <span style={{ color: "#19d3ae" }}>{appointment.patientName}</span>{" "}
        Please Pay for{" "}
        <span style={{ color: "#0FCFEC" }}>{appointment.serviceName}</span>
      </Typography>
      {appointment?.price && (
        <Elements stripe={stripePromise}>
          <CheckOutForm appointment={appointment} />
        </Elements>
      )}
    </Container>
  );
};

export default Payment;
