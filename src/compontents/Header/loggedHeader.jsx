import React from 'react'
import "./styleHeader.css";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import LogoBeauty from "./LogoComponentes2.svg";

function LoggedHeader() {
    const navigate=useNavigate()
    const LogOut=()=>{
        navigate('/')
    }
  return (
    <React.Fragment>
      <CssBaseline/>
      <Toolbar className="toolbar">
        <div className="logo-container">
            <img src={LogoBeauty} className="logoBeauty" alt="Icono ack beauty" />
        </div>
        <div className="buttons-container">
            <Button variant='text' style={{textTransform:'none', borderRadius:'1.3rem', color:'#fd8a4b', fontSize:'1rem', fontWeight:'bold'}} onClick={()=>LogOut()}>Cerrar sesión</Button>
        </div>

      </Toolbar>
    </React.Fragment>
  )
}

export default LoggedHeader;
