/* import React from 'react'
import TextField from '@mui/material/TextField';
import './Login.css'
import { Button } from '@mui/material'

const Login = (props) => {
  props.setShowBackground(false);
  
  return (
    <div className='login_cont'>
      <h1>Log In</h1>
      <div className='field_cont'>
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <br></br>
      <TextField id="outlined-basic" label="Password" variant="outlined" />
      </div>
      <div className='login_button_cont'>
      <Button   sx={{color:'#ffffff' ,
                        backgroundColor: "#000000",
                        border: "2px black solid",
                        "&:hover": {bordercolor: '2px black solid'
                                    , backgroundColor: "#000000"}
                           }} variant="contained">Submit</Button>
    </div>
    </div>
  )
}

export default Login */
import React, { useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AuthContext from '../context/AuthContext'; // Import the AuthContext from your application

const LoginForm = () => {
  const { loginUser } = useContext(AuthContext); // Access the loginUser function from the AuthContext
  const [email, setEmail] = useState(''); // State variable for email
  const [password, setPassword] = useState(''); // State variable for password

  const handleEmailChange = (event) => {
    setEmail(event.target.value); // Update email state when the text field value changes
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value); // Update password state when the text field value changes
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Call the loginUser function from the AuthContext and pass the email and password
    loginUser(email, password);
  };

  return (
    <div className='login_cont'>
      <h1>Log In</h1>
      <div className='field_cont'>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className='login_button_cont'>
        <Button
          sx={{
            color: '#ffffff',
            backgroundColor: "#000000",
            border: "2px black solid",
            "&:hover": { bordercolor: '2px black solid', backgroundColor: "#000000" }
          }}
          variant="contained"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;

