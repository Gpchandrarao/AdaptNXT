import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { LiaFileImportSolid } from "react-icons/lia";
import { VscSend } from "react-icons/vsc";
import { IoPrintOutline } from "react-icons/io5";
import { IoIosSync } from "react-icons/io";
import { MdArrowDropUp } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { MdFilterListAlt } from "react-icons/md";
import { RiArrowDropRightLine } from "react-icons/ri";
import { RiArrowDropLeftLine } from "react-icons/ri";

import "../Styles/Orders.css";
import OrdersInfo from "./OrdersInfo";

const Orders = ({ showDark }) => {
  const [ordersCategory, setRodersCategory] = useState(0);
  const [orderBackColor, setOrderBackColor] = useState(0);
  return (
    <div className={`order-container ${showDark ? "" : "showdarkCol"}`}>
      <div className="order-contents">
        <div className="order-nav-container">
          <div className="order-heading-container">
            <p>Orders</p>
            <IoIosClose className="close-icon" />
          </div>
          <CiSettings className="setting" />
        </div>
        <ul className="li-container">
          <li
            className={`${ordersCategory === 0 ? "order-active" : ""}`}
            onClick={() => setRodersCategory(0)}
          >
            Pending
          </li>
          <li
            className={`${ordersCategory === 1 ? "order-active" : ""}`}
            onClick={() => setRodersCategory(1)}
          >
            Accepted
          </li>
          <li
            className={`${ordersCategory === 2 ? "order-active" : ""}`}
            onClick={() => setRodersCategory(2)}
          >
            AWB Created
          </li>
          <li
            className={`${ordersCategory === 3 ? "order-active" : ""}`}
            onClick={() => setRodersCategory(3)}
          >
            Ready to Ship
          </li>
          <li
            className={`${ordersCategory === 4 ? "order-active" : ""}`}
            onClick={() => setRodersCategory(4)}
          >
            Shipped
          </li>
          <li
            className={`${ordersCategory === 5 ? "order-active" : ""}`}
            onClick={() => setRodersCategory(5)}
          >
            Completed
          </li>
          <li
            className={`${ordersCategory === 6 ? "order-active" : ""}`}
            onClick={() => setRodersCategory(6)}
          >
            Cancelld
          </li>
        </ul>
        <div className={`order-info ${showDark ? " " : "showdarkCol"}`}>
          <div className="order-info-container">
            <div className="import-orders-container">
              <div className="import-orders">
                <div
                  className={`import ${
                    orderBackColor === 0 ? "order-cat-activie" : ""
                  }`}
                  onClick={() => setOrderBackColor(0)}
                >
                  <LiaFileImportSolid />
                  <p>Import Orders</p>
                </div>
                <div
                  className={`accept ${
                    orderBackColor === 1 ? "order-cat-activie" : ""
                  }`}
                  onClick={() => setOrderBackColor(1)}
                >
                  <VscSend />
                  <p>Accept</p>
                </div>
                <div
                  className={`print ${
                    orderBackColor === 2 ? "order-cat-activie" : ""
                  }`}
                  onClick={() => setOrderBackColor(2)}
                >
                  <IoPrintOutline />
                  <p>Print</p>
                  <RiArrowDropDownLine className="drop-down-line" />
                </div>
              </div>
              <div className="refresh">
                <IoIosSync />
                <p>Refresh</p>
              </div>
            </div>
            <div className={`order-status ${showDark ? "" : "showdarkCol"}`}>
              {/* channel */}
              <div className="channels-container">
                <input type="checkbox" />
                <div className="channel-arrow-container">
                  <p>Channel</p>
                  <div className="arrow-head-container">
                    <MdArrowDropUp />
                    <MdOutlineArrowDropDown />
                  </div>
                </div>
                <div>
                  {/* order no */}
                  <div className="order-no">
                    <MdFilterListAlt />
                    <p>Order No</p>
                  </div>
                </div>
              </div>
              {/* order date */}
              <div className="order-date">
                <div className="search-arrow">
                  <div className="arrow-head-container">
                    <MdArrowDropUp />
                    <MdOutlineArrowDropDown />
                  </div>
                  <CiSearch />
                  <p>Order Date</p>
                </div>
              </div>
              {/* city */}
              <div className="city">
                <div className="search-arrow">
                  <div className="arrow-head-container">
                    <MdArrowDropUp />
                    <MdOutlineArrowDropDown />
                  </div>
                  <CiSearch />
                  <p>city</p>
                </div>
              </div>
              {/* customer Name */}
              <div className="custome-container">
                <div className="arrow-head-container">
                  <MdArrowDropUp />
                  <MdOutlineArrowDropDown />
                </div>
                <p>Customer Name</p>
              </div>
              {/* order values */}
              <div className="order-valus-status">
                <div className="order-valus">
                  <CiSearch />
                  <p>Order value</p>
                </div>
                <div className="status">
                  <div className="arrow-head-container">
                    <MdArrowDropUp />
                    <MdOutlineArrowDropDown />
                  </div>
                  <p>Status</p>
                </div>
              </div>
              <div className="arrow-head-container">
                <MdArrowDropUp />
                <MdOutlineArrowDropDown />
              </div>
              <p>Operation</p>
            </div>
            {/*  orders info*/}
            <OrdersInfo showDark={showDark} />
            <OrdersInfo />
            <OrdersInfo />
          </div>
          <div className="button">
            <button className="but" type="button">
              <RiArrowDropLeftLine className="arrows-left" />
            </button>
            <button type="button" className="buts">
              1
            </button>
            <button className="but" type="button">
              <RiArrowDropRightLine className="arrows-left" />
            </button>
            <p className="pages">
              20/pages <MdOutlineArrowDropDown />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
