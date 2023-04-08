import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  PlusCircleOutlined,
  UserOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SideMenu = () => {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Dashbaord",
            icon: <AppstoreOutlined />,
            key: "/dashboard/admin",
          },
          {
            label: "Products",
            key: "/dashboard/admin/products",
            icon: <ShopOutlined />,
          },
          {
            label: "Create Products",
            key: "/dashboard/admin/createproduct",
            icon: <PlusCircleOutlined />,
          },
          {
            label: "Orders",
            key: "/dashboard/admin/orders",
            icon: <ShoppingCartOutlined />,
          },

          {
            label: "Users",
            key: "/dashboard/admin/users",
            icon: <UserOutlined />,
          },
          {
            label: "Create User",
            key: "/dashboard/admin/createuser",
            icon: <UserAddOutlined />,
          },
        ]}
      ></Menu>
    </div>
  );
};
export default SideMenu;
