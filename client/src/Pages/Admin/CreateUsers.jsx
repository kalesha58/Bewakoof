import React from "react";
import SideMenu from "../../Components/Admin/SideMenu";
import AdminLayout from "../../Components/Layout/AdminLayout";
import "./AdminDashBoard.css";
const UsersCreate = () => {
  return (
    <AdminLayout>
      <div className="sidemenu-div">
        <SideMenu />
      </div>
    </AdminLayout>
  );
};

export default UsersCreate;
