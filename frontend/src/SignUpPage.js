import React from 'react';
import {useNavigate} from 'react-router-dom'
import './SignUpPage.css';

const SignUpPage = () => {

  return (
    <div class= "mainHead">
        <div class="container">
          <div class="login_section">
            <form class="form" id="login">
              <h1 class="form__title">Sign Up</h1>
                <div class="form__message form__message--error">Incorrect username/password combination.</div>
                <div class="form__input-group">
                  <input type="text" class="form__input" autofocus placeholder="Username or email"></input>
                  <div class="form__message form__input-error-message">This is an error message</div>
                </div>
                <div class="form__input-group">
                  <input type="password" class="form__input" autofocus placeholder="Password"></input>
                  <div class="form__input-error-message"></div>
                  <input type="password" class="form__input" autofocus placeholder="Re-enter Password"></input>
                </div>
              <button class="form__button" type="submit">Create Account</button>
            </form>
          </div>
        </div>
    </div>
    
    
  );
}

export default SignUpPage;
