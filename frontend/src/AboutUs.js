import React from 'react'
import { useState } from 'react'
import axios from "axios";
import logo from './logo.svg';
import './App.css';
import './AboutUs.css';

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
     <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p>
           Edit <code>src/App.js</code> and save to reload.
         </p>
         <a
           className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
         >
           Learn React
         </a>
 
         {/* new line start*/}
         <p>To get your profile details: </p><button onClick={getData}>Click me</button>
         {profileData && <div>
               <p>Profile name: {profileData.profile_name}</p>
               <p>About me: {profileData.about_me}</p>
             </div>
         }
          {/* end of new line */}
       </header>
     </div>
   );
 }
 
 export default AboutUs;