import Subscribe from "../../components/Subscribe/Subscribe";
import usePageTitle from "../../hooks/usePageTitle";
import HomeSearch from "./HomeSearch/HomeSearch";
import HomeServices from "./HomeServices/HomeServices";

const Home = () => {
  usePageTitle("Booker | Home");
  return (
    <>
      <HomeSearch />
      <HomeServices />
      <Subscribe />
    </>
  );
};

export default Home;
