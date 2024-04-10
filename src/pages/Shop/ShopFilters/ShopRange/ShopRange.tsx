import { useState } from "react";
import c from "./ShopRange.module.scss";

const ShopRange = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  const resetRange = () => {
    setValue(0);
  };

  return (
    <div className={c.range_filter}>
      <h2>Price</h2>
      <input
        type="range"
        min="0"
        max="200"
        value={value}
        onChange={handleChange}
      />
      <p>Max Price : {value}$</p>
      <p onClick={resetRange}>Reset</p>
    </div>
  );
};

export default ShopRange;
