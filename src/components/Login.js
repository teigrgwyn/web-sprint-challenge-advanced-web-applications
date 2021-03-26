import React, { useState, useEffect } from "react";
import axios from 'axios';

const initialState = {
  username: '',
  password: ''
}

const Login = (props) => {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState('');

  const handleChanges = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    
    // can't use in reducer due to middleware required, easier to skip it and place here
    axios.post('http://localhost:3000/api/login', form)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        this.props.history.push('/bubbles');
      })
      .catch(err => setError(err.response.data.error))

    setForm(initialState);
  }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={handleSubmit}>
          <input
            data-testid="username"
            name='username'
            value={form.username}
            onChange={handleChanges}
            placeholder='username'
            spellCheck='false'
            autoComplete='off'
          />
          <input
            data-testid="password"
            name='password'
            value={form.password}
            onChange={handleChanges}
            placeholder='password'
            spellCheck='false'
            autoComplete='off'
          />
          <input type='submit' />
        </form>
      </div>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.