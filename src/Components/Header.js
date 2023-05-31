import React from "react"
import bloodlogo from "../Images/Logo.png"
import Button from '@mui/material/Button'

import {RiCloseLine , RiMenu3Line} from 'react-icons/ri'
// const styles = {
//    color: #FFFFF 
// }
const Menu = () => (
   <>
   <p><a href="#">Home</a></p>
   <p><a href="#">Find Blood</a></p>
         
   </>
)
export default function Header(props) {
   const [toggleMenu,setToggleMenu] = React.useState(false);
    return(
      <div className="bar">
         <img className="blood-img" src={bloodlogo}></img>
         <div className="all_cont">
         <div className="links-cont">
        <Menu />
         </div>
         <div className="button">
         
         <p><a href="">Register Now</a></p>
         <Button  sx={{color:'#000000' ,
                        minHeight:'50px',
                        minWidth:'120px',
                         border: "2px black solid",
                        ":hover": {color:"black",
                                    border:"2px black solid"}
                      }} variant="outlined"  className="button_but">Log in</Button>
         </div>
         </div>
         <div className="header-menu">
            { toggleMenu 
                  ? <RiCloseLine color="#000" size={20} onClick={()=>setToggleMenu(false)}/> 
                  : <RiMenu3Line color="#000" size={20} onClick={()=>setToggleMenu(true)}/> 
            }     
            { toggleMenu && (
               <div className="header-menu_container scale-up-center">
                  <div className="header-menu_container_links"> 
                     <Menu / >
                     <div className="header-menu_button">
                        <p><a href="#">Register Now</a></p>
                     <Button  sx={{color:'#000000' ,
                        border: "2px black solid",
                        ":hover": {color:"black",
                                    border:"2px black solid"}
                           }} variant="outlined">Log in</Button>
                      </div>

                  </div>

               </div>

            )}
         </div>

            
            
       

      </div>
   )
}