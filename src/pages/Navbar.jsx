import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import logo from './../assets/logo.png'
const Navbar = () => {
  

    return (
      <>
       <nav className="nav-container"> 
       <div className="first-name">
         <Link to="/">        
           <img src={logo} className="logo" alt="" />
           <span className="text">Mercan Brilliant School</span>
           </Link>
           </div>
           <div className="navbar-right" > 
           
    <Link to='/' className="links">Home </Link>
    <Link to="/event" className="links">Events</Link>
  <Link to="/services" className="links"> Meet Alumni </Link> 
  <Link to="/admin" className="links"> Management </Link> 
  {/* <Link to="/Login" className="links"> MBS Portal </Link>  */}
</div>
       </nav>
      </>
    )
}

export default Navbar
