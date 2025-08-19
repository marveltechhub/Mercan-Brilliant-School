import React from 'react'
import { useEffect, useState } from 'react'
import './Home.css'
import Slider from './slider.jsx'
import './font.css'
import { Link } from 'react-router-dom'
import Admission from './Admission.jsx'
import logo from './../assets/logo1.png'
import first from './../assets/first.jpg'
import second from './../assets/second.jpg'
import third from './../assets/third.jpg'
import fourth from './../assets/fourth.jpg'
import fifth from './../assets/fifth.jpg'
import sixth from './../assets/sixth.jpg'
import seventh from './../assets/seventh.jpg'
import image1 from './../assets/image1.jpg'
import image2 from './../assets/image2.jpg'
import dream1 from './../assets/dream.jpg'
import { Pencil } from 'lucide-react'
import TypeWriter from './TypeWriter.jsx'
import Management from './Management'


const Home = () => {
    
    return (
        <>
       <div className="container"> 
       <div className="image-wrapper"> 
       <img src={logo} alt=""/>
       
     

{/* <div className="container">  */}
<h2 ><TypeWriter /></h2>
<h4> <b className="embolden-1"> “</b>The Citadel Of Divine Wisdom <b className="embolden-1">”</b> <br/></h4>
<hr className="header-rule"/>
         </div>

         <p className="para-graph"> <b className="embolden"> “</b> At Mercan Brilliant School, we don’t just educate <br/> — we ignite a lifelong passion for excellence. <br/> Recognized for our caring environment, high <br/> academic standards, and moral values, we  <br/> stand as the benchmark in quality education from <br/> crèche through secondary school. With experienced <br/>
          teachers, innovative learning, and a nurturing atmosphere, <br/> Mercan Brilliant School continues to produce confident, <br/> disciplined, and brilliant learners who lead wherever they <br/> go. When you choose Mercan, you choose the best. <br/>  <b className="embolden">“</b> <br/></p>
{/* </div> */}
{/* <br/> */}
  {/* <Admission /> */}
  </div>
  <br/>
  <br/>
  <Admission />
  <Management />
</>
    );
}

export default Home
