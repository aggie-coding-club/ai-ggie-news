import React from 'react'
import { useState } from 'react'
import axios from "axios";
import logo from './logo.svg';
import './App.css';
import './AboutUs.css';
import WhiteIcon from './images/aiggieNewsWhiteIcon.png'
import TeamPhoto from './images/teamPhoto.jpg'

function AboutUs() {

    // new line start
   const [profileData, setProfileData] = useState(null)
 
   function getData() {
     axios({
       method: "GET",
       url:"/articles",
     })
     .then((response) => {
         console.log("Info recieved")
         
       const res =response.data
       console.log(res.name)
       setProfileData(({
         profile_name: res.title,
         about_me: res.content}))
     }).catch((error) => {
       if (error.response) {
         console.log(error.response)
         console.log(error.response.status)
         console.log(error.response.headers)
         }
     })}
     //end of new line 
 
   return (
    <div className="About-us">
      <h1 className='About-header'>About Us</h1>
      <div className="Hero">
        <img id="About-team" src={TeamPhoto} alt="" />
        <div className='About-bgd'>
          <div className="About-logo">
            <img id="About-logo" src={WhiteIcon} alt=""/>
          </div>
          <div className="About-description">
            <p>We are Ai-ggie News. This is a project for the Aggie Coding Club(ACC) to build a practical news website that gives A&M related articles based 
              on the user's preference. The team had around 30 members. Project Manager: Christion
            </p>
          </div>
        </div>
      </div>
      <div className="About-body">
        <div className="About-skills">
          <h2>Skills</h2>
          <ul className='About-list'>
            <li>Frontend: React, HTML, CSS, JS</li>
            <li>Backend: Flask, Selenium (Webscraping), Tensorflow (Doc2Vec Model)</li>
            <li>Integration: Axios</li>
          </ul>
        </div>
        <div className='About-challenges'>
          <h2>Challenges</h2>
        </div>
        <div className="About-websites">
          <h2>Websites (Linked)</h2>
          <ul className='About-list'>
            <li><a className='About-link' href="https://www.thebatt.com">Battalion</a></li>
          </ul>
        </div>
      </div>
    </div>
   );
 }
 
export default AboutUs;