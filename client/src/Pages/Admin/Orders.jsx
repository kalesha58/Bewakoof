import React from 'react'
import SideMenu from '../../Components/Admin/SideMenu'
import AdminLayout from '../../Components/Layout/AdminLayout'
import "./AdminDashBoard.css";
import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getInventory, getOrders } from "../../API";

import {useDispatch,useSelector} from "react-redux"
import { clearErrors, getAllOrders } from '../../Redux/Actions/orderAction';

const Orders = () => {
  const dispatch = useDispatch();
  const { error, orders } = useSelector((state) => state.allOrders);
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
console.log(orders)
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    setLoading(true);
   
    dispatch(getAllOrders())
   
    setDataSource(orders);
    setLoading(false);
     
  
  }, []);
  return (
    <AdminLayout>
      <div  className="sidemenu-div">

      <SideMenu/>
      </div>
      <Space  style={{"width":"80%"}} className="main" size={10} direction="vertical">
      <Typography.Title level={4}>Orders</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "DiscountedPrice",
            dataIndex: "discountedPrice",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Total",
            dataIndex: "total",
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
    </AdminLayout>
  )
}

export default Orders
