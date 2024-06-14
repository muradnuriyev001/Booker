import { useCallback, useState } from "react";
import c from "./ShopRange.module.scss";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import { setPriceFilter } from "../../../../redux/slices/filterBookSlice.slice";
import { maxBookPrice } from "../../../../redux/slices/filterBookSlice.slice"; //Constant value of max price of book in data
const ShopRange = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState(maxBookPrice);

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setPriceFilter(str));
    }, 500),
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rangeValue = e.target.value;
    setValue(Number(rangeValue));
    updateSearchValue(rangeValue);
  };

  const resetRange = () => {
    setValue(maxBookPrice);
    dispatch(setPriceFilter(maxBookPrice));
  };

  return (
    <div className={c.range_filter}>
      <h2>Price</h2>
      <input
        type="range"
        min="0"
        max={maxBookPrice}
        value={value}
        onChange={handleChange}
      />
      <p>Max Price : {value}$</p>
      <p onClick={resetRange}>Reset</p>
    </div>
  );
};

export default ShopRange;
