import c from "./HomeBestSellers.module.scss";
import booksData from "../../../data/books-data.json";
import ShopBookCard from "../../Shop/ShopBooks/ShopBookCard/ShopBookCard";

const HomeBestSellers = () => {
  const bestSellers = booksData.slice(0, 10);
  return (
    <div className={c.best_sellers}>
      <h1>Best Sellers of the Week</h1>

      <div className={c.books}>
        {bestSellers.map((book, i) => (
          <ShopBookCard key={i} {...book} />
        ))}
      </div>
    </div>
  );
};

export default HomeBestSellers;
