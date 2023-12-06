import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoggedHeader from '../../compontents/Header/loggedHeader';
import Footer from "../../compontents/Footer/footer";
import '../Login/styleLogin.css';
import {
  Grid,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  CssBaseline,
  IconButton,
} from "@mui/material";
import LogoBeautyPNG from '../LogoComponentesSinFondo.png';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import swal from 'sweetalert';

function Payment() {
  const [idcard, setIdcard] = useState("");
  const [cardnumber, setCardnumber] = useState("");
  const [name, setName] = useState("");
  const [expired, setExpired] = useState("");
  const [cvc, setCvc] = useState("");
  const [payments, setPayments] = useState([]);

  const save = async (event) => {
    event.preventDefault();
    // Validaciones de campos
    if (!idcard || !cardnumber || !name || !expired || !cvc) {
      swal('Error', 'Todos los campos son requeridos', 'error');
      return;
    }
    try {
      await axios.post("http://3.135.240.72:8080/api/v1/payment/save", {
        idcard,
        cardnumber,
        name,
        expired,
        cvc,
      });
      swal('¡Registro exitoso!', 'Metodo de pago registrado exitosamente', 'success');
    } catch (err) {
      swal('Error', 'Hubo un problema al registrar metodo de pago. Inténtalo de nuevo más tarde', 'error');
    }
  };

  const getPayments = async () => {
    try {
      const response = await axios.get(`http://3.135.240.72:8080/api/v1/payment/getByUserIdcard/${idcard}`);
      setPayments(response.data);
    } catch (error) {
      console.error('Error al obtener métodos de pago:', error);
    }
  };

  useEffect(() => {
    // Cargar métodos de pago al montar el componente o al cambiar la cédula
    if (idcard) {
      getPayments();
    }
  }, [idcard]);

  return (
    <React.Fragment>
      <LoggedHeader/>
      <div>
        <Grid
          container
          component="main"
          style={{
            backgroundColor: "#f9a59a",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "auto",
            flexWrap: "nowrap",
          }}
        >
          <CssBaseline/>
          <Container
            component={Paper}
            elevation={0}
            maxWidth='xs'
            style={{
              borderRadius: '1.5rem',
              minHeight: '600px',
              width: '350px',
              marginTop: '6.5rem',
              marginBottom: '5rem',
              boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
            }}
          >
            <div className='divLogo'>
            </div>
            <div className="divTitulos">
              <Typography component='h1' variant='h5' style={{fontSize: '1.5rem', height: '40px', fontWeight: '700', color: '#fdb44b', fontFamily: ['Source Sans Pro', 'sans-serif']}}>Registrar metodo de pago</Typography>
            </div>
            <div className='divLogo' style={{marginTop: '2px', marginBottom: '0.2rem'}}>
              <form className='form'>
                <TextField
                  fullWidth
                  autoFocus
                  margin='normal'
                  variant='outlined'
                  label='Cédula'
                  type="number"
                  name='idcard'
                  id="idcard"
                  value={idcard}
                  onChange={(event) => setIdcard(event.target.value)}
                />

                <TextField
                  fullWidth
                  autoFocus
                  margin='normal'
                  variant='outlined'
                  label='Numero de tarjeta'
                  type='number'
                  name='cardnumber'
                  id="cardnumber"
                  value={cardnumber}
                  onChange={(event) => setCardnumber(event.target.value)}
                />

                <TextField
                  fullWidth
                  autoFocus
                  margin='normal'
                  variant='outlined'
                  label='Nombre de titular de tarjeta'
                  type="text"
                  name='name'
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />

                <TextField
                  fullWidth
                  autoFocus
                  margin='normal'
                  variant='outlined'
                  label=''
                  type="date"
                  name='expired'
                  id="expired"
                  value={expired}
                  onChange={(event) => setExpired(event.target.value)}
                />

                <TextField
                  fullWidth
                  autoFocus
                  margin='normal'
                  variant='outlined'
                  label='Codigo de seguridad'
                  type="number"
                  name='cvc'
                  id="cvc"
                  value={cvc}
                  onChange={(event) => setCvc(event.target.value)}
                />

                <Button
                  fullWidth
                  variant='contained'
                  style={{margin: '1rem 0 1.5rem 0', backgroundColor: '#e95f4c', fontWeight: 500}}
                  onClick={save}
                >
                  Guardar
                </Button>

                <TextField
                  fullWidth
                  autoFocus
                  margin='normal'
                  variant='outlined'
                  label='Cédula'
                  type="number"
                  name='idcardList'
                  id="idcardList"
                  value={idcard}
                  onChange={(event) => setIdcard(event.target.value)}
                />

                <Button
                  fullWidth
                  variant='contained'
                  style={{marginTop: '1rem', backgroundColor: '#dc4ce9', fontWeight: 500}}
                  onClick={getPayments}
                >
                  Obtener métodos de pago
                </Button>

                {/* Muestra los métodos de pago */}
                {payments.length > 0 && (
                  <div>
                    <Typography component='h2' variant='h6' style={{fontSize: '1.2rem', fontWeight: '600', color: '#9e63d7', marginTop: '1rem'}}>Métodos de Pago:</Typography>
                    <ul>
                      {payments.map(payment => (
                        <li key={payment.id}>{payment.cardnumber} - {payment.name}</li>
                      ))}
                    </ul>
                  </div>
                )}

              </form>
            </div>

          </Container>
        </Grid>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Payment;