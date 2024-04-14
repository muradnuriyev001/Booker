import c from "./ShopCategories.module.scss";
import booksData from "../../../../data/books-data.json";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAuthorFilter } from "../../../../redux/slices/filterBookSlice.slice";

// Define an interface for the state object
interface CheckboxValues {
  [key: string]: boolean;
}

const slicedAuthorNames = booksData.slice(10, 20);

const ShopCategories = () => {
  const dispatch = useDispatch();
  const [checkboxValues, setCheckboxValues] = useState<CheckboxValues>({});

  const handleCheckboxChange = (author: string) => {
    const newCheckboxValues: CheckboxValues = {
      ...checkboxValues,
      [author]: !checkboxValues[author],
    };
    setCheckboxValues(newCheckboxValues);
    const selectedAuthors = Object.keys(newCheckboxValues).filter(
      (key) => newCheckboxValues[key]
    );
    dispatch(setAuthorFilter(selectedAuthors));
  };

  return (
    <div className={c.categories}>
      <h2>Popular Authors</h2>
      {slicedAuthorNames.map((category, i) => (
        <div className={c.category} key={i}>
          <input
            className={c.input}
            type="checkbox"
            checked={!!checkboxValues[category.author]}
            onChange={() => handleCheckboxChange(category.author)}
          />
          <p>{category.author}</p>
        </div>
      ))}
    </div>
  );
};

export default ShopCategories;
