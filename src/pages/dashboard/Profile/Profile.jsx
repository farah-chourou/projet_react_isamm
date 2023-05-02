import React, { useContext, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { UserContext } from "../../../store/Contexts";
import CvUpdt from "../../../services/Cv.service";
import { makeDate2 } from "../../../functions/dates";
import UpdateProfile from "./UpdateProfile";
import ShowCv from "./ShowCv";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { isALUMINIE, isSTUDENT } from "../../../custom/roles";

// firstName, lastName, phoneNumber, birthDate, sex
function Profile() {
  const { user } = useContext(UserContext);

  const init_cv = {
    student: "",
    bio: "",
    localisation: "",
    linkedIn: "",
    style: 1,
    experiences: [],
    formations: [],
    languages: [],
    hard_skills: [],
    soft_skills: [],
    hobbys: [],
  };

  const [cv, setCv] = useState([]);

  useEffect(() => {
    CvUpdt.GetCvByUser(
      (data) => {
        console.log(data);
        setCv(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const [popup, setPopup] = useState({
    open: false,
    type: "",
    //value: init_cv,
  });

  const openPopup = (type, data) => {
    console.log(data);
    setPopup({ ...popup, open: true, type: type, value: data });
  };

  const handleClose = () => {
    setPopup({ ...popup, open: false, type: "", value: init_cv });
  };

  return (
    <>
      <div>
        <h1>User Profile</h1>
        <Grid container spacing={1}>
          <Grid item xl={6} lg={6} md={12}>
            <label className={styles.classLabel} htmlFor="name">
              Prénom:{" "}
            </label>
            <label htmlFor="name">{user.firstName} </label>
          </Grid>
          <Grid item xl={6} lg={6} md={12}>
            <label className={styles.classLabel} htmlFor="name">
              Nom:{" "}
            </label>
            <label htmlFor="name">{user.lastName}</label>
          </Grid>
          <Grid item xl={6} lg={6} md={12}>
            <label className={styles.classLabel} htmlFor="phone">
              Numéro de tel:{" "}
            </label>
            <label htmlFor="phone">{user.phoneNumber}</label>
          </Grid>
          <Grid item xl={6} lg={6} md={12}>
            <label className={styles.classLabel} htmlFor="birthdate">
              Date de naissance:{" "}
            </label>
            <label htmlFor="name">{makeDate2(user.birthDate)}</label>
          </Grid>
          <Grid item xl={6} lg={6} md={12}>
            <label className={styles.classLabel} htmlFor="sex">
              Sex:{" "}
            </label>
            <label htmlFor="phone">{user.sex}</label>
          </Grid>
          <Grid item xl={6} lg={6} md={12}>
            <label className={styles.classLabel} htmlFor="email">
              Email:{" "}
            </label>
            <label htmlFor="phone">{user.email}</label>
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={1}>
          <Grid item xl={6} lg={6} md={12}>
            <Button
              autoFocus
              variant="outlined"
              onClick={() => openPopup("update", user)}
            >
              Modifier Profile
            </Button>
          </Grid>
        </Grid>

        {(isALUMINIE(user) || isSTUDENT(user)) && (
          <Button
            autoFocus
            variant="outlined"
            onClick={() => openPopup("show", user)}
          >
            Afficher Cv
          </Button>
        )}
      </div>

      {popup.type === "update" && (
        <UpdateProfile popup={popup} handleClose={handleClose} />
      )}
      {popup.type === "show" && (
        <ShowCv popup={popup} handleClose={handleClose} />
      )}
    </>
  );
}

export default Profile;
