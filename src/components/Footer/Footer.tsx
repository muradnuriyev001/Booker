import c from "./Footer.module.scss";
import { NavLink } from "react-router-dom";

import {
  FaSquareInstagram,
  FaSquareFacebook,
  FaSquareTwitter,
  FaSquareReddit,
} from "react-icons/fa6";

import paymentsLogo from "../../assets/Footer/payments.png";

const Footer = () => {
  return (
    <div className={c.footer}>
      <div className={c.content}>
        <div className={c.content__1}>
          <h2>Customer Services</h2>
          <p>Got Question? Call us 24/7</p>
          <p>(+802) 425-25-25</p>
          <p>268 St, South Park, NYC</p>
          <p>contact@booker.com</p>
        </div>
        <div className={c.content__2}>
          <h2>Publishers</h2>
          <ul>
            <NavLink to={"/shop"}>
              <li>Penguin Random House</li>
              <li>HarperCollins</li>
              <li>Hachette Livre</li>
              <li>Simon & Schuster</li>
              <li>Macmillan Publishers</li>
              <li>Scholastic Corporation</li>
            </NavLink>
          </ul>
        </div>
        <div className={c.content__3}>
          <h2>Information</h2>
          <ul>
            <NavLink to={"/about"}>
              <li>About us</li>
            </NavLink>
            <NavLink to={"/contact"}>
              <li>Contact</li>
            </NavLink>
            <NavLink to={"/blog"}>
              <li>Blog</li>
            </NavLink>
            <NavLink to={"/shop"}>
              <li>Best sellers</li>
            </NavLink>
          </ul>
        </div>
        <div className={c.content__4}>
          <h2>Social Media</h2>
          <div className={c.logos}>
            <FaSquareInstagram />
            <FaSquareFacebook />
            <FaSquareTwitter />
            <FaSquareReddit />
          </div>
          <div className={c.payments}>
            <img src={paymentsLogo} alt="" draggable="false" />
          </div>
        </div>
      </div>
      <div className={c.copyright}>
        <p>Copyright © 2024 Booker | Powered by MN</p>
      </div>
    </div>
  );
};

export default Footer;
