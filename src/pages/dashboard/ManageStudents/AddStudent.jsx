import React, { useEffect } from "react";

import Dialog from "../../../components/Popup/Popup";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Add_Update({ popup, handleClose }) {
  const { open, value } = popup;

  return (
    <Dialog
      open={open}
      handleClose={handleClose}
      title={"Ajouter un nouvel étudiant"}
    >
      <DialogContent dividers>
        <Typography gutterBottom>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </Typography>
        <Typography gutterBottom>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        </Typography>
        <Typography gutterBottom>
          Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
          magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
          ullamcorper nulla non metus auctor fringilla.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus variant="outlined" onClick={handleClose}>
          Annuler
        </Button>
        <Button autoFocus variant="contained" onClick={handleClose}>
          Ajouter
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Add_Update;
