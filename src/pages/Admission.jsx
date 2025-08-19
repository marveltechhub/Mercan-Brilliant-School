import React from 'react'
import './../pages/Admisson.css'
import seventh from './../assets/seventh.jpg'
import AdmissionTypewriterText from './admissiontypewriter'
import './font.css'
import { Link } from 'react-router-dom'
import Services from './Services'
import HeroForm from './HeroForm'

const Admission = () => {
    return (
//         <div className="container">
//            <h4 className="admission">🎓 ADMISSION! 🎓 ADMISSION!! </h4>
//            <hr/>
//            <div className="prop"> 
// <h3>2025/2026 Academic Session Now Open

// Are you looking for a school where excellence is nurtured, values are built, and potential is unlocked from an early age? <br/>
// Your search ends here!

//  <br/> 🌟 Mercan Brilliant Schools proudly announces the commencement of admission into <br/> Crèche, Nursery, Primary, and Secondary classes for the 2025/2026 academic year. <br/>
//  <br/> ✨ Why Choose Us? <br/>
 
// ✅ Creche & Nursery Section
// A safe, loving, and stimulating environment where your child takes their first steps with confidence. Our caregivers are passionate about child development, offering personal attention to each baby and toddler. <br/>
// <br/>

// ✅ Primary School Section <br/>
// We provide a strong academic foundation rooted in literacy, numeracy, and creativity. Our pupils are trained to think critically, solve problems, and communicate effectively. Every child is seen, heard, and valued. <br/>
// <br/>
// ✅ Secondary School Section <br/>
// We go beyond textbooks — cultivating leaders, innovators, and global thinkers. Our curriculum is rich, practical, and balanced with moral and spiritual values, preparing students for both academic success and life beyond the classroom.</h3>
// {/* <img src={seventh} alt="" className="img" /> */}
//            </div>
//         </div>
<>
<div className="container-1"> 
    <header> 
<h2 className="header-text"> <AdmissionTypewriterText /> </h2>
</header>
<div className="prop">
    <div className="prop-1">


<img src={seventh} alt="" className="img"/>

<p className="p-tag">"📢 Admissions in Progress  <br/> for the 2025/2026 Academic Session!  <br/>
From Crèche to Nursery, Primary to Secondary. <br/>      
 Mercan Brilliant School is now enrolling exceptional <br/> young minds for the new session.
<br/>
At Mercan, we go beyond teaching — we inspire, <br/>  nurture, and shape future leaders. Our warm  <br/> learning environment, value-driven education,  <br/> qualified teachers, and commitment to excellence  <br/> make us The School of Choice for every parent who <br/> desires the very best for their child.

 <br/> 🌟 Give your child a brilliant start today  <br/>  — join the Mercan family and experience <br/> education redefined.
<br/>
<hr className="header-rule-1"/>
<br/>
<div className="button"> 

<button className="btn-1"><Link to="/Enroll">  Enroll Your Ward</Link></button>
<button className="btn-2"> <Link to="/ContactUS">  Contact Us </Link></button>
</div>
</p>
    </div>
</div>
</div>
<HeroForm  />
</>
    )
}

export default Admission
