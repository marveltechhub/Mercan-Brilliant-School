import React from 'react'
import './Footer.css'
import Contact  from './../pages/ContactUs'
import phone from '././../assets/phone-logo.png'
import gmail from '././../assets/gmail.png'
import gps from '././../assets/gps.png'
import { LocateFixedIcon, Mail, MailIcon, PhoneCall, PhoneCallIcon, PhoneForwarded } from 'lucide-react'
const Footer = () => {
    return (
        <> 
        <div className="footer-container" >
           <div className="newsletter">
<h1 className="newsletter-text">Contact Us</h1>
<i className="italic-newsletter-text">Make Your Dream A Reality</i>

           </div>
           
           <div className="contact-us"> 
            <div className="phone-flex" style={{
                display:"flex",
alignItems:"center",
}}> 
            {/* <img src={phone} alt=""/> */}
            <a style={{
                display:"flex",
                alignItems:"center",
                gap:"20px"
            }} href="tel:+2348021059190"><PhoneCallIcon />  +2348021059190,  <a href="tel:+2348060872643">+2348060872643</a> </a>
            </div>
            <div className="mail-flex">
                {/* <img src={mail} alt=""/> */}
                <a  style={{
                    gap:"10px",
                    display:"flex",
                    alignItems:"center",
                    paddingTop:"20px"
                }} href="mailto:anthonyogbaji55@gmail.com"><Mail /> mercanbrilliantschool@gmail.com</a> 
                {/* <a href="mailto:marvellousonyema32@gmail.com">marvellousonyema32@gmail.com</a>  */}
                
            </div>
            <div className="location-gps" style={{
                flexWrap:"wrap",
                display:"flex",
                
                alignItems:"center",
            }}>
                {/* <img src={gps} alt=""/> */}
                
    <a href="https://maps.app.goo.gl/wyCQNMrANxCgxsDL8" style={{
        display:"flex",
        paddingTop:"3px",
gap:"10px",
alignItems:"center",
flexWrap:"wrap",
width:"500px",
}}> <LocateFixedIcon /> 6, Ogunjobi Street Dopemu-Agege Lagos State.     
    <a  style={{
        display:"flex",
        alignItems:"center",
    }} href="https://maps.app.goo.gl/f41hJPBjcXwoe9iG9"> <LocateFixedIcon /> 7, Adewunmi Avenue Ayobo-Ipaja Lagos State.</a>
    </a>
            </div>
              {/* <a href="">6, Ogunjobi Street Dopemu-Agege Lagos State.</a> */}
            </div>
        </div>
        </>
    )
}

export default Footer
