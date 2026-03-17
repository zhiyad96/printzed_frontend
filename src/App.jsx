import React from 'react'
import Home from './pages/Home'
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
import Page5 from './pages/page5'
import Footer from './components/footer';
import Navbar from './components/navbar';

function Apps() {
  return (
    <div>
        <Navbar/>   
        <Home/>
        <Page1/>
        <Page2/>
        <Page3/>
        <Page4/>
        <Page5/>
        <Footer/>
        

    </div>
  )
}

export default Apps;