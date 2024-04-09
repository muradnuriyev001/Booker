import c from "./BlogSearch.module.scss";
import { CiSearch } from "react-icons/ci";

const BlogSearch = () => {
  return (
    <div className={c.search_bar}>
      <input type="text" placeholder="Search Blog" />
      <CiSearch />
    </div>
  );
};

export default BlogSearch;
