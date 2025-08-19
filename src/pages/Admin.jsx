import React from 'react'
import './Admin.css'
import admin from './../assets/admin.png'
const Admin = () => {
    return (
        <div className="Admin-container">
            <div className='admin-prop'> 
<img src={admin} alt=""/>
           <h1>From the Desk of School Management <br/> <b>   Anthony Ogbaji <br/>Administrator</b></h1>
           </div>
           <hr/>
           <div className="admin-prop-text"> 
           <p>Dear Parents, Guardians, and Esteemed Visitors,
<br/>
Welcome to Mercan Brilliant School   – a home of excellence, discipline, <br/> and holistic education from the early years to adolescence. <br/> <br/> Our institution proudly caters to learners at all stages: Creche, Nursery, Primary, and Secondary.
<br/>
At the heart of our administration is a commitment to maintaining a secure, supportive, and well-organized learning environment. <br/> We work tirelessly to ensure that every child is given the tools, attention, and opportunities needed to thrive academically, socially, and morally.
 <br/>
We value strong communication with our parents and community.  <br/> Whether it’s inquiries, updates, or support, our administrative team is always ready to assist you.
<br/>
Together, let’s build a future where every child flourishes.
<br/>
<br/>
<b> 
Warm regards,
<br/>
Admin Office
<br/>
Mercan Brilliant School </b></p>
</div>
        </div>
    )
}

export default Admin
