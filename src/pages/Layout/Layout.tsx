import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";
import TopButton from "../../components/TopButton/TopButton";

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

  return (
    <>
      <div>
        {loaderState && <Loader />}
        <Header />
        <Outlet />
        <Footer />
      </div>
      <TopButton />
    </>
  );
};

export default Layout;
