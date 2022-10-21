import React from 'react';
import {useNavigate} from 'react-router-dom'
import './LoginPage.css';

const LoginPage = () => {

  return (
    <div class= "mainHead">
        <div class="container">
          <div class="login_section">
            <form class="form" id="login">
              <h1 class="form__title">Login</h1>
                <div class="form__message form__message--error">Incorrect username/password combination.</div>
                <div class="form__input-group">
                  <input type="text" class="form__input" autofocus placeholder="Username or email"></input>
                  <div class="form__input-error-message">This is an error message</div>
                </div>
                <div class="form__input-group">
                  <input type="password" class="form__input" autofocus placeholder="Password"></input>
                  <div class="form__input-error-message"></div>
                </div>
              <button class="form__button" type="submit">Submit</button>
              <p class="form__text">
                <a href="#" class="form__link">Forgot your password?</a>
              </p>
              <p class="form__text">
                <a class="form__link" id="linkCreateAccount">Dont have an account? Create account.</a>
              </p>
            </form>
          </div>
        </div>
    </div>
    
    
  );
}

export default LoginPage;
