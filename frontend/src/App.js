//import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {useNavigate, Router, Routes, Route} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import LoginPage from './LoginPage';
import AboutUs from './AboutUs';
import Home from './Home'
import SignUpPage from './SignUpPage'

function App() {
  const navigate = useNavigate();
  const [getMessage, setGetMessage] = useState({})
  const navigateToLogin = () => {
    navigate("/login")
  }
  const navigateToAbout = () => {
    navigate("/about")
  }
  const navigateToHome = () => {
    navigate("/home")
  }
  const navigateToSignUp = () =>{
    navigate("/signup")
  }
  
  useEffect(()=>{
    axios.get('http://localhost:5000/flask/hello').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])
  return (
      <div className="App">
        <div className="Nav">
          <div className="ButtonLinks">
              <button className="nav__buttons" onClick={navigateToLogin}>Login</button>
              <button className="nav__buttons" onClick={navigateToSignUp}>Sign Up</button>
              <button className="nav__buttons" onClick={navigateToAbout}>About Us</button>
              <button className="nav__buttons" onClick={navigateToHome}>Home</button>
              
          </div>
        </div>
            <Routes>
              <Route exact path ="/login" element={<LoginPage />} />
              <Route exact path ="/about" element={<AboutUs />} />
              <Route exact path ="/" element={<LoginPage />} />
              <Route exact path ="/home" element={<Home />} />
              <Route exact path ="/signup" element={<SignUpPage />} />
            </Routes>
      </div>
  );
}

export default App;

/*
<div className="App">
      <LoginPage/>
      <AboutUs/>
      <Home/>
    </div>
*/