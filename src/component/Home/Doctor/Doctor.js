import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

const Doctor = ({ doctor }) => {
  const { name, image, email } = doctor;
  return (
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 1, my:3 }}>
          <img
            style={{ height:'200px' }}
            src={`data:image/jpeg;base64,${image}`}
            alt=""
          />
          <Typography
            sx={{ color: "#0FCFEC" }}
            variant="caption"
            component="div"
          >
            {name}
          </Typography>
          <Typography
            sx={{ color: "gray" }}
            variant="caption"
            component="div"
          >
            {email}
          </Typography>
        </Paper>
      </Grid>
  );
};

export default Doctor;
