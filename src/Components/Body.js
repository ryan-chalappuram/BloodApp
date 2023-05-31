
import React from 'react'
import './Body.css'
import { Button } from '@mui/material'
const Body = () => {
  return (
   
      <div className='body_content'>
      <h1>Save Life Donate Blood </h1>
         <div className='body_content_p'>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

          </p>
         </div>
         <div className='button_container'>
         <Button   sx={{color:'#ffffff' ,
                        backgroundColor: "#000000",
                        border: "2px black solid",
                        "&:hover": {bordercolor: '2px black solid'
                                    , backgroundColor: "#000000"}
                           }} variant="contained">Register Now</Button>
         </div>
    </div>
    
  )
}

export default Body

