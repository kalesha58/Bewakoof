import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
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
            label: "Inventory",
            key: "/dashboard/admin/products",
            icon: <ShopOutlined />,
          },
          {
            label: "Orders",
            key: "/dashboard/admin/orders",
            icon: <ShoppingCartOutlined />,
          },
          {
            label: "Customers",
            key: "/dashboard/admin/users",
            icon: <UserOutlined />,
          },
        ]}
      ></Menu>
    </div>
  );
};
export default SideMenu;
