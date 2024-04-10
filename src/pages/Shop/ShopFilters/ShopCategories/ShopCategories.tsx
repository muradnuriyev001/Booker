import c from "./ShopCategories.module.scss";

const categories = [
  "Children's Books",
  "Comedy",
  "History",
  "Romance",
  "Fiction",
];

const ShopCategories = () => {
  return (
    <div className={c.categories}>
      <h2>Categories</h2>
      {categories.map((category, i) => (
        <div className={c.category} key={i}>
          <input className={c.input} type="checkbox" />
          <p>{category}</p>
        </div>
      ))}
    </div>
  );
};

export default ShopCategories;
