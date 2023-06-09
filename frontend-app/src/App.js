
import React, { useState, useEffect } from "react";
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import About from "./Components/HomeLogin/About";
import Login from "./Components/HomeLogin/Login";
import Projects from "./Components/HomeLogin/Projects";
import DashboardPage from "./Components/Admin/DashboardPage";
import SideBar from "./Components/Admin/SideBar";

function App() {
  const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:8000/message")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message));
  // }, []);


  return (
    <div className="App">
    <BrowserRouter>
    <SideBar/>
      <Routes> 
      
            <Route  path="/" element={<Login/> } /> 
            <Route   path="/project" element={<Projects/> } /> 
            <Route  path="/about" element={<About/> } /> 
            <Route   path="/dashboard" element={<DashboardPage/>}/>
       </Routes> 
    
    </BrowserRouter>
    </div>
  );
}

export default App;
