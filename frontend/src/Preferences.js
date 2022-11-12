import React from 'react';
import "./Preferences.css";
import { useState } from 'react';

const Preferences = () => {

  const [buttonID] = useState('Click');

  function changeID(ID) {
    
    if(ID != "selected"){
      return("selected");
    }
    else{
    return("unselected");
    }
  }

  const [state, setState] = useState(false)
  const clickFunction = (e) => {
    setState(!state)
    /*this.style.backgroundColor = "green";*/
  };

  return (
        <div className="MainFrame">
          <div className="SportsSection">
            <h1>Sports</h1>
              <div className="selectAll_Sport">
                <button className="Button_select"> All Sports </button>
              </div>
              <div className="sport_options">
              <button onClick={changeID(this.id)} className="Button_select" id={"basketball_"+(buttonID)}>Basketball</button>
              <button onClick={changeID} className="Button_select" id={"football_"+(buttonID)}> Football </button>
              <button onClick={changeID} className="Button_select" id={"baseball_"+(buttonID)}> Baseball </button>
              <button onClick={changeID} className="Button_select" id={"trackandfeild_"+(buttonID)}> Track and Feild </button>
              <button onClick={changeID} className="Button_select" id={"golf_"+(buttonID)}> Golf </button>
              <button onClick={changeID} className="Button_select" id={"swim_"+(buttonID)}> Swim </button>
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