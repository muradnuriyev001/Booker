import c from "./HeaderTop.module.scss";
import { NavLink } from "react-router-dom";

import { FaRegQuestionCircle } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaTruckFast } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";

const HeaderTop = () => {
  return (
    <div className={c.header__top}>
      <div className={c.header__top__help}>
        <FaRegQuestionCircle />
        <NavLink to={"/contact"}>
          <p>Need help?</p>
        </NavLink>
      </div>

      <div className={c.header__top__address}>
        <TbWorld />
        <NavLink to={"/contact"}>
          <p>Booker Address</p>
        </NavLink>
      </div>

      <div className={c.header__top_shipping}>
        <p>FREE Worldwide Shipping from $1.99</p>
      </div>

      <div className={c.header__top__track}>
        <FaTruckFast />
        <a href="https://parcelsapp.com/en/tracking" target="_blank">
          <p>Track Your Order</p>
        </a>
      </div>

      <div className={c.header__top__account}>
        <IoMdPerson />
        <NavLink to={"/account"}>
          <p>Account</p>
        </NavLink>
      </div>
    </div>
  );
};

export default HeaderTop;
