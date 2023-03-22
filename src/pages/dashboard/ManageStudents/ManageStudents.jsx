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
    <Chip label="diplomated" color="primary" className={styles.chip} />
  ) : (
    <Chip label="not diplomated" color="error" className={styles.chip} />
  );
};

const isAluminie = (item) => {
  const { diplome } = item;
  return isALUMINIE(item) > 0 ? (
    <Chip label="Aluminie" color="success" className={styles.chip} />
  ) : (
    <Chip label="Student" color="primary" className={styles.chip} />
  );
};

function ManageStudents() {
  const [students, setStudents] = useState([]);

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
        <H1>Manage Students</H1>
        <Button startIcon={<PersonAddAlt1Icon />} variant="contained">
          Add Student
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
              <TableCell>Student</TableCell>
              <TableCell>Full name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Class</TableCell>
              <TableCell>Deplomated</TableCell>
              <TableCell>Is Aluminie</TableCell>
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
                  <VisibilityIcon className={styles.action_icon} />
                  <EditIcon className={styles.action_icon} />
                  <DeleteIcon className={styles.action_icon} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default ManageStudents;
