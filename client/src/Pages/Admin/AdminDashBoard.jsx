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
import { Doughnut, Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar } from "react-chartjs-2";
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );
import { useSelector, useDispatch } from "react-redux";
import {
  
  getAdminProduct,
} from "../../Redux/Actions/productAction";
import { getAllUsers } from "../../Redux/Actions/userAction.js";
import { getAllOrders } from "../../Redux/Actions/orderAction.js";

const AdminDashBoard = () => {
  const dispatch = useDispatch();
  const {  products } = useSelector((state) => state.products);
  const { users } = useSelector((state) => state.allUsers);
  const { orders } = useSelector((state) => state.allOrders);



  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);
  let outOfStock = 0;

  products &&
    products.forEach((item) => {
      if (item.Stock === 0) {
        outOfStock += 1;
      }
    })
  useEffect(() => {
   
    dispatch(getAdminProduct());
    dispatch(getAllUsers());
    dispatch(getAllOrders());
  }, [dispatch]);
  
  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });

  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, totalAmount],
      },
    ],
  };
  const doughnutState = {
    labels: ["Out of Stock", "InStock"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [outOfStock, products.length - outOfStock],
      },
    ],
  };
  return (
    <>
      <AdminLayout title={"Admin Pannel Moon"}>
        <div className="sidemenu-div">
          <SideMenu />
        </div>
        <Space
          style={{ width: "80%", display: "flex", justifyContent: "center" }}
          size={20}
          direction="vertical"
        >
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
              value={orders && orders.length}
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
              value={products.length}
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
              value={users.length}
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
              value={totalAmount}
            />
          </Space>
          <Space>
            {/* <RecentOrders /> */}
            <div className="lineChart">
              <Line data={lineState} />
            </div>

            {/* <DashboardChart /> */}
             <div className="doughnutChart">
          <Doughnut data={doughnutState} />
        </div>
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
// function RecentOrders() {
//   const [dataSource, setDataSource] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     getOrders().then((res) => {
//       setDataSource(res.products.splice(0, 3));
//       setLoading(false);
//     });
//   }, []);

//   return (
//     <>
//       <Typography.Text>Recent Orders</Typography.Text>
//       <Table
//         columns={[
//           {
//             title: "Title",
//             dataIndex: "title",
//           },
//           {
//             title: "Quantity",
//             dataIndex: "quantity",
//           },
//           {
//             title: "Price",
//             dataIndex: "discountedPrice",
//           },
//         ]}
//         loading={loading}
//         dataSource={dataSource}
//         pagination={false}
//       ></Table>
//     </>
//   );
// }

// function DashboardChart() {
//   const [reveneuData, setReveneuData] = useState({
//     labels: [],
//     datasets: [],
//   });

//   useEffect(() => {
//     getRevenue().then((res) => {
//       const labels = res.carts.map((cart) => {
//         return `User-${cart.userId}`;
//       });
//       const data = res.carts.map((cart) => {
//         return cart.discountedTotal;
//       });

//       const dataSource = {
//         labels,
//         datasets: [
//           {
//             label: "Revenue",
//             data: data,
//             backgroundColor: "rgba(255, 0, 0, 1)",
//           },
//         ],
//       };

//       setReveneuData(dataSource);
//     });
//   }, []);

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "bottom",
//       },
//       title: {
//         display: true,
//         text: "Order Revenue",
//       },
//     },
//   };

//   return (
//     <Card style={{ width: 500, height: 250 }}>
//       <Bar options={options} data={reveneuData} />
//     </Card>
//   );
// }
export default AdminDashBoard;
