import React from 'react';
import LoggedHeader from '../../compontents/Header/loggedHeader';
import Footer from "../../compontents/Footer/footer";
import LogoBeauty from '../../compontents/LogoComponentesSinFondo.png';
import { Height } from '@mui/icons-material';
import MainCarosel from '../../compontents/HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../../compontents/HomeSectionCarosel/HomeSectionCarosel'
import {skin} from '../../Data/skin'



function HomePage() {
  return (
    <React.Fragment>
      <LoggedHeader/>
      <div style={{backgroundColor: '#f9a59a'}}>
        <MainCarosel/>
        <div className='space-y-10 py-20  flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarosel data={skin} sectionName={"Catálogo maquillaje"}/>
        
        </div>
      </div>
      <Footer/>
    </React.Fragment>
  )
}

export default HomePage;
