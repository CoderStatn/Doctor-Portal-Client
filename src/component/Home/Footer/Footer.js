import {
  Container,
  Grid,
  IconButton,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import { makeStyles } from "@mui/styles";
import MuiButton from "../../../StyledComponent/MuiButton";
import bg from "../../../images/footer-bg.png";

const useStyle = makeStyles({
  root: {
    background: `url(${bg})`,
    backgroundPosition: "center",
    backgroundSize:'contain'
  },
  socialIcon: {
    color: "#19D3AE !important",
    border: "1px solid #19D3AE !important",
    margin: " 20px 10px 30px 0 !important",
    "&:hover": {
      background: "#19D3AE !important",
      color: "#fff !important",
    },
  },
});

const Footer = () => {
  const { socialIcon, root } = useStyle();
  return (
    <div className={root}>
      <Container>
        <Grid container spacing={3} sx={{my:2}}>
          <Grid item xs={12} md={6} lg={3}>
            <List sx={{ mt: 5 }}>
              <ListItemText>Emergency Dental Care</ListItemText>
              <ListItemText>Check Up</ListItemText>
              <ListItemText>Treatment of Personal Diseases</ListItemText>
              <ListItemText>Tooth Extraction</ListItemText>
              <ListItemText>Check Up</ListItemText>
            </List>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <List>
              <ListItemText sx={{ color: "#19D3AE", mb: 1 }}>
                <Typography variant="h6">Services</Typography>
              </ListItemText>
              <ListItemText>Emergency Dental Care</ListItemText>
              <ListItemText>Check Up</ListItemText>
              <ListItemText>Treatment of Personal Diseases</ListItemText>
              <ListItemText>Tooth Extraction</ListItemText>
              <ListItemText>Check Up</ListItemText>
              <ListItemText>Check Up</ListItemText>
              <ListItemText>Check Up</ListItemText>
            </List>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <List>
              <ListItemText sx={{ color: "#19D3AE", mb: 1 }}>
                <Typography variant="h6">Oral Health</Typography>
              </ListItemText>
              <ListItemText>Emergency Dental Care</ListItemText>
              <ListItemText>Check Up</ListItemText>
              <ListItemText>Treatment of Personal Diseases</ListItemText>
              <ListItemText>Tooth Extraction</ListItemText>
              <ListItemText>Check Up</ListItemText>
              <ListItemText>Check Up</ListItemText>
              <ListItemText>Check Up</ListItemText>
            </List>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <List>
              <ListItemText sx={{ color: "#19D3AE", mb: 1 }}>
                <Typography variant="h6">Our Address</Typography>
              </ListItemText>
              <ListItemText>New York - 101010 Hudson</ListItemText>
              <ListItemText>Yard</ListItemText>
            </List>
            <IconButton className={socialIcon}>
              <FacebookIcon />
            </IconButton>
            <IconButton className={socialIcon}>
              <GoogleIcon />
            </IconButton>
            <IconButton className={socialIcon}>
              <TwitterIcon />
            </IconButton>
            <Typography>Call Now</Typography>
            <MuiButton>+8065432145</MuiButton>
          </Grid>
        </Grid>
        <Typography variant="subtitle2" sx={{ textAlign: "center", py: 3 }}>
          Copyright 2022 All Rights Reserved
        </Typography>
      </Container>
    </div>
  );
};

export default Footer;
