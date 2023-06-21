import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import './Login.css'
import { useNavigate } from 'react-router-dom'
import ApiContext from '../ApiContext';

const LoginForm = (props) => {
  props.setShowBackground(false);
  const apiUrl = useContext(ApiContext);

 
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notverif, setNotVerif] = useState(false);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${apiUrl}users/login/`, {
        email: email,
        password: password
      });
     
      
      const { access, refresh } = response.data;
      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);

      navigate('/register');
      

      // Perform any additional actions after successful login, e.g., redirect to a different page
    } catch (error) {
      if (error.response && error.response.status === 403) {
        setNotVerif(true);
       } else
      console.error(error);
    }
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
     { notverif && <p>Please check password or e-mail not verified</p>}
      <div className='login_button_cont'>
        <Button
          sx={{
            color: '#ffffff',
            backgroundColor: "#000000",
            border: "2px black solid",
            "&:hover": { bordercolor: '2px black solid', backgroundColor: "#000000" }
          }}
          variant="contained"
          onClick={handleLogin}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
