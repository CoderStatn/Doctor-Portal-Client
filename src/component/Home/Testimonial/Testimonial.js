import {
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import people1 from "./../../../images/people-1.png";
import people2 from "./../../../images/people-2.png";
import people3 from "./../../../images/people-3.png";

const Testimonial = () => {
  return (
    <Container sx={{ my: 5 }}>
      <Typography
        sx={{ fontWeight: 600, m: 2, color: "#19D3AE", textAlign: "center" }}
        variant="h6"
        component="div"
      >
        TESTIMONIAL
      </Typography>
      <Typography
        sx={{ fontWeight: 600, my: 2, mb: 6, textAlign: "center" }}
        variant="h4"
        component="div"
      >
        What's Our Patients <br /> Says
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that is has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content.
              </Typography>
            </CardContent>
            <CardActions>
              <Grid container>
                <Grid item xs={6} md={6}>
                  <img style={{ width: "40%" }} src={people1} alt="" />
                </Grid>
                <Grid sx={{my:'auto'}} item xs={6} md={6}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      color: "#19D3AE",
                      textAlign: "center",
                    }}
                    variant="subtitle1"
                  >
                    Willson Henry
                  </Typography>
                  <Typography
                    sx={{textAlign: "center" }}
                    color="text.secondary"
                  >
                    California
                  </Typography>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that is has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content.
              </Typography>
            </CardContent>
            <CardActions>
              <Grid container>
                <Grid item xs={6} md={6}>
                  <img style={{ width: "40%" }} src={people2} alt="" />
                </Grid>
                <Grid sx={{my:'auto'}} item xs={6} md={6}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      color: "#19D3AE",
                      textAlign: "center",
                    }}
                    variant="subtitle1"
                  >
                    Willson Henry
                  </Typography>
                  <Typography
                    sx={{textAlign: "center" }}
                    color="text.secondary"
                  >
                    California
                  </Typography>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that is has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content.
              </Typography>
            </CardContent>
            <CardActions>
              <Grid container>
                <Grid item xs={6} md={6}>
                  <img style={{ width: "40%" }} src={people3} alt="" />
                </Grid>
                <Grid sx={{my:'auto'}} item xs={6} md={6}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      color: "#19D3AE",
                      textAlign: "center",
                    }}
                    variant="subtitle1"
                  >
                    Willson Henry
                  </Typography>
                  <Typography
                    sx={{textAlign: "center" }}
                    color="text.secondary"
                  >
                    California
                  </Typography>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Testimonial;
