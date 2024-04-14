import ShopCategories from "./ShopCategories/ShopCategories";
import ShopFind from "./ShopFind/ShopFind";
import ShopRange from "./ShopRange/ShopRange";

const ShopFilters = () => {
  return (
    <div>
      <ShopFind />
      <ShopCategories />
      <ShopRange />
    </div>
  );
};

export default ShopFilters;
