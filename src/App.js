import "./App.css";
import { useState,useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Register from "./Pages/Register"
import EditProfile from "./Pages/EditProfile";
import FindBlood from "./Pages/FindBlood";
import Profile from "./Pages/Profile";
function App() {
  const location = useLocation();
  const [showBackground, setShowBackground] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  useEffect(() => {
    
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    
    setIsLoggedIn(accessToken && refreshToken);
  }, []);



  return (
    <div>
      <div
        className={`home_container ${showBackground ? "with-background" : ""}`}
      >
        <Header  />
        <Routes>

        <Route path="/" element={<Home setShowBackground={setShowBackground}/>} />
          <Route path="/findblood" element={<FindBlood setShowBackground={setShowBackground}/>} />

          <Route path="/login" element={<Login setShowBackground={setShowBackground}/>} />
            
          <Route path="/registernow" element={<Signup setShowBackground={setShowBackground}/> } />

          {isLoggedIn && (
            <>

        <Route path="/profile"element={<Profile setShowBackground={setShowBackground} />} />
        
          
         
          <Route path="/edit" element={<EditProfile setShowBackground={setShowBackground}/>} />
          <Route path="/register" element={<Register setShowBackground={setShowBackground}/>} />
          </>
          )}
        </Routes>
         
    </div>
    </div>
  );
}

export default App;
