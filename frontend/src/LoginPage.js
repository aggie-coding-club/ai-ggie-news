import React from 'react';
import { useState } from 'react';
import './LoginPage.css';
import './Login_SignUp_box.css'
import axios from 'axios';

function LoginPage() {
  const [details, setDetails] = useState({name:"", password:""})
  
  function submit(e){
    e.preventDefault();
    axios.post('/log',{
      username : details.name,
      password : details.password,
    })
      .then(res=>{
        setDetails({
          name: "",
          password: "",
        })
        console.log(res.data)
      })
      .catch(console.log("ERROR"))
  }
  function handle(e) {
    const newDetail = {...details}
    newDetail[e.target.id] = e.target.value
    setDetails(newDetail)
  }
  
  return (
      <div className= "mainHead">
        <div className="container">
          <div className="login_section">
            <form className="form " id="login" onClick={(e)=>submit(e)}>
              <h1 className="form__title">Login</h1>
                <div className="form__message form__message--error">This username doesn't exist in our database, please create a new account</div>
                <div className="form__input-group">
                  <label htmlFor="name">Username or Email</label>
                  <input id="name" name="username" value={details.name} onChange={(e) => handle(e)} type="text" className="form__input" autoFocus placeholder="Username or email"></input>
                  <div className="form__message form__input-error-message">This is an error message</div>
                  <label htmlFor="name">Password</label>
                  <input id="password" name="password" value={details.password} onChange={(e) => handle(e)} type="password" className="form__input" placeholder="Password"></input>
                </div>
                
              <button className="form__button" type="submit">Submit</button>

              <p className="form__text">
                <a className="form__link" href=" ./signup">Dont have an account? Create account.</a>
              </p>
            </form>
          </div>
        </div>
       </div>

  );
}

export default LoginPage;

/*
                <div className="form__input-group">
                  <input type="password" className="form__input" autofocus placeholder="Password"></input>
                  <div className="form__input-error-message"></div>
                </div>
*/
