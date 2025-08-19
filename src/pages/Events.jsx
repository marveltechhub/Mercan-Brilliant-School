import React from 'react'
import './Events.css'
import indomie from './../assets/school-assets/indomie.jpg'
import pri6 from './../assets/school-assets/pri6.jpg'
import army from './../assets/school-assets/army.jpg'
import external from './../assets/school-assets/external.jpg'
import sport from './../assets/school-assets/sport.jpg'
import force from './../assets/school-assets/force.jpg'
const Events = () => {
    return (
        <div className="event-container">
           <div>
          <h1 className="header">Our Gallery</h1>
        <hr className="header-ruler"/>
           <div className="text-events"> 
           <h2>Welcome To MBS EVENT DESK </h2>
           <p>Take a good look at few of our events taken during <b>LOTC</b><br/>(Learning Outside The Classroom).........................................</p>
           </div>
           </div>
          <div className="profile-event-container">
               <div className="each-profile">
                   <img src={indomie} alt=""/>
                   <h1 className="event-profile-text">Excursion To Indomie Company</h1>
               </div>
               <div className="each-profile">
                   <img src={pri6} alt=""/>
                   <h1 className="event-profile-text">Shopping After Common Entrance</h1>
               </div>
               <div className="each-profile">
                   <img src={army} alt=""/>
                   <h1 className="event-profile-text">Armed Forces Still Are Educated Here</h1>
               </div>
               <div className="each-profile">
                   <img src={external} alt=""/>
                   <h1 className="event-profile-text">We Are Still Ahead At External Examination (Common Entrance)</h1>
               </div>
               <div className="each-profile">
                   <img src={sport} alt=""/>
                   <h1 className="event-profile-text">No One Defeats MBS FC </h1>
               </div>
               <div className="each-profile">
                   <img src={force} alt=""/>
                   <h1 className="event-profile-text">MBS SCHOOL ARMIES DEPLOYED TO WAR AGAINST THEFT </h1>
               </div>
           </div>
        </div>
    )
}

export default Events
