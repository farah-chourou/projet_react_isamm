import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

import Button from "@mui/material/Button";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import H1 from "../../../components/Texts/H1";
import Chip from "../../../components/Chip/Chip";
import Avatar from "../../../components/Avatar/Avatar";

import StudentServ from "../../../services/Student.service";
import { isALUMINIE } from "../../../custom/roles";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import AddStudent from "./AddStudent";
import UpdateStudent from "./UpdateStudent";
import DeleteStudent from "./DeleteStudent";
import ShowStudent from "./ShowStudent";

const init_student = {
  birthDate: new Date(),
  classe: "",
  diplome: "",
  diplomeDate: new Date(),
  email: "",
  firstName: "",
  isPublic: true,
  lastName: "",
  niveau: "",
  numero_classe: null,
  password: "",
  phoneNumber: "",
  promotion: "",
  role: "",
  sex: "",
  userName: "",
  _id: "",
};

const concact_class = (item) => {
  const { niveau, classe, numero_classe } = item;
  if (niveau && classe && numero_classe) {
    return `${niveau} ${classe} ${numero_classe}`;
  } else {
    return "Not Defined";
  }
};

const isDiplomated = (item) => {
  const { diplome } = item;
  return diplome.length > 0 ? (
    <Chip label="Diplômé " color="primary" className={styles.chip} />
  ) : (
    <Chip label="non Diplômé " color="error" className={styles.chip} />
  );
};

const isAluminie = (item) => {
  const { diplome } = item;
  return isALUMINIE(item) > 0 ? (
    <Chip label="Aluminie" color="success" className={styles.chip} />
  ) : (
    <Chip label="Etudiant" color="primary" className={styles.chip} />
  );
};

function ManageStudents() {
  const [students, setStudents] = useState([]);

  const [popup, setPopup] = useState({
    open: false,
    type: "",
    value: init_student,
  });

  const openAdd = () => {
    setPopup({ open: true, type: "add", value: init_student });
  };

  const openUpdate = (row) => {
    setPopup({ open: true, type: "update", value: row });
  };

  const openShow = (row) => {
    setPopup({ open: true, type: "show", value: row });
  };

  const openDelete = (row) => {
    setPopup({ open: true, type: "delete", value: row });
  };

  const handleClose = () => {
    setPopup({ open: false, type: "", value: init_student });
  };

  useEffect(() => {
    StudentServ.GetAllPublicStudents(
      (data) => {
        console.log(data);
        setStudents(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <div>
      <div className={styles.head}>
        <H1>Gestion Des Etudiants</H1>
        <Button
          onClick={openAdd}
          startIcon={<PersonAddAlt1Icon />}
          variant="contained"
        >
          Ajouter Etudiant
        </Button>
      </div>
      <div className={styles.filter}>
        <TextField
          label="Student Name"
          variant="standard"
          className={styles.filt_tf}
        />
        <TextField
          label="Level"
          variant="standard"
          className={styles.filt_tf}
        />
        <TextField
          label="Class"
          variant="standard"
          className={styles.filt_tf}
        />
        <TextField
          label="Class Num"
          variant="standard"
          className={styles.filt_tf}
        />
      </div>
      <div className={styles.body}>
        <Table sx={{ minWidth: 1000 }}>
          <TableHead>
            <TableRow>
              <TableCell>Etudiant</TableCell>
              <TableCell>Nom</TableCell>
              <TableCell>Prenom</TableCell>
              <TableCell>Class</TableCell>
              <TableCell>Diplômé</TableCell>
              <TableCell>Est Aluminie</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((row) => (
              <TableRow key={row._id}>
                <TableCell>
                  <Avatar name={`${row.firstName} ${row.lastName} `} />
                </TableCell>
                <TableCell>
                  {row.firstName} {row.lastName}
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{concact_class(row)}</TableCell>
                <TableCell>{isDiplomated(row)}</TableCell>
                <TableCell>{isAluminie(row)}</TableCell>
                <TableCell align="center">
                  <VisibilityIcon
                    className={styles.action_icon}
                    onClick={() => openShow(row)}
                  />
                  <EditIcon
                    className={styles.action_icon}
                    onClick={() => openUpdate(row)}
                  />
                  <DeleteIcon
                    className={styles.action_icon}
                    onClick={() => openDelete(row)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {popup.type === "add" && (
        <AddStudent popup={popup} handleClose={handleClose} />
      )}
      {popup.type === "update" && (
        <UpdateStudent popup={popup} handleClose={handleClose} />
      )}
      {popup.type === "show" && (
        <ShowStudent popup={popup} handleClose={handleClose} />
      )}
      {popup.type === "delete" && (
        <DeleteStudent popup={popup} handleClose={handleClose} />
      )}
    </div>
  );
}

export default ManageStudents;
