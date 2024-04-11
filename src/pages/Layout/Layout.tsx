import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";
import TopButton from "../../components/TopButton/TopButton";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/slices/cartSlice.slice";
import { selectWishlist } from "../../redux/slices/wishlistSlice.slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Layout = () => {
  const { pathname } = useLocation();

  const [loaderState, setLoaderState] = useState(false);

  useEffect(() => {
    setLoaderState(true);
    setTimeout(() => {
      setLoaderState(false);
    }, 1000);
    window.scroll(0, 0);
  }, [pathname]);

  const cartSelector = useSelector(selectCart);
  const cartArray = Array.isArray(cartSelector.cart) ? cartSelector.cart : [];

  const wishlistSelector = useSelector(selectWishlist);
  const wishlistArray = Array.isArray(wishlistSelector.wishlist)
    ? wishlistSelector.wishlist
    : [];
  useEffect(() => {
    if (wishlistArray.length === 0) {
      null;
    } else {
      toast.success("Successfullly added to wishlist");
    }
  }, [wishlistArray]);

  useEffect(() => {
    if (cartArray.length === 0) {
      null;
    } else {
      toast.success("Successfullly added to cart");
    }
  }, [cartArray]);

  return (
    <>
      <div>
        {loaderState && <Loader />}
        <ToastContainer limit={5} autoClose={1500} />
        <Header />
        <Outlet />
        <Footer />
      </div>
      <TopButton />
    </>
  );
};

export default Layout;
