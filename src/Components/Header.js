import React from "react"
import bloodlogo from "../Images/Logo.png"
import Button from '@mui/material/Button'
import {RiCloseLine , RiMenu3Line} from 'react-icons/ri'
import { Link } from "react-router-dom"


// const styles = {
//    color: #FFFFF 
// }
const Menu = () => (
   <>
   <Link to="/"><p>Home</p></Link>
   <Link to="/"> <p>Find Blood</p></Link>
         
   </>
)

export default function Header(props) {
   const [toggleMenu,setToggleMenu] = React.useState(false);
    return(
      <div className={`header ${props.showBackground ? "with-background" : ""}`}>
   
      <div className="bar">
      <Link to="/">
         <img className="blood-img" src={bloodlogo}></img>
         </Link>
         <div className="all_cont">
         <div className="links-cont">

        <Menu />
         </div>
         <div className="button">
         
         <Link to="/registernow"><p>Register Now</p></Link>
         <Button component={Link} to="/login" sx={{color:'#000000' ,
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
                     <Link to="/registernow"><p>Register Now</p></Link>
                        <Button  component={Link} to="/login" sx={{color:'#000000' ,
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
      </div>
      
   
   )
}