import usePageTitle from "../../hooks/usePageTitle";
import HomeSearch from "./HomeSearch/HomeSearch";

const Home = () => {
  usePageTitle("Booker | Home");
  return (
    <>
      <HomeSearch />
    </>
  );
};

export default Home;
