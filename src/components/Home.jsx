import React, { useState } from "react";
import "../Styles/Home.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Orders from "./Orders";

const Home = () => {
  const [showDark, setShowDark] = useState(true);

  const handelShowDark = () => {
    setShowDark(!showDark);
  };

  return (
    <div>
      <Navbar showDark={showDark} handelShowDark={handelShowDark} />
      <div className={`home-contents ${showDark ? "" : "showdarkCol"}`}>
        <Sidebar />
        <div className={`home-right ${showDark ? "" : "showdarkCol"}`}>
          <Orders showDark={showDark} />
        </div>
      </div>
    </div>
  );
};

export default Home;
