import c from "./HomeGuide.module.scss";
import { Link } from "react-router-dom";
const HomeGuide = () => {
  return (
    <div className={c.guide}>
      <p>SHOP ONLINE</p>
      <h2>Holiday Gift Guide</h2>
      <p>All Books are flat 50% Off</p>
      <button>
        <Link to={"/shop"}>SHOP COLLECTION</Link>
      </button>
    </div>
  );
};

export default HomeGuide;
