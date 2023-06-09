import { Spinner } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import "./Loader.css";
const Loader = ({ path = "login" }) => {
  const [count, setCount] = useState(4);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location, path]);
  return (
    <Layout>
      <div id="main">
        <h1 className="Text-center">redirecting to you in {count} second </h1>
        <br />
        {/* <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div> */}
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </div>
    </Layout>
  );
};

export default Loader;
