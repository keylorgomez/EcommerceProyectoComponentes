import React from "react";
import "./styleHeader.css";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import LogoBeauty from "./LogoComponentes2.svg";

function Header() {
    const navigate = useNavigate();
    const LogInPage = () => {
      navigate("/");
    };
  
    const registerPage = () => {
      navigate("/register");
    };
  
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar color="default" className="AppBar">
          <Toolbar className="toolbar">
            <div className="logo-container">
              <img src={LogoBeauty} className="logoBeauty" alt="Icono ack beauty" />
            </div>
            <div className="buttons-container">
            <Button
                variant="contained"
                style={{
                  textTransform: "none",
                  backgroundColor: "#7ee1e7",
                  color: "#004661",
                  marginRight: "1rem",
                  borderRadius: "0.5rem",
                }}
                onClick={() => LogInPage()}
              >
                Log In
              </Button>
              <Button
                variant="contained"
                style={{
                  textTransform: "none",
                  backgroundColor: "#e95f4c",
                  borderRadius: "0.5rem",
                }}
                onClick={() => registerPage()}
              >
                Registrar
              </Button>
              
            </div>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
  

export default Header;
