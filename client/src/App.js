import "./App.css";

import Login from "./Pages/Login";

import Register from "./Pages/Register";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import UserDashBaord from "./Pages/User/UserDashBaord";
import PrivateRoute from "./Components/Routes/Private";
import AdminRoute from "./Components/Routes/AdminRoute";
import AdminDashBoard from "./Components/Admin/AdminDashBoard";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="" element={<UserDashBaord />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>

         
          <Route path="admin" element={<AdminDashBoard />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
