import React from 'react'
import './LoginUI.css'
import './../../pages/font.css'
import schlogo from './.././../assets/logo1.png'
import user from './.././../assets/user.png'
import pswd from './.././../assets/pswd.png'
import celebrate from './.././../assets/celebrate.jpg'
import {Link} from 'react-router-dom'
import Student from './Student'
import Staff from './Staff'
const LoginUI = () => {
    return (
        <>
     <div className="login-container">
       <h1>School Management Portal</h1>
       <hr/>
       <div className="login-bg">
           <div className="sch-container">
           <img src={schlogo} alt=""/>
           <h2 className="login-text">Login Portal <hr/></h2>
           </div>
           <div className="div-header">
               <div className="student-login-container">
               <Link to="/student" >
               <h2></h2>
               

               </Link>
<Student />
               </div>
               {/* <hr style={{
                   height:34
               }}/> */}
               {/* <div className="staff-login-container">
               <Link>
               
               <Staff />
               </Link>
               </div> */}
           </div>
           </div>
     </div>
        </>
    )
}

export default LoginUI
