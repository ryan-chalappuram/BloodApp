import "./App.css";
import { useState } from "react";
import { Router,Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./utils/PrivateRoute";
function App() {
  // const location = useLocation();
  const [showBackground, setShowBackground] = useState(true);



  return (
    <Router> 
      <div>
        <div className={`home_container ${showBackground ? "with-background" : ""}`}>
          {/* <AuthProvider> */}
            {/* <Header /> */}
            <Routes>
              <Route path="/" element={<Home setShowBackground={setShowBackground} />} />
              <Route path="/login" element={<Login setShowBackground={setShowBackground} />} />
              <Route path="/registernow" element={<Signup setShowBackground={setShowBackground} />} />
              <Route path="/register" element={<Register setShowBackground={setShowBackground} />} />
              <Route path="/profile" element={<Profile setShowBackground={setShowBackground} />} />
            </Routes>
          {/* </AuthProvider> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
