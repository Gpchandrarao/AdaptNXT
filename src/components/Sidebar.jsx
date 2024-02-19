import React, { useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoPricetagOutline } from "react-icons/io5";
import { GrDeliver } from "react-icons/gr";
import { LuMenuSquare } from "react-icons/lu";
import { CiShare2 } from "react-icons/ci";
import "../Styles/Sidebar.css";

const Sidebar = () => {
  const [category, setCategory] = useState(0);
  return (
    <div className="sidebar-container">
      <div
        className={`sidebar-contents ${category === 1 ? "active" : ""}`}
        onClick={() => setCategory(1)}
      >
        <AiOutlineDashboard className="sidebar-icons" />
        <p className="sidebar-tags">Dashboard</p>
      </div>
      <div
        className={`sidebar-contents ${category === 2 ? "active" : ""}`}
        onClick={() => setCategory(2)}
      >
        <IoPricetagOutline className="sidebar-icons" />
        <p className="sidebar-tags">Inventory</p>
      </div>
      <div
        className={`sidebar-contents ${category === 0 ? "active" : ""}`}
        onClick={() => setCategory(0)}
      >
        <LuMenuSquare className="sidebar-icons" />
        <p className="sidebar-tags">Orders</p>
      </div>
      <div
        className={`sidebar-contents ${category === 3 ? "active" : ""}`}
        onClick={() => setCategory(3)}
      >
        <GrDeliver className="sidebar-icons" />
        <p className="sidebar-tags">Shipping</p>
      </div>
      <div
        className={`sidebar-contents ${category === 4 ? "active" : ""}`}
        onClick={() => setCategory(4)}
      >
        <CiShare2 className="sidebar-icons" />
        <p className="sidebar-tags">Channel</p>
      </div>
    </div>
  );
};

export default Sidebar;
