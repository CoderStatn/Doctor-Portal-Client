import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import MuiButton from '../../../StyledComponent/MuiButton';
import treatment from './../../../images/treatment.png'

const DentalCare = () => {
    return (
      <Container>
        <Grid container spacing={3}>
          <Grid sx={{ textAlign: "center" }} item xs={12} md={6}>
            <img style={{ width: "75%" }} src={treatment} alt="" />
          </Grid>
          <Grid sx={{m:'auto'}} item xs={12} md={6}>
            <Typography
              sx={{ fontWeight: 600, my: 2, mb: 6 }}
              variant="h4"
              component="div"
            >
              Exceptional Dental <br /> Care, on Your Terms
            </Typography>
            <Typography
              sx={{ width: "70%", my: 2, mb: 6 }}
              variant="body1"
              component="div"
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that is has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page.
            </Typography>
            <MuiButton>Learn More</MuiButton>
          </Grid>
        </Grid>
      </Container>
    );
};

export default DentalCare;