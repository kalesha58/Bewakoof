import React from "react";

import SideMenu from "../../Components/Admin/SideMenu";
import AdminLayout from "../../Components/Layout/AdminLayout";
import "./AdminDashBoard.css";
import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getAdminProduct,
} from "../../Redux/Actions/productAction";

import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
const Products = () => {
  const dispatch = useDispatch();
  const { error, products } = useSelector((state) => state.products);
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  console.log(products);
  const URl = products?.images?.url;
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getAdminProduct());
    setDataSource(products);
  }, [dispatch, error]);

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
        <Typography.Title level={4}>Inventory</Typography.Title>
        <Table
          loading={loading}
          columns={[
            {
              title: "Thumbnail",
              dataIndex: "images",
              render: (URl) => {
                return <Avatar src={URl} />;
              },
            },
            {
              title: "Title",
              dataIndex: "title",
            },
            {
              title: "Price",
              dataIndex: "discounted_price",
              render: (value) => <span>${value}</span>,
            },
            {
              title: "Rating",
              dataIndex: "rating",
              render: (rating) => {
                return <Rate value={rating} allowHalf disabled />;
              },
            },
            {
              title: "Stock",
              dataIndex: "Stock",
            },

            {
              title: "Brand",
              dataIndex: "brand",
            },
            {
              title: "Category",
              dataIndex: "category",
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

export default Products;
