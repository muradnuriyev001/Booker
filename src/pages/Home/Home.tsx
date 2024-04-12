import Subscribe from "../../components/Subscribe/Subscribe";
import usePageTitle from "../../hooks/usePageTitle";
import HomeBestSellers from "./HomeBestSellers/HomeBestSellers";
import HomeComments from "./HomeComments/HomeComments";
import HomeGuide from "./HomeGuide/HomeGuide";
import HomeSearch from "./HomeSearch/HomeSearch";
import HomeServices from "./HomeServices/HomeServices";

const Home = () => {
  usePageTitle("Booker | Home");
  return (
    <>
      <HomeSearch />
      <HomeServices />
      <HomeBestSellers />
      <HomeGuide />
      <HomeComments />
      <Subscribe />
    </>
  );
};

export default Home;
