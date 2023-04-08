import "./App.css";

import Login from "./Pages/Login";

import Register from "./Pages/Register";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import UserDashBaord from "./Pages/User/UserDashBaord";
import PrivateRoute from "./Components/Routes/Private";
import AdminRoute from "./Components/Routes/AdminRoute";

import User from "./Pages/Admin/User";
import Products from "./Pages/Admin/Products";
import Orders from "./Pages/Admin/Orders";
import AdminDashBoard from "./Pages/Admin/AdminDashBoard";
import CreateProducts from "./Pages/Admin/CreateProducts";
import CreateUsers from "./Pages/Admin/CreateUsers";
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
          <Route path="admin/users" element={<User />} />
          <Route path="admin/orders" element={<Orders />} />
          <Route path="admin/products" element={<Products />} />
        
          <Route path="admin/createproduct" element={<CreateProducts />} />
          <Route path="admin/createuser" element={<CreateUsers />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
