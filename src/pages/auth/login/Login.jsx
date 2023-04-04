import React, { useState, useContext } from "react";
import styles from "./styles.module.scss";
import AuthServ from "../../../services/Auth.service";
import { UserContext } from "../../../store/Contexts";
import fig1 from "../../../assets/images/figures/login.svg";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CustomizedDialogs from "../../../components/Popup/Popup";
import FullScreenDialog from "../../../components/Popup/FullWidthPopup";
import pendingAnnimation from "../../../assets/annimations/pending.json";
import Lottie from "lottie-react";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      Copyright © IsaMan {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const theme = createTheme();

function Login() {
  const [form, setForm] = useState({
    userName: "58217520",
    password: "58217520",
  });
  const [showPopup,setShowPopup]=useState(false);

  const { setUser } = useContext(UserContext);

  const handle_change = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  const AnnimationPending = () => {
    return <Lottie
    
    style={{resizeMode:'contain',
    alignSelf:'center',
    margin:'auto',
    height:300,width:300}}
    animationData={pendingAnnimation} />;
  };

  const handle_submit = (e) => {
    e.preventDefault();
    const succ = (user) => {
      setUser(user);
    };
    const fail = (error) => {
      if(error=="ALUMINI_INVALIDE")
      {
        //console.log("invalide alumini");
        setShowPopup(true);
      }
    };

    AuthServ.Login(form, succ, fail);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CustomizedDialogs open={showPopup} title={"ACOUNT VALIDATION PENDING"} 
        children={
          <Grid container justifyContent={"center"} direction={"column"} >
          <Grid item xs>
           <div style={{height:270,width:500}}>
            <AnnimationPending/>
           </div>
          </Grid>
          <Grid item>
            <div style={{
              
              textAlign:"center",fontFamily:'inherit',fontWeight:'500',padding:10}}>
            <p>ACOUNT VALIDATION PENDING <br/>WAIT FOR ADMIN VALIDATION</p>
            </div>
          </Grid>
        </Grid>
          
        
        } 
        handleClose={()=>setShowPopup(false)}
        
        />
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Se connecter à IsaMan
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handle_submit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                label="Login"
                name="userName"
                autoFocus
                onChange={handle_change}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mot De Passe"
                type="password"
                onChange={handle_change}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Restez Connectés"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Se connecter
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Mot de passe oublié ?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    Nouvelle Aluminie ? S'inscrire
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
              <p className={styles.passwords}>
                Passwords : <br />
                ST(58217529) ; AL(58217530) ; AD(27893540) ; TE(99800937) ;
                SA(58217520) ; RF(00000000)
              </p>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Login;
