import React from 'react'
import './styleFooter.css'
import {Typography, Container, CssBaseline} from '@mui/material'
import Instagram from './bxl_instagram.svg'
import Facebook from './facebook.svg'
import WhatsApp from './whatsApp.svg'
import IconoBeauty from './IconoBeauty.svg'



function Footer() {
  return (
    <React.Fragment>
        <CssBaseline/>
        <footer className='footer'>
        <Container maxWidth='sm' style={{display:'flex',flexDirection:'column',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
                <div className='divFooterInitial'>
                    <img src={IconoBeauty} className='iconosBeauty' alt="Perfil Instagram" />
                    <Typography align='center'  style={{color:'#fff', fontSize:'18px', fontWeight:'bold',padding:'40px 0 10px 0'}}>
                        ack beauty
                    </Typography>
                </div>
                
                <div className='divFooter'>
                    <a href="https://www.instagram.com/" target="_blank"><img src={Instagram} className='iconosFooter' alt="Perfil Instagram" /></a>
                    <a href="https://www.facebook.com/" target="_blank"><img src={Facebook} className='iconosFooter' alt="Perfil Facebook" /></a>
                    <a href="https://web.whatsapp.com/" target="_blank"><img src={WhatsApp} className='iconosFooter' alt="Chat WhatsApp" /></a>
                </div>
                <hr className='lineaFooter'/>
                <Typography align='center' style={{color:'#fff'}}>© {new Date().getFullYear()} ACK BEAUTY</Typography>
                <Typography align='center' style={{color:'#fff'}}>Todos los derechos reservados.</Typography>

            </Container>

        </footer>

    </React.Fragment>
  )
}

export default Footer
