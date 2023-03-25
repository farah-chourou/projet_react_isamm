import React from "react";
import { Container, Stack, Typography, Grid, Button } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link, useNavigate, useParams } from "react-router-dom";
import H1 from "../../../components/Texts/H1";

const eventImage = require("../../../../src/assets/images/figures/BG.jpg");

function DetailsEvent() {
  return (
    <div>
      <Grid item xs={6} md={6} lg={6}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link
            underline="hover"
            key="1"
            color="inherit"
            to="/dash/GestionDesEvenement"
          >
            Gestion Des Evénenements
          </Link>
          ,
          <Typography key="3" color="text.primary">
            Détail
          </Typography>
        </Breadcrumbs>
      </Grid>
      <Grid
        item
        xs={6}
        md={6}
        lg={6}
        container
        justifyContent="flex-end"
      ></Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <div
            style={{
              backgroundImage: `url(${eventImage})`,
              backgroundSize: "cover",
              height: 200,
              marginTop: 5,
              borderRadius: 5,
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            {" "}
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" component="h1">
            {"eventTitle"}
          </Typography>
          <Typography variant="subtitle1" component="p">
            {"eventDate"}
          </Typography>
          <Typography variant="subtitle1" component="p">
            {"eventLocation"}
          </Typography>
          <Button variant="contained" color="primary">
            RSVP
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="h2">
            Event Description
          </Typography>
          <Typography variant="body1" component="p">
            {"eventDescription"}c
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="h2">
            Event Details
          </Typography>
          <ul>
            <li>{"eventDetail1"}</li>
            <li>{"eventDetail2"}</li>
            <li>{"eventDetail3"}</li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
}

export default DetailsEvent;
