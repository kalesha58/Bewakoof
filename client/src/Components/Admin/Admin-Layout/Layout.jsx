import React from "react";

import { Helmet } from "react-helmet";
// import Sidebar from "../sidebar/Sidebar";

import Topbar from "../topbar/Topbar";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Topbar />
      <main>{children}</main>
      {/* <Sidebar/> */}
    </div>
  );
};

Layout.defaultProps = {
  title: "Bewakoof app - shop now",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "Bewakoof",
};

export default Layout;
