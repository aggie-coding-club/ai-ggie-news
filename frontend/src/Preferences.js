import React, { useEffect } from 'react';
import "./Preferences.css";
import { useState } from 'react';
import axios, { Axios } from 'axios';

function Preferences(){
  
  const [allSelcSports, setSelcSports] = useState(true)
  const [allSelcOpin, setSelcOpin] = useState(true)
  const [allSelcTrad, setSelcTrad] = useState(true)

  const [state, setState] = useState({
    id_all : "none_selected",
    id_basketball : "unselected",
    id_football : "unselected",
    id_baseball : "unselected",
    id_trackandfield : "unselected",
    id_swim : "unselected",
    id_golf : "unselected",
    id_editorial : "unselected",
    id_column : "unselected",
    id_guest_commentary : "unselected",
    id_sports_commentary : "unselected",
    id_silvertap : "unselected",
    id_ringday : "unselected",
    id_muster : "unselected",
    id_bonfire : "unselected",
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
      column : state.id_column,
      editorial : state.id_editorial,
      guest_commentary : state.id_guest_commentary,
      sports_commentary : state.id_sports_commentary,
      silvertaps : state.id_silvertap,
      ringday : state.id_ringday,
      muster : state.id_muster,
      bonfire : state.id_bonfire,
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
  const selectAllButtonsSports = () => {
    // This function is to set all buttons to either unselected or selectedn string feilds
      setSelcSports(!allSelcSports)
      if(allSelcSports){
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
  const selectAllButtonsOpinions = () => {
    // This function is to set all buttons to either unselected or selectedn string feilds
      setSelcOpin(!allSelcOpin)
      if(allSelcOpin){
        clickFunction("id_column","unselected")
        clickFunction("id_editorial","unselected")
        clickFunction("id_guest_commentary","unselected")
        clickFunction("id_sports_commentary","unselected")
      }
      else{
        clickFunction("id_column","selected")
        clickFunction("id_editorial","selected")
        clickFunction("id_guest_commentary","selected")
        clickFunction("id_sports_commentary","selected")
      }
  }
  const selectAllButtonsTraditions = () => {
    // This function is to set all buttons to either unselected or selectedn string feilds
      setSelcTrad(!allSelcTrad)
      if(allSelcTrad){
        clickFunction("id_silvertap","unselected")
        clickFunction("id_ringday","unselected")
        clickFunction("id_muster","unselected")
        clickFunction("id_bonfire","unselected")
      }
      else{
        clickFunction("id_silvertap","selected")
        clickFunction("id_ringday","selected")
        clickFunction("id_muster","selected")
        clickFunction("id_bonfire","selected")
      }
  }
    

  return (
        <div className="MainFrame">
          <div className="SportsSection">
            <h1>Sports</h1>
              <div className="selectAll_Sport">
                <button onClick={() => selectAllButtonsSports() } className="Button_select"> All Sports </button>
              </div>
              <div className="sport_options">
              <button name="basketball" type = "button" onClick={ () => clickFunction("id_basketball",state.id_basketball)} className="Button_select" id={state.id_basketball}>Basketball</button>
              <button name="football" type = "button" onClick={ () => clickFunction("id_football",state.id_football)} className="Button_select" id={(state.id_football)}> Football </button>
              <button name="baseball" type = "button" onClick={ () => clickFunction("id_baseball",state.id_baseball)} className="Button_select" id={(state.id_baseball)}> Baseball </button>
              <button name="trackandfield" type = "button" onClick={ () => clickFunction("id_trackandfield",state.id_trackandfield)} className="Button_select" id={(state.id_trackandfield)}> Track and Field </button>
              <button name="golf" type = "button" onClick={ () => {clickFunction("id_golf",state.id_golf)}} className="Button_select" id={(state.id_golf)}> Golf </button>
              <button name="swim" type = "button" onClick={ () => clickFunction("id_swim",state.id_swim)} className="Button_select" id={(state.id_swim)}> Swim </button>
            </div>
          </div>
          <div className="Tradition">
            <h1>Traditions</h1>
            <div className="selectAll_Opinion">
                <button onClick={() => selectAllButtonsTraditions() } className="Button_select"> All Traditions </button>
              </div>
            <button name="silvertaps" type = "button" onClick={ () => clickFunction("id_silvertap",state.id_silvertap)} id={(state.id_silvertap)} className="Button_select">Silver Taps</button>
            <button name="ringday" type = "button" onClick={ () => clickFunction("id_ringday",state.id_ringday)} className="Button_select" id={(state.id_ringday)}>Ring Day</button>
            <button name="muster" type = "button" onClick={ () => clickFunction("id_muster",state.id_muster)} className="Button_select" id={(state.id_muster)}>Muster</button>
            <button name="bonfire" type = "button" onClick={ () => clickFunction("id_bonfire",state.id_bonfire)} className="Button_select" id={(state.id_bonfire)}>Bonfire</button>
          </div>
          <div className="BusinessSection">
            <h1>Opinion</h1>
            <div className="selectAll_Opinion">
                <button onClick={() => selectAllButtonsOpinions() } className="Button_select"> All Opinions </button>
              </div>
            <button name="editorial" type = "button" onClick={ () => clickFunction("id_editorial",state.id_editorial)} id={(state.id_editorial)} className="Button_select">Editorials</button>
            <button name="column" type = "button" onClick={ () => clickFunction("id_column",state.id_column)} className="Button_select" id={(state.id_column)}>Columns</button>
            <button name="geust_commentary" type = "button" onClick={ () => clickFunction("id_guest_commentary",state.id_guest_commentary)} className="Button_select" id={(state.id_guest_commentary)}>Guest Commentary</button>
            <button name="sports_commentary" type = "button" onClick={ () => clickFunction("id_sports_commentary",state.id_sports_commentary)} className="Button_select" id={(state.id_sports_commentary)}>Sports Commentary</button>
          </div>
          
          <form onClick={(e) => submit(e)}>
            <div>
                <button className="Button_save" type="submit" >SAVE</button>
            </div>
          </form>
        </div>


  );
}

export default Preferences;

