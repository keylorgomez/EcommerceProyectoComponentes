import React from "react";
import { useState } from "react";
import axios from "axios";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import '../Login/styleLogin.css';
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
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import swal from 'sweetalert';

function Register() {
  const [idcard, setidcard] = useState("");
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  async function save(event) {
    event.preventDefault();
    // Validaciones de campos
  if (!idcard || !username || !email || !address || !phone || !password) {
    swal('Error', 'Todos los campos son requeridos', 'error');
    return;
  }
    try {
      await axios.post("http://localhost:8085/api/v1/user/save", {
        idcard: idcard,
        username: username,
        email: email,
        address: address,
        phone: phone,
        password: password,
      });
      swal('¡Registro exitoso!', 'Usuario registrado exitosamente', 'success');
    } catch (err) {
      swal('Error', 'Hubo un problema al registrar al usuario. Inténtalo de nuevo más tarde', 'error');
    }
  }

  return (
    <React.Fragment>
      <Header/>
      <div>
        <Grid container
          component="main"
          style={{
            backgroundColor: "#f9a59a",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "auto",
            flexWrap: "nowrap",
          }}>
            <CssBaseline/>
            <Container component={Paper} elevation={0} maxWidth='xs' style={{borderRadius:'1.5rem', minHeight:'600px', width:'350px', marginTop:'6.5rem', marginBottom:'5rem',boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)'}} >
              <div className='divLogo'>
                <Avatar>
                  <PersonAddRoundedIcon/>
                </Avatar>
              </div>
                <div className="divTitulos">
                <Typography component='h1' variant='h5' style={{fontSize:'2rem', height:'40px', fontWeight:'700', color:'#fdb44b',fontFamily:[ 'Source Sans Pro','sans-serif']}}>Registrar usuario</Typography>

                <p style={{margin:'10px 0px 0px 0px', fontSize:'14px'}}>¿Ya tienes cuenta? <a href='/' path='/' style={{textDecoration:'none', color:'#269cc2',fontWeight:'bold'}}>Inicia sesión</a></p>
              </div>
              <div className="divLogo" style={{marginTop:'2px', marginBottom:'0.2rem'}}>
                <form className='form'>
                  <TextField fullWidth autoFocus margin='normal' variant='outlined' label='Cédula' type="text" name='idcard' id="idcard" value={idcard} onChange={(event) => setidcard(event.target.value)}/>

                  <TextField fullWidth autoFocus margin='normal' variant='outlined' label='Correo electrónico' type='email' name='email' id="email" value={email} onChange={(event) => setEmail(event.target.value)}/>

                  <TextField fullWidth autoFocus margin='normal' variant='outlined' label='Nombre de usuario' type="text" name='username' id="username" value={username} onChange={(event) => setusername(event.target.value)}/>

                  <TextField fullWidth autoFocus margin='normal' variant='outlined' label='Dirección' type="text" name='address' id="address" value={address} onChange={(event) => setAddress(event.target.value)}/>

                  <TextField fullWidth autoFocus margin='normal' variant='outlined' label='Telefono' type="number" name='phone' id="phone" value={phone} onChange={(event) => setPhone(event.target.value)}/>

                  <TextField fullWidth margin='normal' variant='outlined' label='Contraseña' type='password' name='password' id="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                  <Button
                  fullWidth
                  variant='contained' style={{margin:'1rem 0 1.5rem 0', backgroundColor:'#e95f4c', fontWeight:500}} onClick={save}
                  >Registrar
                </Button>
                </form>
              </div>

            </Container>

        </Grid>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Register;
