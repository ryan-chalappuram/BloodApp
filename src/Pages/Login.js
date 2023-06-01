import React from 'react'
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

export default Login
