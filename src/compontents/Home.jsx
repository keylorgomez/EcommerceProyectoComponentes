import React from 'react';
import LoggedHeader from './Header/loggedHeader';
import Footer from "./Footer/footer";
import LogoBeauty from './LogoComponentesSinFondo.png';
import { Height } from '@mui/icons-material';

function Home() {
  return (
    <React.Fragment>
      <LoggedHeader/>
      <div style={{ backgroundColor: '#f9a59a', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '20px auto' }}>
          <h2>Bienvenid@ a <strong>ack beauty</strong>!</h2>
          <img src={LogoBeauty} alt="Logo ack beauty" style={{height:"15rem"}}/>
        </div>
      </div>
      <Footer/>
    </React.Fragment>
  )
}

export default Home;
