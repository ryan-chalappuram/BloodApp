
import TextField from '@mui/material/TextField';
import './Login.css'
import { Button } from '@mui/material'
import React, { useState, useContext } from 'react';
// import { Button, TextField } from '@mui/material';
import './Login.css';
import { useNavigate} from "react-router-dom";
import AuthService from '../Services/auth-service';


const Login = (props) => {
  props.setShowBackground(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async(e) => { 
    // Perform JWT authentication using email and password

    // Call an authentication API endpoint to obtain the JWT token
    // Set the authentication tokens using setAuthTokens function from the AuthContext
    e.preventDefault();
    try {
      await AuthService.login(email, password).then(
        () => {
          navigate("/register");
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  
  };



  return (
    <div className='login_cont'>
      <form onSubmit={handleSubmit}>
      <h1>Log In</h1>
        
      {/* <div className='field_cont'> */}
    
      <TextField  label="Email" variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br></br>
      <TextField  label="Password" variant="outlined"
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* </div> */}
      <div className='login_button_cont'>
      <Button   sx={{color:'#ffffff' ,
                        backgroundColor: "#000000",
                        border: "2px black solid",
                        "&:hover": {bordercolor: '2px black solid'
                                    , backgroundColor: "#000000"},
                           }} 
                           variant="contained"
                           
                           >Submit</Button>
                          
    </div>
    </form>
    </div>
  )
}

export default Login
