import React from 'react';
import {useNavigate} from 'react-router-dom'
import "./Preferences.css";


const Preferences = () => {

  return (
        <div className="MainFrame">
          <div className="SportsSection">
            <h1>Sports</h1>
            <button className="Button_select"> Basketball </button>
            <button className="Button_select"> Football </button>
            <button className="Button_select"> Baseball </button>
            <button className="Button_select"> Track and Feild </button>
            <button className="Button_select"> Golf </button>
            <button className="Button_select"> Swim </button>
          </div>
          <div className="BusinessSection">
            <h1>Business</h1>
            <button className="Button_select"> Entrepenuarship </button>
          </div>
        </div>


  );
}

export default Preferences;