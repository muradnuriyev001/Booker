import c from "./BlogCategories.module.scss";
import { NavLink } from "react-router-dom";
const BlogCategories = () => {
  return (
    <div className={c.categories}>
      <p>CATEGORIES</p>
      <ul>
        <NavLink to={""}>
          <li>Arts & Literature</li>
        </NavLink>
        <NavLink to={""}>
          <li>Cultural</li>
        </NavLink>
        <NavLink to={""}>
          <li>European</li>
        </NavLink>
        <NavLink to={""}>
          <li>Historical</li>
        </NavLink>
        <NavLink to={""}>
          <li>Life Style</li>
        </NavLink>
        <NavLink to={""}>
          <li>Uncategorized</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default BlogCategories;
