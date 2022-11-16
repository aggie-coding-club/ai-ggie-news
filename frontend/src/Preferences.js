import React, { useEffect } from 'react';
import "./Preferences.css";
import { useState } from 'react';
import axios, { Axios } from 'axios';

function Preferences(){
  
  const [allSelc, setSelc] = useState(true)

  const [state, setState] = useState({
    id_all : "none_selected",
    id_basketball : "unselected",
    id_football : "unselected",
    id_baseball : "unselected",
    id_trackandfield : "unselected",
    id_swim : "unselected",
    id_golf : "unselected",
  });
  function submit(e){
    e.preventDefault();
    axios.post('/prefers',{
      basketball : state.id_basketball,
      football : state.id_football,
      baseball : state.id_baseball,
      trackandfield : state.id_trackandfield,
      swim : state.id_swim,
      golf : state.id_golf,
    })
      .then(res=>{
        console.log(res.data)
      })
      .catch(console.log("ERROR"))
  }
    const clickFunction = (genre, selection) => {
        setState((prevState) => {
          return{
            ...prevState,
            [genre]: selection === "unselected" ? state[genre] = "selected" : state[genre] = "unselected",
            [genre]: selection === "selected" ? state[genre] = "unselected" : state[genre] = "selected",
          }
        })
      };
  const selectAllButtons = () => {
    // This function is to set all buttons to either unselected or selectedn string feilds
      setSelc(!allSelc)
      if(allSelc){
        clickFunction("id_basketball","unselected")
        clickFunction("id_football","unselected")
        clickFunction("id_baseball","unselected")
        clickFunction("id_trackandfield","unselected")
        clickFunction("id_golf","unselected")
        clickFunction("id_swim","unselected")
      }
      else{
        clickFunction("id_basketball","selected")
        clickFunction("id_football","selected")
        clickFunction("id_baseball","selected")
        clickFunction("id_trackandfield","selected")
        clickFunction("id_golf","selected")
        clickFunction("id_swim","selected")
      }
  }
    

  return (
        <div className="MainFrame">
          <div className="SportsSection">
            <h1>Sports</h1>
              <div className="selectAll_Sport">
                <button onClick={() => selectAllButtons() } className="Button_select" id={""}> All Sports </button>
              </div>
              <div className="sport_options">
              <button name="basketball" type = "button" onClick={ () => clickFunction("id_basketball",state.id_basketball)} className="Button_select" id={"basketball_"+state.id_basketball}>Basketball</button>
              <button name="football" type = "button" onClick={ () => clickFunction("id_football",state.id_football)} className="Button_select" id={"football_"+(state.id_football)}> Football </button>
              <button name="baseball" type = "button" onClick={ () => clickFunction("id_baseball",state.id_baseball)} className="Button_select" id={"baseball_"+(state.id_baseball)}> Baseball </button>
              <button name="trackandfield" type = "button" onClick={ () => clickFunction("id_trackandfield",state.id_trackandfield)} className="Button_select" id={"trackandfield_"+(state.id_trackandfield)}> Track and Field </button>
              <button name="golf" type = "button" onClick={ () => {clickFunction("id_golf",state.id_golf)}} className="Button_select" id={"golf_"+(state.id_golf)}> Golf </button>
              <button name="swim" type = "button" onClick={ () => clickFunction("id_swim",state.id_swim)} className="Button_select" id={"swim_"+(state.id_swim)}> Swim </button>
            </div>
          </div>
          <div className="BusinessSection">
            <h1>Business</h1>
            <button className="Button_select"> Entrepreneurship </button>
          </div>
          <form onClick={(e) => submit(e)}>
            <div>
                <button className="Button_select" type="submit" >SAVE</button>
            </div>
          </form>
        </div>


  );
}

export default Preferences;

