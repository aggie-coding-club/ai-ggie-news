import React from 'react';
import {useNavigate} from 'react-router-dom'
import './LoginPage.css';
import './Login_SignUp_box.css'

const LoginPage = () => {

  return (
    <div className= "mainHead">
        <div className="container">
          <div className="login_section">
            <form className="form " id="login">
              <h1 className="form__title">Login</h1>
                <div className="form__message form__message--error">This username doesn't exist in our database, please create a new account</div>
                <div className="form__input-group">
                  <input type="text" className="form__input" autofocus placeholder="Username or email"></input>
                  <div className="form__message form__input-error-message">This is an error message</div>
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
