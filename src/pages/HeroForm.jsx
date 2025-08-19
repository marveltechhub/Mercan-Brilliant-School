import React from 'react'
import './heroform.css'
import './font.css'
import third from './../assets/third.jpg'
import Alumni from './Alumni'
const HeroForm = () => {
    return (
        <div className="section-nav">
             <div>
            <h1 className="section-nav-text"> Education Impact</h1>
            <br/>
            </div>
<div className="image-wrapper-serv">
    <img src={third} alt="" className="img" />
    <br/>
   
    <p className="opposite-text"> <p className="alumni">Alumni </p> <br/> <b> -Asst Head Prefect 2025/2026 Academic Session</b> <br/> <br/> <p className='p-p'>“Think of were to fufil your visions as a student -  <br/> with  variety of attractive professions arrayed with their <br/> income looking charming -   Discipline can culture focus  <br/> And bring a desired dream to manifestation.” </p>  
    <br/> <b> - Onyema Marvellous  <br/>- Senior Secondary School 2</b>
    </p>
    {/* <p className="opposite-text">
        <b className="b-1"> “</b>
      <b>Think of were to fufil your visions as a student -  <br/> with  variety of attractive professions arrayed 
    </p> */}
</div> 
<div>
    <Alumni />
</div>
        </div>
    )
}

export default HeroForm
