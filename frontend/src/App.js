//import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {useNavigate, Router, Routes, Route} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import LoginPage from './LoginPage';
import AboutUs from './AboutUs';
import Home from './Home'

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
              <button onClick={navigateToLogin}>Login</button>
              <button onClick={navigateToAbout}>AboutUs</button>
              <button onClick={navigateToHome}>Home</button>
          </div>
        </div>
            <Routes>
              <Route exact path ="/login" element={<LoginPage />} />
              <Route exact path ="/about" element={<AboutUs />} />
              <Route exact path ="/" element={<LoginPage />} />
              <Route exact path ="/home" element={<Home />} />
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