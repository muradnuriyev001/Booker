import { Route, Routes } from "react-router-dom";

import Layout from "../pages/Layout/Layout";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Shop from "../pages/Shop/Shop";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
