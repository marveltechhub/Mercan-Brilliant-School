import React from 'react'
import LoginUI from './LoginUI'
import './Student.css'
import pswd from './.././../assets/pswd.png'
import user from './.././../assets/user.png'
const Student = () => {
    return (
      <>
       <div className="student-container-form">
         <img src={user} alt=""/>
         <input type="number" placeholder="Ref No"/>
         <br/>
         <br/>
         {/* <input type="text" placeholder="Ref No"/> */}
       </div>
       <div className="student-container-form">
        <img src={pswd} alt=""/>
         <input type="text-number" placeholder="Password"/>
         <br/>
         <br/>
         {/* <input type="text" placeholder="Ref No"/> */}
       </div>
       <div className="btn-container">
         <button>Login ➡</button>
       </div>
       <div className="copyright-container">
         <p>Copyright (c) Mercan Brilliant School.</p>
       </div>
       </>
    )
}

export default Student
