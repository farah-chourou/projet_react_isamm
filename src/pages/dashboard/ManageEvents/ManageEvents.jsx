import React, { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import H1 from "../../../components/Texts/H1";
import Chip from "../../../components/Chip/Chip";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import EventService from "../../../services/EventService";

import { fDate } from "../../../functions/formatTime";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Grid, Typography } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ModalAddEvent from "./Modals/ModalAddEvent";
import ModalEditEvent from "./Modals/ModalEditEvent";
import ModalDeleteEvent from "./Modals/ModalDeleteEvent";
import { Link, useNavigate, useParams } from "react-router-dom";

function ManageEvents() {
  const navigate = useNavigate();
  const [Events, setEvents] = useState([]);
  const [List, setList] = useState(false);

  const [popup, setPopup] = useState({
    open: false,
    type: "",
    value: Events,
  });
  const openAdd = () => {
    setPopup({ open: true, type: "add", value: Events });
  };

  const openUpdate = (row) => {
    setPopup({ open: true, type: "update", value: row });
  };
  const openShow = (row) => {
    setPopup({ open: true, type: "show", value: row });
  };

  const openDelete = (row) => {
    setPopup({
      open: true,
      type: "delete",
      valueRow: row,
      valueArray: Events,
    });
  };

  const handleClose = () => {
    setPopup({ open: false, type: "", row: Events });
  };

  useEffect(() => {
    EventService.GetAllEvents()
      .then((response) => {
        setEvents(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleDeleteEvent = (_id) => {
    const filteredEvents = Events.filter((Events) => Events._id !== _id);
    setEvents(filteredEvents);
  };

  const handleEditEvent = (_id, row) => {
    const index = Events.findIndex((item) => item._id === _id);
    if (index !== -1) {
      Events[index] = { ...Events[index], ...row };
    }
  };
  const handleNavigateDetail = (_id) => {
    navigate(`/dash/GestionDesEvenement/details/${_id}`);
  };
  return (
    <div>
      <div>
        <Grid container alignItems="center">
          <Grid item xs={6} md={6} lg={6}>
            <H1>Gestion Des Evénenements </H1>
          </Grid>
          <Grid item xs={6} md={6} lg={6} container justifyContent="flex-end">
            <Button
              onClick={openAdd}
              startIcon={<AddCircleOutlineOutlinedIcon />}
              variant="contained"
            >
              Ajouter Evénenement
            </Button>
          </Grid>
          <Grid item xs={6} md={6} lg={6}></Grid>
          <Grid item xs={6} md={6} lg={6} container justifyContent="flex-end">
            <Button
              sx={{ margin: 1 }}
              startIcon={<FormatListBulletedIcon />}
              variant="outlined"
              onClick={() => setList(true)}
            >
              Liste
            </Button>{" "}
            <Button
              sx={{ margin: 1 }}
              startIcon={<CalendarMonthIcon />}
              variant="outlined"
            >
              Calendrier
            </Button>
          </Grid>
        </Grid>
      </div>
      <div>
        <TableContainer sx={{ marginTop: 5 }}>
          <Table
            sx={{ minWidth: 1000 }}
            size="small"
            stickyHeader
            aria-label="sticky table"
          >
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Titre</TableCell>
                <TableCell>Date De Début</TableCell>
                <TableCell>Date De Fin </TableCell>
                <TableCell> Type d'événement</TableCell>
                <TableCell>location</TableCell>
                <TableCell>Description</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Events &&
                Events.map((item, index) => (
                  <TableRow
                    hover
                    key={item._id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      cursor: "pointer",
                    }}
                    onClick={(_id) => handleNavigateDetail(item._id)}
                  >
                    <TableCell>
                      <> {index + 1}</>
                    </TableCell>
                    <TableCell>{item.eventName}</TableCell>{" "}
                    <TableCell>{fDate(item.eventDateDebut)}</TableCell>{" "}
                    <TableCell>
                      {item.eventDateFin ? (
                        fDate(item.eventDateFin)
                      ) : (
                        <Typography color="textSecondary"> Néant </Typography>
                      )}{" "}
                    </TableCell>
                    <TableCell>{item.eventType}</TableCell>
                    <TableCell>{item.location}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell align="center">
                      <Tooltip title="Modifier">
                        <IconButton onClick={() => openUpdate(item)}>
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Supprimer">
                        <IconButton onClick={() => openDelete(item)}>
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      {popup.type === "add" && (
        <ModalAddEvent popup={popup} handleClose={handleClose} />
      )}{" "}
      {popup.type === "update" && (
        <ModalEditEvent
          popup={popup}
          handleClose={handleClose}
          handleEditEvent={handleEditEvent}
        />
      )}
      {popup.type === "delete" && (
        <ModalDeleteEvent
          popup={popup}
          handleClose={handleClose}
          handleDeleteEvent={handleDeleteEvent}
        />
      )}
    </div>
  );
}

export default ManageEvents;
