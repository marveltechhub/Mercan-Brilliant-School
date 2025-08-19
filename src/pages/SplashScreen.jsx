import React from 'react'
import './SplashScreen.css'
import logo from './../assets/sch.jpg'
const SplashScreen = () => {
    return (
        <div className="splash-screen">
            <img src={logo} alt=""/>
            <h1 className="logo-text">Mercan Brilliant School <br/>  <p>Nuturing Student To Academic Excellence.</p></h1>
           
            {/* <div className="loader"></div> */}
        </div>
    )
}

export default SplashScreen
