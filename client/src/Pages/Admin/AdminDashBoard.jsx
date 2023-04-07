import React from "react";
import SideMenu from "../../Components/Admin/SideMenu";
import AdminLayout from "../../Components/Layout/AdminLayout";
import "./AdminDashBoard.css";
import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory, getOrders, getRevenue } from "../../API";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashBoard = () => {
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    getOrders().then((res) => {
      setOrders(res.total);
      setRevenue(res.discountedTotal);
    });
    getInventory().then((res) => {
      setInventory(res.total);
    });
    getCustomers().then((res) => {
      setCustomers(res.total);
    });
  }, []);

  return (
    <>
      <AdminLayout title={"Admin Pannel Moon"}>
        <div className="sidemenu-div">
          <SideMenu />
        </div>
        <Space style={{"width":"80%"}} size={20} direction="vertical">
          <Typography.Title level={4}>Dashboard</Typography.Title>
          <Space direction="horizontal">
            <DashboardCard
              icon={
                <ShoppingCartOutlined
                  style={{
                    color: "green",
                    backgroundColor: "rgba(0,255,0,0.25)",
                    borderRadius: 20,
                    fontSize: 34,
                    padding: 8,
                  }}
                />
              }
              title={"Orders"}
              value={orders}
            />
            <DashboardCard
              icon={
                <ShoppingOutlined
                  style={{
                    color: "blue",
                    backgroundColor: "rgba(0,0,255,0.25)",
                    borderRadius: 20,
                    fontSize: 34,
                    padding: 8,
                  }}
                />
              }
              title={"Inventory"}
              value={inventory}
            />
            <DashboardCard
              icon={
                <UserOutlined
                  style={{
                    color: "purple",
                    backgroundColor: "rgba(0,255,255,0.25)",
                    borderRadius: 20,
                    fontSize: 34,
                    padding: 8,
                  }}
                />
              }
              title={"Customer"}
              value={customers}
            />
            <DashboardCard
              icon={
                <DollarCircleOutlined
                  style={{
                    color: "red",
                    backgroundColor: "rgba(255,0,0,0.25)",
                    borderRadius: 20,
                    fontSize: 34,
                    padding: 8,
                  }}
                />
              }
              title={"Revenue"}
              value={revenue}
            />
          </Space>
          <Space>
            <RecentOrders />
            <DashboardChart />
          </Space>
        </Space>
      </AdminLayout>
    </>
  );
};

function DashboardCard({ title, value, icon }) {
  return (
    <Card className="dashboard-card">
      <Space className="dashboard-card-items" direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}
function RecentOrders() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products.splice(0, 3));
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Typography.Text>Recent Orders</Typography.Text>
      <Table
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Price",
            dataIndex: "discountedPrice",
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
      ></Table>
    </>
  );
}

function DashboardChart() {
  const [reveneuData, setReveneuData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    getRevenue().then((res) => {
      const labels = res.carts.map((cart) => {
        return `User-${cart.userId}`;
      });
      const data = res.carts.map((cart) => {
        return cart.discountedTotal;
      });

      const dataSource = {
        labels,
        datasets: [
          {
            label: "Revenue",
            data: data,
            backgroundColor: "rgba(255, 0, 0, 1)",
          },
        ],
      };

      setReveneuData(dataSource);
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Order Revenue",
      },
    },
  };

  return (
    <Card style={{ width: 500, height: 250 }}>
      <Bar options={options} data={reveneuData} />
    </Card>
  );
}
export default AdminDashBoard;
