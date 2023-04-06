import "./App.css";

import Login from "./Pages/Login";

import Register from "./Pages/Register";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";


function App() {
 
  return (
    <div >
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
       
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
     
    </div>
  );
}

export default App;
