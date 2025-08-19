import React from 'react'
import './Alumni.css'
import './font.css'
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
import pencil from './../assets/pencil.jpg'
import marvellous from './../assets/marvellous.jpg'
import micheal from './../assets/micheal.jpg'
import ugo from './../assets/ugo.jpg'
import Management from './Management'
import esther from './../assets/esther.png'
const Alumni = () => {
    return (
        <>
        <div className="alumni-container">
            <h1 className="alumni-container-text">Meet  Student's</h1>
        </div>
        <br/>
        <div className="flex-alumni"> 
        <div className="profile-alumni">
<img src={ugo} alt=""/>
<div className="profile-text-container"> 

<br/>
<p className="profile-text">A school more than just a place of learning - it's a community that fosters growth, creativity, and excellence. <br/> <br/> From nurturing young minds to shaping future leaders, our school's dedication to education is truly remarkable.  <br/> <br/> As a former student, I can attest to the transformative power of our school's values-driven approach. <br/> <br/> The lessons i learned here have stayed with me, shaping my perspective and guiding my path.</p>
<br/>
<h3>- Onyema Marvellous </h3>
<p className="under-name">  Asst Head Prefect <br/>2025/2026 Academic Session.</p>
<br/>
</div>
        </div>
        <div className="profile-alumni">
<img src={micheal} alt=""/>
<div className="profile-text-container"> 

<br/>
<p className="profile-text">My time at Mercan Brilliant Comprehensive College was truly transformative <br/> <br/> The academic excellence, discipline, and leadership opportunities helped shape who I am today  <br/> <br/>I’m proud to have been part of a school that builds not just minds, but character. <br/> <br/> Mercan Brilliant Comprehensive College gave me the platform to grow academically, morally, and as a leader.</p>
<br/>
<h3>- Obeten Micheal</h3>
<p className="under-name">   Head Prefect <br/>2025/2026 Academic Session.</p>

<br/>
</div>
        </div>
        <div className="profile-alumni">
<img src={esther} alt=""/>
<div className="profile-text-container"> 

<br/>
<p className="profile-text">As an ex-student of Mercan Brilliant School, I can say their Pillar of Knowledge truly shaped my learning experience. <br/> <br/> The school’s commitment to excellence pushed me to work hard and think critically.  <br/> <br/> As a former student, I can attest to the transformative power of our school's values-driven approach. <br/> <br/> It wasn’t just about textbooks but understanding and applying knowledge in real life.</p>
<br/>
<h3>- Ogbonna Esther</h3>
<p className="under-name">   Head Girl <br/>2024/2025 Academic Session.</p>

<br/>
</div>
       
        </div>
        <br/>
        <br/>
        <div> 
            
        
        
        </div>
        </div>
        {/* <Management /> */}
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </>
    )
}

export default Alumni
