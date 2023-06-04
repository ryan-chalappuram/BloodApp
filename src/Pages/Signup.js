import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material'
import './Signup.css'
import { Link } from 'react-router-dom';
const Signup = (props) => {
    props.setShowBackground(false);
    
  return (
      <div className='sign_cont'>
      <h1>Signup</h1>
      <div className='sign_field_cont'>
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <br></br>
      <TextField id="outlined-basic" label="Password" variant="outlined" />
      </div>
      <Link to="/login">
      <p>Already a user? Login</p></Link>
      <div className='sign_button_cont'>
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

export default Signup
