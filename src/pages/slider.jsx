import React from 'react'
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
// import './slider.css'
const Slider = () => {
  return ( 
  <>
  <div> 
    <div class="slideshow-container">


    <div class="mySlides fade">
      <div class="numbertext">1 / 3</div>
      <img src={seventh} style="width:100%"/>
      <div class="text">Caption Text</div>
    </div>
  
    <div class="mySlides fade">
      <div class="numbertext">2 / 3</div>
      <img src={image1} style="width:100%" />
      <div class="text">Caption Two</div>
    </div>
  
    <div class="mySlides fade">
      <div class="numbertext">3 / 3</div>
      <img src={image2} style="width:100%" />
      <div class="text">Caption Three</div>
    </div>
  
    
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>
  </div>
  <br />
  
  
  <div style="text-align:center">
    <span class="dot" onclick="currentSlide(1)"></span>
    <span class="dot" onclick="currentSlide(2)"></span>
    <span class="dot" onclick="currentSlide(3)"></span>
  </div>
  </div>
  </>
  );
}

export default Slider;
