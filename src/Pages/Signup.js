import React, { useState,useContext } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ApiContext from '../ApiContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = (props) => {
  const apiUrl = useContext(ApiContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  props.setShowBackground(false);
  const navigate = useNavigate();

  const validateEmail = (value) => {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return gmailRegex.test(value);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    
    setEmailError('');
    setPasswordError('');


    if (!validateEmail(email)) {
      setEmailError('Invalid Gmail address');
      return;
    }

    
    if (password.includes(' ')) {
      setPasswordError('Password cannot contain blank spaces');
      return;
    }

    const formData = {
      email,
      password,
    };

    try {
      const response = await axios.post(`${apiUrl}users/signup/`, formData);
      console.log(response.status); 
      console.log(response.data);
      
      navigate('/login'); 
    } catch (error) {
      console.error('Error:', error.response.data);
      console.log(error.response.status); 
      
      if (error.response.data.email && error.response.data.email.length > 0) {
        
        console.log(error.response.data.email[0]);
      }
    }
  };

  return (
    <div className='sign_cont'>
      <form onSubmit={handleSignup}>
        <h1>Signup</h1>
        <div className='sign_field_cont'>
          <TextField
            id='email'
            label='Email'
            variant='outlined'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError !== ''}
            helperText={emailError}
          />
          <br />
          <TextField
            id='password'
            label='Password'
            variant='outlined'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError !== ''}
            helperText={passwordError}
          />
        </div>
        <Link to='/login'>
          <p>Already a user? Login</p>
        </Link>
        <div className='sign_button_cont'>
          <Button
            sx={{
              color: '#ffffff',
              backgroundColor: '#000000',
              border: '2px black solid',
              '&:hover': {
                borderColor: '2px black solid',
                backgroundColor: '#000000',
              },
            }}
            variant='contained'
            type='submit'
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
