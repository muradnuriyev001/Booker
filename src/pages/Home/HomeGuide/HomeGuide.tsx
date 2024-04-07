import c from "./HomeGuide.module.scss";
import { NavLink } from "react-router-dom";
const HomeGuide = () => {
  return (
    <div className={c.guide}>
      <p>SHOP ONLINE</p>
      <h2>Holiday Gift Guide</h2>
      <p>All Books are flat 50% Off</p>
      <button>
        <NavLink to={"/shop"}>SHOP COLLECTION</NavLink>
      </button>
    </div>
  );
};

export default HomeGuide;
