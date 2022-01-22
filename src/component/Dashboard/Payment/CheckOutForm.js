import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAuth from "./../../../hooks/useAuth";
import { Alert, Button, CircularProgress, Paper } from "@mui/material";

const CheckOutForm = ({ appointment }) => {
  const { price, patientName, _id } = appointment;
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("https://lit-headland-42306.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      setSuccess("");
    } else {
      setError("");
      console.log(paymentMethod);
    }

    // payment intent
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: user.email,
          },
        },
      });

    if (intentError) {
      setError(intentError.message);
      setSuccess("");
    } else {
      setError("");
      setSuccess("Your payment processed successfully.");
      console.log(paymentIntent);
      setProcessing(false);
      // save to database
      const payment = {
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        last4: paymentMethod.card.last4,
        transaction: paymentIntent.client_secret.slice("_secret")[0],
      };
      const url = `https://lit-headland-42306.herokuapp.com/appointments/${_id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };
  return (
    <div>
      <Paper sx={{ p: 3, my: 7 }}>
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          {processing ? (
            <CircularProgress></CircularProgress>
          ) : (
            <Button
              type="submit"
              sx={{
                background: "linear-gradient(90deg, #19D3AE, #0FCFEC)",
                color: "white",
                fontWeight: 600,
                mt: 5,
              }}
              disabled={!stripe || success}
            >
              Pay ${price}
            </Button>
          )}
        </form>
        {error && (
          <Alert sx={{ mt: 3 }} variant="outlined" severity="error">
            {error}
          </Alert>
        )}
        {success && (
          <Alert sx={{ mt: 3 }} variant="outlined" severity="success">
            {success}
          </Alert>
        )}
      </Paper>
    </div>
  );
};

export default CheckOutForm;
