import React from 'react';
import './styleHeader.css';
import { AppBar, Toolbar, CssBaseline, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LogoBeauty from './LogoComponentes2.svg';

function LoggedHeader() {
  const navigate = useNavigate();

  const LogOut = () => {
    navigate('/');
  };

  const HomePage = () => {
    navigate('/home');
  };

  const Products = () => {
    navigate('/products');
  };

  const addPayment = () => {
    navigate('/payment');
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Toolbar className="toolbar">
      <div >
          <img src={LogoBeauty} className="logoBeauty" alt="Icono ack beauty" onClick={() => HomePage()} />
        </div>
      <div className="logo-container">
          <Button
            variant="contained"
            style={{
              textTransform: 'none',
              backgroundColor: '#7ee1e7',
              color: '#004661',
              marginRight: '1rem',
              borderRadius: '0.5rem',
            }}
            onClick={() => Products()}
          >
            Nuevos Productos
          </Button>
          <Button
            variant="contained"
            style={{
              textTransform: 'none',
              backgroundColor: '#e95f4c',
              borderRadius: '0.5rem',
            }}
            
          >
            Método de pago
          </Button>
        </div>
        
        
        <div className="spacer" />
        <div className="buttons-container">
          <Button
            variant="text"
            style={{
              textTransform: 'none',
              borderRadius: '1.3rem',
              color: '#fd8a4b',
              fontSize: '1rem',
              fontWeight: 'bold',
            }}
            onClick={() => LogOut()}
          >
            Cerrar sesión
          </Button>
        </div>
      </Toolbar>
    </React.Fragment>
  );
}

export default LoggedHeader;
