import React, { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";

import Dialog from "../../../components/Popup/Popup";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import styles from "./styles.module.scss";
import Typography from "@mui/material/Typography";
import StudentServ from "../../../services/Student.service";

const fileTypes = ["xlsx"];
function AddMultipleStudent({ popup, handleClose }) {
  const { open, value, callback } = popup;

  const [loading, setLoading] = useState(false);

  const [File, setFile] = useState(null);

  const handleChangeImage = (event) => {
    setFile(event.target.files[0]);
  };

  useEffect(() => {}, []);

  const handleSubmit = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", File);
    console.log(File);

    const succ = () => {
      callback();
      handleClose();
      setLoading(false);
    };
    const fail = () => {
      setLoading(false);
    };
    StudentServ.CreateMultipleStudent(formData, succ, fail);
  };
  return (
    <Dialog
      open={open}
      handleClose={handleClose}
      title={" Ajouter multiple Etudiants"}
      width="md"
    >
      <DialogContent dividers>
        <div className={styles.card}>
          <Typography variant="h5" component="h1">
            Importer le fichier ICI
          </Typography>
        </div>
        <div style={{ marginLeft: 25 }}>
          <input type="file" onChange={handleChangeImage} />
        </div>
        {/*<FileUploader
          multiple={true}
          handleChange={handleChangeImage}
          name="file"
          types={fileTypes}
        />
  <p>{File ? `File name: ${File[0].name}` : "no files uploaded yet"}</p>{" "}*/}
      </DialogContent>
      <DialogActions>
        <Button autoFocus variant="outlined" onClick={handleClose}>
          Annuler
        </Button>
        <Button
          autoFocus
          variant="contained"
          onClick={handleSubmit}
          disabled={loading}
        >
          Ajouter
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddMultipleStudent;
