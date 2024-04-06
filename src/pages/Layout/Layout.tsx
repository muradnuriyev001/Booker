import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";

const Layout = () => {
  const { pathname } = useLocation();

  const [loaderState, setLoaderState] = useState(false);

  useEffect(() => {
    setLoaderState(true);
    setTimeout(() => {
      setLoaderState(false);
    }, 1500);
  }, [pathname]);

  return (
    <>
      {loaderState && <Loader />}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
