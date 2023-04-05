import "./App.css";



import Login from './Pages/Login';
import Navbar from './Components/Navbar';
import Register from './Pages/Register';
import {Routes , Route} from "react-router-dom"
import Home from './Pages/Home';







function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>

           <Route path="/" element={<Home/>} />
           <Route path="/register" element={<Register/>} />
           <Route path="/login" element={<Login/>} />

      </Routes>
    </div>
  );
}

export default App;
