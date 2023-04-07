import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory } from "../../API";
import SideMenu from "../../Components/Admin/SideMenu";
import AdminLayout from "../../Components/Layout/AdminLayout";
import "./AdminDashBoard.css";

const User = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getCustomers().then((res) => {
      setDataSource(res.users);
      setLoading(false);
    });
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
              title: "First Name",
              dataIndex: "firstName",
            },
            {
              title: "LastName",
              dataIndex: "lastName",
            },
            {
              title: "Email",
              dataIndex: "email",
            },
            {
              title: "Phone",
              dataIndex: "phone",
            },

            {
              title: "address",
              dataIndex: "address",
              render: (address) => {
                return (
                  <span>
                    {address.address}, {address.city}
                  </span>
                );
              },
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
