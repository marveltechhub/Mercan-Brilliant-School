import { useState, useEffect } from 'react'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import './pages/font.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './pages/Navbar.jsx'
import Management from './pages/Management.jsx'
import SplashScreen from './pages/SplashScreen.jsx'
import Admin from './pages/Admin.jsx'
import Events from './pages/Events.jsx'
import LoginUI from './LoginComponent/Login/LoginUI.jsx'
import Student from './LoginComponent/Login/Student.jsx'
import Enroll from './pages/Enroll.jsx'
import ContactUs from './pages/ContactUs.jsx'
const App = ()  =>   {
  const [loading, setLoading] = useState(true);


  
  
  useEffect(() => {
    // Wait for 2.5 seconds before showing the app
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5900);

   
  }, []);
  return (
    <div>
  {loading ? <SplashScreen /> : (
    <div>
<Router>

<Navbar  />
<br />
<br/>
<br/>
<br/>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About/>} />
      <Route  path="/Services" element={<Services/>}/>
    <Route  path="/admin" element={<Admin />}  />
    <Route  path="/event" element={<Events />} />
    <Route  path="/Login" element={<LoginUI />} />
    <Route  path="/Student" element={<Student />} />
    <Route   path='/Enroll' element={<Enroll />}  />
    <Route  path='/ContactUs' element={<ContactUs />} />
    </Routes>
    
  </Router>
    </div>
  ) }
    </div>
  
    
  

  )
}

export default App
