import React from "react";
import "../Styles/OrdersInfo.css";
import { AiOutlinePlus } from "react-icons/ai";
import shoppy from "../assets/shoppy.png";
import { MdOutlineArrowDropDown } from "react-icons/md";

const OrdersInfo = ({ showdark }) => {
  return (
    <div className={` orders--container `}>
      <div className="orders-info-container">
        <AiOutlinePlus />
        <div className="input-channel-order-no">
          <input type="checkbox" />
          <img src={shoppy} alt="shoppy" className="shoppy-img" />
          <p>#TKN2023754</p>
        </div>
        <div className="order-date-city">
          <p className="date">2022-5-04</p>
          <p className="city">Lucknow</p>
        </div>
        <div className="custmor-name">
          <p>Abhishek Dikit</p>
        </div>
        <div className="order-valu-status-action">
          <p>0.00</p>
          <p className="pendding">Pendding</p>
          <p className="actions">
            Action <MdOutlineArrowDropDown />
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default OrdersInfo;
