import "./App.css";
import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Register from "./Pages/Register"
import EditProfile from "./Pages/EditProfile"
function App() {
  const location = useLocation();
  const [showBackground, setShowBackground] = useState(true);



  return (
    <div>
      <div
        className={`home_container ${showBackground ? "with-background" : ""}`}
      >
        <Header  />
        <Routes>
        
          <Route path="/" element={<Home setShowBackground={setShowBackground}/>} />

          <Route path="/login" element={<Login setShowBackground={setShowBackground}/>} />
            
          <Route path="/registernow" element={<Signup setShowBackground={setShowBackground}/> } />
         
          <Route path="/edit" element={<EditProfile setShowBackground={setShowBackground}/>} />
          <Route path="/register" element={<Register setShowBackground={setShowBackground}/>} />
        </Routes>
         
    </div>
    </div>
  );
}

export default App;
