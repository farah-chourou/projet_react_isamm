import React, { useEffect, useState } from "react";

import Dialog from "../../../../components/Popup/Popup";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import styles from "./styles.module.scss";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Select from "../../../../components/Inputs/Select";

import PromoServ from "../../../../services/Promotion.service";
import ProjetServ from "../../../../services/Projet.service";
import TechloServ from "../../../../services/technologies.service";
import { makeDate2 } from "../../../../functions/Dates.functions";
import { toast } from "react-hot-toast";

function AddStage({ popup, handleClose }) {
  const { open, value, callback } = popup;
  const [promos, setPromos] = useState([]);
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    technologies: [],
    societe: "",
    type: "STAGE",
    promotion: "",
    startDate: new Date(),
    endDate: new Date(),
  });

  const handle_change = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handle_add_tech = () => {
    setForm({ ...form, technologies: [...form.technologies, ""] });
  };

  const handle_del_tech = (index) => {
    const new_techs = [...form.technologies];
    new_techs.splice(index, 1);

    setForm({ ...form, technologies: new_techs });
  };

  const handle_change_tech = (index, value) => {
    const new_techs = [...form.technologies];
    new_techs[index] = value;

    setForm({ ...form, technologies: new_techs });
  };

  useEffect(() => {
    const fail = () => {};
    PromoServ.GetAllPromotions(setPromos, fail);
    TechloServ.GetTechs()
      .then((resp) => setTechs(resp.data.data))
      .catch(() => {
        console.log("error");
      });
  }, []);

  const handleSubmit = () => {
    setLoading(true);
    ProjetServ.AddProject(form)
      .then((resp) => {
        console.log(resp);
        callback();
        handleClose();
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.response.data.Message);
      });
  };

  return (
    <Dialog
      open={open}
      handleClose={handleClose}
      title={"Ajouter un nouvel Stage"}
      width="md"
    >
      <DialogContent dividers>
        <div className={styles.card}>
          <Typography variant="h5" component="h1">
            Informations Générales
          </Typography>
          <Grid container spacing={1}>
            <Grid item xl={12} lg={12} md={12}>
              <TextField
                fullWidth
                className={styles.textField}
                label="Titre"
                name="title"
                value={form.title}
                onChange={handle_change}
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12}>
              <TextField
                fullWidth
                type="text"
                className={styles.textField}
                label="Societe"
                name="societe"
                value={form.societe}
                onChange={handle_change}
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12}>
              <Select
                className={styles.textField}
                value={form.promotion}
                label="Promotion"
                name="promotion"
                onChange={handle_change}
                items={promos.map((prom) => ({
                  name: prom.title,
                  value: prom.title,
                }))}
              />
            </Grid>
            <Grid item xl={6} lg={6} md={12}>
              <TextField
                fullWidth
                type="date"
                className={styles.textField}
                label="Date de debut"
                name="startDate"
                value={makeDate2(form.startDate)}
                onChange={handle_change}
              />
            </Grid>
            <Grid item xl={6} lg={6} md={12}>
              <TextField
                fullWidth
                type="date"
                className={styles.textField}
                label="Date de fin"
                name="endDate"
                value={makeDate2(form.endDate)}
                onChange={handle_change}
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12}>
              <TextField
                fullWidth
                type="email"
                className={styles.textField}
                label="Description"
                name="description"
                value={form.description}
                onChange={handle_change}
                multiline
                rows={4}
              />
            </Grid>

            {form.technologies.map((value, key) => {
              return (
                <Grid key={key} item xl={4} lg={4} md={12}>
                  <Grid container spacing={1}>
                    <Grid item xl={9} lg={9} md={9}>
                      <Autocomplete
                        id="free-solo-demo"
                        freeSolo
                        options={techs.map((option) => option.title)}
                        onChange={(event, newValue) => {
                          handle_change_tech(key, newValue);
                        }}
                        value={value}
                        renderInput={(params) => (
                          <TextField
                            value={value}
                            {...params}
                            label={`Technology N° ${key + 1}`}
                            className={styles.textField}
                            onChange={(e) => {
                              handle_change_tech(key, e.target.value);
                            }}
                          />
                        )}
                      />
                    </Grid>
                    <Grid
                      item
                      xl={3}
                      lg={3}
                      md={3}
                      className={styles.center_btn}
                    >
                      <Button
                        autoFocus
                        variant="contained"
                        fullWidth={true}
                        onClick={() => {
                          handle_del_tech(key);
                        }}
                      >
                        Del
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
            <Grid item xl={4} lg={4} md={12} className={styles.center_btn}>
              <Button
                autoFocus
                variant="contained"
                fullWidth={true}
                onClick={handle_add_tech}
              >
                Ajouter Tech
              </Button>
            </Grid>
          </Grid>
        </div>
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

export default AddStage;
