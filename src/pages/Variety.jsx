import React from 'react'
import './Variety.css'
import celebrate from './../assets/school-assets/light.jpg'
import die from './../assets/school-assets/die.jpg'
import Talk from './../assets/school-assets/Talk.jpg'
import Cultural from './../assets/school-assets/bold.jpg'
import teach1 from './../assets/school-assets/teach1.png'
import excellence from './../assets/school-assets/excellence.png'
import military from './../assets/school-assets/army.jpg'
import Footer from './Footer'
const Variety = () => {
    return (
        <>
        <div>
            <h1 className="variety-heading">Variety  - School Gallery</h1>
            <hr className="variety-heading-hr"/>
         
            <div className="variety-image-container"> 
            <div >
                <img src={celebrate} alt=""/>
                <h1>The School That Favours your ward</h1>
                
            </div>
            <div >
                <img src={Talk} alt=""/>
                <div className="overlay"> 
                <h1>Empowering future leaders to lead.</h1>
                </div>
            </div>
            <div >
                <img src={die} alt=""/>
                <div className="overlay"> 
                <h1>CCA - PRACTICAL - TIE & DIE</h1>
                </div>
            </div>
            <div >
                <img src={Cultural} alt=""/>
                <div className="overlay"> 
                <h1>Shaping the future now!!</h1>
                </div>
            </div>
            </div>
            <br/>
            <br/>
            
<p className="text-alumni">Alumni Comments</p>
<hr className="variety-heading-hr" />
<br/>
<div className="alumni-comment-container">
<p> The way to learn, is by experiencing the term called discipline <br/> By acknowledgeing your weakness to get ammendment. <br/> At Mercan Brilliant School  Weaknesses are dealt with to <br/> foster academic excellence. <br/> <br/> Learnining was cultured in me, by well trained and <br/> certified educators <br/>  that taught in a vast way, <br/> I assure you to enroll to see a difference. <br/> <br/> Mercan Brilliant School is a city built <br/> on God's divine foundation.</p>
<img src={teach1} alt=""/>
<h3> Moses Oluwagbemi<br/> <p>Ex Student MBS <br/> Staff MBS Comprehensive College</p></h3>

        </div>
        <br/>
        <br/>
<div className="alumni-comment-container">
<p> Learning was fun in Mercan Brilliant School<br/> As i was opportuned to visualize the mapping and functions  <br/>of an academic institute, with the role of a student i can <br/> attest any student to enroll for their academic program <br/>That Brings a genus in you out. <br/> <br/> Learnining was cultured in me, by well trained and <br/> certified educators <br/>  that taught in a vast way, <br/> I assure you to enroll to see a difference. <br/> <br/> Mercan Brilliant School a school of power .<br/> </p>
<img src={excellence} alt=""/>
<h3> Esther Ogbonna  <br/> <p>Ex Student MBS <br/> Staff Mercan Brilliant School  </p></h3>

        </div>
        </div>
     
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Footer />
        </>
    )
}

export default Variety
