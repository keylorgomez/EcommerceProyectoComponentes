import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import './styleLogin.css';
import {
  Grid,
  Container,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  CssBaseline,
  IconButton,
} from "@mui/material";
import LogoBeautyPNG from '../LogoComponentesSinFondo.png';
import swal from 'sweetalert';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    if (!email || !password) {
      swal('Error', 'Por favor, ingrese su correo y contraseña', 'error');
      return;
    }
    try {
      await axios
        .post("http://localhost:8085/api/v1/user/login", {
          email: email,
          password: password,
        })
        .then(
          (res) => {
            console.log(res.data);

            if (res.data.message == "Email not exits") {
              swal('Error', 'El correo electrónico no existe', 'error');
            } else if (res.data.message == "Login Success") {
              navigate("/home");
            } else {
              swal('Error', 'El correo y la contraseña no coinciden', 'error');
            }
          },
          (fail) => {
            console.error(fail); // Error!
          }
        );
    } catch (err) {
      alert(err);
    }
  }

  return (
    <React.Fragment>
      <Header />
      <div>
        <Grid
          container
          component="main"
          style={{
            backgroundColor: "#7ee1e7",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "auto",
            flexWrap: "nowrap",
          }}
        >
          <CssBaseline/>
          <Container component={Paper} elevation={0} maxWidth='xs' className='container' style={{borderRadius:'1.5rem', height:'500px', width:'350px', marginTop:'9.5rem', marginBottom:'5rem',boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)'}}>
          <div className='divLogo'>
                <Avatar>
                    
                </Avatar>
            </div>
            <div className="divTitulos">
              <Typography component='h1' variant='h5' style={{fontSize:'2.2rem', height:'40px', fontWeight:'700', color:'#9e63d7',fontFamily:[ 'Source Sans Pro','sans-serif']}}>Inicio de sesión</Typography>
                  <p style={{margin:'10px 0px 0px 0px', fontSize:'14px'}}>¿Aún no tienes cuenta? <a href='/register' path='/registrar' style={{textDecoration:'none', color:'#e95f4c',fontWeight:'bold'}}>Regístrate</a></p>
            </div>
            <div className='divLogo' style={{marginTop:'2px', marginBottom:'0.2rem'}}>
              <form className='form'>
                <TextField fullWidth autoFocus margin='normal' variant='outlined' label='Correo electrónico' type='email' name='email' id="email" value={email} onChange={(event) => setEmail(event.target.value)}/>

                <TextField fullWidth margin='normal' variant='outlined' label='Contraseña' type='password' name='password' id="password" value={password} onChange={(event) => setPassword(event.target.value)}/>

                <Button
                  fullWidth
                  variant='contained' style={{marginTop:'1rem', backgroundColor:'#dc4ce9', fontWeight:500}} onClick={login}
                  >Iniciar Sesión
                </Button>
              </form>
              <img src={LogoBeautyPNG} alt="Logo ack beauty" className="logo"/>

            </div>

          </Container>
        </Grid>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default Login;
