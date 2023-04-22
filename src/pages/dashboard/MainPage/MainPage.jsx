import React from "react";
import UpdateClass from "./Modals/UpdateClass";
import EventList from "./Event/EventList";
import H1 from "../../../components/Texts/H1";
import {
  Box,
  Container,
  Stack,
  Typography,
  Grid,
  Button,
  IconButton,
} from "@mui/material";

function MainPage() {
  return (
    <div>
      <H1>Home </H1>
      <Box sx={{ marginBottom: 3 }}>
        {" "}
        <Typography variant="h6"> Les evenements de l'ISAMM</Typography>
      </Box>
      <UpdateClass />

      <EventList />
    </div>
  );
}

export default MainPage;
