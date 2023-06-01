import "./App.css";
import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Mission from "./Components/Mission";
import Tips from "./Components/Tips";
import background from './Images/Hero-Gradient.png';
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

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
          <Route
            path="/"
            element={
              <>
                <Body setShowBackground={setShowBackground}/>
                <div>
                  <Mission />
                </div>
                <div>
                  <Tips />
                </div>
              </>
            }
          />
        </Routes>
      </div>

      <Routes>
        <Route path="/login" element={<Login setShowBackground={setShowBackground}/>} />
            
         <Route path="/registernow" element={  <Signup setShowBackground={setShowBackground}/> } />
        </Routes>
         
    </div>
  );
}

export default App;
