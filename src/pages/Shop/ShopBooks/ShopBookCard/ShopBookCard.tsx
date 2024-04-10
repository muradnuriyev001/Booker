import { FC } from "react";
import c from "./ShopBookCard.module.scss";
import { getBooksImageURL } from "../../../../utils/getImageUrl";

interface BookData {
  id: number;
  price: number;
  name: string;
  description: string;
  author: string;
  image: string;
}
const ShopBookCard: FC<BookData> = ({ price, name, author, image }) => {
  return (
    <div className={c.book_card}>
      <img src={getBooksImageURL(image)} alt="" />
      <p>{author}</p>
      <h3>{name}</h3>
      <p>{price}$</p>
    </div>
  );
};

export default ShopBookCard;
