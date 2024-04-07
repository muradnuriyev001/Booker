import c from "./SearchBar.module.scss";

import { CiSearch } from "react-icons/ci";

const tempCategories = [
  "All Categories",
  "Children's books",
  "Comedy",
  "Adventure",
  "History",
  "Horror",
  "Romance",
];

const tempAuthors = [
  "All Authors",
  "Bo Eriksson",
  "Dan Gordon",
  "Gunvor Hofmo",
  "Maria-Pia Go",
  "Nadya Toloko",
  "Per Ahlin",
];

const SearchBar = () => {
  return (
    <div className={c.search}>
      <form action="">
        <select>
          {tempCategories.map((category, i) => (
            <option key={i} value="">
              {category}
            </option>
          ))}
        </select>

        <select>
          {tempAuthors.map((author, i) => (
            <option key={i} value="">
              {author}
            </option>
          ))}
        </select>
        <button type="submit">
          <CiSearch />
          <p>FIND BOOK</p>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
