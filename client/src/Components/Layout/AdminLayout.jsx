import React from "react";

import { Helmet } from "react-helmet";
import Header from "../../Components/Admin/Header";
import Footer from "../Admin/Footer";
import SideMenu from "../Admin/SideMenu";
import "./AdminLayout.css";
const AdminLayout = ({ children, title, description, keywords, author }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <div className="App">
        <Header />
        
        <div className="SideMenuAndPageContent">{children}</div>
        <Footer />
      </div>
    </>
  );
};

AdminLayout.defaultProps = {
  title: "Bewakoof app - shop now",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "Bewakoof",
};

export default AdminLayout;
