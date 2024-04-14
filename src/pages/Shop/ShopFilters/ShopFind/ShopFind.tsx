import { useState } from "react";
import c from "./ShopFind.module.scss";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { setTitleFilter } from "../../../../redux/slices/filterBookSlice.slice";

const ShopFind = () => {
  const [value, setValue] = useState<string>("");

  const dispatch = useDispatch();

  const handleSearchClick = () => {
    value !== "" ? dispatch(setTitleFilter(value)) : null;
    setValue("");
  };

  return (
    <div className={c.find}>
      <form action="">
        <input
          type="text"
          placeholder="Search by name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <CiSearch onClick={handleSearchClick} />
      </form>
    </div>
  );
};

export default ShopFind;
