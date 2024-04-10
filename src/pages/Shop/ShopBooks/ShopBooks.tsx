import c from "./ShopBooks.module.scss";
import booksData from "../../../data/books-data.json";
import ShopBookCard from "./ShopBookCard/ShopBookCard";

const ShopBooks = () => {
  return (
    <div className={c.books}>
      {booksData.map((book, i) => (
        <ShopBookCard {...book} key={i} />
      ))}
    </div>
  );
};

export default ShopBooks;
