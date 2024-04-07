import c from "./HomeSearch.module.scss";
import SearchBar from "./SearchBar/SearchBar";

const HomeSearch = () => {
  return (
    <div className={c.home__banner}>
      <p>QUICK & EASY FOR YOU</p>
      <h2>Find the book you're looking for easier to read.</h2>
      <SearchBar />
    </div>
  );
};

export default HomeSearch;
