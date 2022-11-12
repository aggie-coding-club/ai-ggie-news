import React from 'react';
import "./Preferences.css";

var btn = document.getElementsByClassName('Button_select');

btn.onclick = function () {
 this.style.backgroundColor = "green"
};

const Preferences = () => {
  return (
        <div className="MainFrame">
          <div className="SportsSection">
            <h1>Sports</h1>
              <div className="selectAll_Sport">
                <button className="Button_select"> All Sports </button>
              </div>
              <div className="sport_options">
              <button className="Button_select"> Basketball </button>
              <button className="Button_select"> Football </button>
              <button className="Button_select"> Baseball </button>
              <button className="Button_select"> Track and Feild </button>
              <button className="Button_select"> Golf </button>
              <button className="Button_select"> Swim </button>
            </div>
          </div>
          <div className="BusinessSection">
            <h1>Business</h1>
            <button className="Button_select"> Entrepreneurship </button>
          </div>
        </div>


  );
}

export default Preferences;