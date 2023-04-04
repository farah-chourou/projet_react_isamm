import React, { useEffect, useState } from "react";
import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import Dialog from "../../../../components/Popup/Popup";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import EventService from "../../../../services/EventService";
import { roles } from "../../../../custom/roles";
import { toast } from "react-hot-toast";
import { fDateInverse } from "../../../../functions/formatTime";

const EventType = ["JPO", "Journée d'integration", "Formation"];
function ModalEditEvent({ popup, handleClose, handleEditEvent }) {
  const { open, value } = popup;
  const [isChecked, setIsChecked] = useState(false);

  const [Event, setEvent] = useState({
    eventName: "",
    eventDateDebut: "",
    eventDateFin: "",
    eventType: "",
    description: "",
    location: "",
  });
  const handleChange = (e) => {
    setEvent({ ...Event, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Event);
    EventService.UpdateEvent(value._id, Event)
      .then((response) => {
        handleEditEvent(value._id, Event);
        toast.success("Evénement modifier avec Succès.");
        handleClose();
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  useEffect(() => {
    setEvent({
      eventName: value.eventName,
      eventDateDebut: fDateInverse(value.eventDateDebut),
      eventDateFin: fDateInverse(value.eventDateFin),
      eventType: value.eventType,
      description: value.description,
      location: value.location,
    });

    if (value.eventDateFin === "") {
      setIsChecked(true);
    }
  }, []);

  return (
    <Dialog open={open} handleClose={handleClose} title={"Modifier Evénement"}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Nom d'Événement"
                required
                name="eventName"
                variant="filled"
                size="small"
                onChange={handleChange}
                value={Event.eventName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Type d'événement"
                name="eventType"
                select
                variant="filled"
                size="small"
                onChange={handleChange}
                value={Event.eventType}
                required
              >
                {EventType.map((item) => (
                  <MenuItem value={item}>{item}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="date"
                name="eventDateDebut"
                variant="filled"
                size="small"
                required
                onChange={handleChange}
                value={Event.eventDateDebut}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {isChecked ? (
                <></>
              ) : (
                <TextField
                  fullWidth
                  type="date"
                  name="eventDateFin"
                  variant="filled"
                  size="small"
                  required
                  onChange={handleChange}
                  value={Event.eventDateFin}
                />
              )}
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Durée 1 jour"
                checked={isChecked}
                onChange={(event) => setIsChecked(event.target.checked)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Localisation"
                name="location"
                variant="filled"
                size="small"
                required
                onChange={handleChange}
                value={Event.location}
              />
            </Grid>{" "}
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                id="outlined-multiline-static"
                label="description"
                name="description"
                variant="filled"
                size="small"
                required
                multiline
                rows={2}
                onChange={handleChange}
                value={Event.description}
              />
            </Grid>{" "}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus variant="outlined" onClick={handleClose}>
            Annuler
          </Button>
          <Button autoFocus variant="contained" type="submit">
            Modifier
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default ModalEditEvent;
