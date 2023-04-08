import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory } from "../../API";
import SideMenu from "../../Components/Admin/SideMenu";
import AdminLayout from "../../Components/Layout/AdminLayout";
import "./AdminDashBoard.css";
import {useDispatch,useSelector} from "react-redux"
import { clearErrors, getAllUsers } from "../../Redux/Actions/userAction";

import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
const User = () => {
  const dispatch = useDispatch();
  const { error, users } = useSelector((state) => state.allUsers);
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
console.log(users)
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    setLoading(true);
    dispatch(getAllUsers())
   
      setDataSource(users);
      setLoading(false);
  
  }, []);

  return (
    <AdminLayout>
      <div className="sidemenu-div">
        <SideMenu />
      </div>
      <Space
        style={{ width: "80%" }}
        className="main"
        size={10}
        direction="vertical"
      >
        <Typography.Title level={4}>Customers</Typography.Title>
        <Table
          loading={loading}
          columns={[
            {
              title: "Photo",
              dataIndex: "image",
              render: (link) => {
                return <Avatar src={link} />;
              },
            },
            {
              title: " Name",
              dataIndex: "name",
            },
            {
              title: "Answer",
              dataIndex: "answer",
            },
            {
              title: "Email",
              dataIndex: "email",
            },
            {
              title: "Phone",
              dataIndex: "number",
            },
            {
              title: "Role",
              dataIndex: "role",
                 render: (role) => {
                return (
                  <span>
                    {role ===1?"Admin":"User"}
                  </span>
                );
              },
            },

            {
              title: "Action",
              key: "action",
              render: (_, record) => (
                <Space size="middle">
                  <EditOutlined />
                  <a>
                    <DeleteOutlined />
                  </a>
                </Space>
              ),
            },
          ]}
          dataSource={dataSource}
          pagination={{
            pageSize: 5,
          }}
        ></Table>
      </Space>
    </AdminLayout>
  );
};

export default User;
