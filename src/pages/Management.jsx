import React from 'react';
import './Management.css';
import admin from './../assets/admin.png';
import amarachi from './../assets/amarachi.jpg';
import user from './../assets/user.png';
import { Link } from 'react-router-dom';
import Variety from './Variety';
import { User2Icon } from 'lucide-react';
const Management = () => {
    return (
        <> 
        <div className="management-container">
            <h1>Meet The Management</h1>
            <hr className="management-container-hr" />
            <br/>
            <br/>
            <div className="profile-container"> 
            <div className="profile-admin" >
                <img src={user} alt="" />
                
                <h2> Marcillina Ogbaji</h2>
                <h1>Education Secretary</h1>
                <div className="profile-admin-text"> 
               <button> <a href="tel:+2348060872643">Contact Me</a></button>
               <button><a href="mailto:mercanbrilliantschool55@gmail.com">Email Me</a></button>
                </div>
            </div>
            <div className="profile-admin" >
                <img src={admin} alt=""/>
                
                <h2>Anthony Ogbaji </h2>
                <h1>Administrator</h1>
                <div className="profile-admin-text"> 
               <button><a href="tel:+2348021059190">Contact Me</a></button>
               <button><a href="mailto:anthonyogbaji55@gmail.com">Email Me</a></button>
                </div>
            </div>
            <div className="profile-admin" >
                <img src={amarachi} alt=""/>
                
                <h2>Onyema Precious  </h2>
                <h1>Secretary</h1>
                <div className="profile-admin-text"> 
               <button><a href="tel:+2349079002353">Contact Me</a></button>
               <button><a href="mailto:onyemaprecious53@gmail.com">Email Me</a></button>
                </div>
            </div>
           
            
            </div>
            
        </div>
        <br/>
        <br/>
        <Variety />
        </>
    )
}

export default Management
