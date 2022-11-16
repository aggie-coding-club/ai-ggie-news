import React from 'react';
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import './LoginPage.css';
import './Login_SignUp_box.css'

function LoginPage({Login, error}) {
  const [details, setDetails] = useState({name:"", password:""})
  const submitHandler = e => {
    e.preventDefault();

    Login(details)
  }
  return (
      <div className= "mainHead">
        <div className="container">
          <div className="login_section">
            <form className="form " id="login" onSubmit={submitHandler}>
              <h1 className="form__title">Login</h1>
                <div className="form__message form__message--error">This username doesn't exist in our database, please create a new account</div>
                <div className="form__input-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" className="form__input" autoFocus placeholder="Username or email"></input>
                  <div className="form__message form__input-error-message">This is an error message</div>
                  <label htmlFor="name">password:</label>
                  <input type="password" className="form__input" autoFocus placeholder="Password"></input>
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
