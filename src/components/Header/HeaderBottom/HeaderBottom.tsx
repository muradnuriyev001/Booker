import c from "./HeaderBottom.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import logo from "../../../assets/booker-icon.png";

import { FaRegHeart } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";

const HeaderBottom = () => {
  const [isActive, setIsActive] = useState(false);

  const location = useLocation();

  const handleActive = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsActive(window.innerWidth > 1023);
    };

    handleResize(); // Check initial width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location]);

  return (
    <div className={c.header__bottom}>
      <div className={c.header__bottom__logo}>
        <NavLink to={"/"}>
          <img src={logo} alt="" draggable="false" />
        </NavLink>
      </div>

      {isActive && (
        <div className={c.header__bottom__navigations}>
          <ul>
            <NavLink to={"/"}>
              <li>Home</li>
            </NavLink>
            <NavLink to={"/shop"}>
              <li>Shop</li>
            </NavLink>
            <NavLink to={"/blog"}>
              <li>Blog</li>
            </NavLink>
            <NavLink to={"/contact"}>
              <li>Contact</li>
            </NavLink>
          </ul>
        </div>
      )}

      <div className={c.header__bottom__group}>
        <div className={c.header__bottom__wishlist}>
          <FaRegHeart />
          <p>Wishlist</p>
        </div>
        <div className={c.header__bottom__cart}>
          <FaBasketShopping />
          <p>Cart</p>
        </div>
      </div>

      <button onClick={handleActive} className={c.header__bottom__burger}>
        <IoMenu />
      </button>
    </div>
  );
};

export default HeaderBottom;
