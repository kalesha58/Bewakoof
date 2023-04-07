import React from "react";
import FeaturedInfo from "../featuredInfo/FeaturedInfo";
import Sidebar from "../sidebar/Sidebar";
import Layout from "./Layout";
const HeroSectionAdmin = () => {
  return (
    <Layout>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <FeaturedInfo />
      </div>
    </Layout>
  );
};

export default HeroSectionAdmin;
