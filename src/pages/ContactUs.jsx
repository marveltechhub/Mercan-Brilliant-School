import React from 'react'
import { Contact, Mail, Phone, MessageCircle, LocationEditIcon, PhoneCall, LocationEdit, PhoneCallIcon } from 'lucide-react';
import './ContactUS.css'
import { MdPhone } from 'react-icons/md';
const ContactUs = () => {
  return (
    <> 
    <div className="wrap-container"> 
    <div className="contactus-container">
        <div className="contact-flex">

            <h3 className='contact-name'>Mercan Brilliant School  <hr /><br /></h3>
        </div>
        <div className="address-container">
            <h3 style={{
                alignItems:"center",
                display:'flex',
                gap:"12px",
            }}><PhoneCallIcon/>  Phone No I - Headquarters </h3>
           <p style={{
            display:'flex',
            alignItems:'center',
            gap:"11px",
            fontFamily:"RalewayRegular"
           }}><a href="tel:+2348021059190">+2348021059190</a> </p>
        </div>
        <br />
        <div className="address-container" style={{
            gap:"50px",
        }}>
            <h3 style={{
                alignItems:"center",
                display:'flex',
                gap:"12px",
            }}><PhoneCallIcon/>  Phone No II - Anex </h3>
           <p style={{
            display:'flex',
            alignItems:'center',
            gap:"22px",
            fontFamily:"RalewayRegular"
           }}><a href="tel:+2348060872643">+2348060872643</a> </p>
        </div>
        <div className="mail-name">
            <h3> <LocationEdit />  Address I - Headquarters</h3>
            <p style={{
                display:"flex",
                // alignItems:"center",
                gap:"11px",
                fontFamily:"RalewayRegular"
                
            }}> <a href=""> <br />6, Ogunjobi Street Dopemu-Agege  Lagos State.</a> <br /> <br /></p>
            
        </div>
        <div className="mail-name">
            <h3> <LocationEdit />   Address II - Second Branch</h3>
            <p style={{
                display:"flex",
                alignItems:"center",    
                gap:"11px",
                fontFamily:"RalewayRegular"
                
            }}> <a href="">7, Adewunmi Avenue Ayobo-Ipaja Lagos State.</a> <br /> <br /></p>
            
        </div>
        <p style={{
            fontFamily:"MonoRegular",
textAlign:"center",
paddingTop:"30px",
fontStyle:"italic",
        }}>...Knowledge is gotten through learning and hardwork.</p>
    </div>
    </div>
    </>
  )
}

export default ContactUs