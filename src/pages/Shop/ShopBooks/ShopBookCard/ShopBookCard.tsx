import c from "./ShopBookCard.module.scss";
import { FC } from "react";
import { getBooksImageURL } from "../../../../utils/getImageUrl";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addWishlist } from "../../../../redux/slices/wishlistSlice.slice";
import { addCart } from "../../../../redux/slices/cartSlice.slice";
import { Link } from "react-router-dom";

import { MdOutlineFavorite } from "react-icons/md";
import { MdOutlineAddShoppingCart } from "react-icons/md";

interface BookData {
  id: number;
  price: number;
  name: string;
  description: string;
  author: string;
  image: string;
}

const ShopBookCard: FC<BookData> = ({ price, name, author, image, id }) => {
  const dispatch = useDispatch();

  const handleAddWishlist = () => {
    const wishlistData = { name, price, author, id: uuidv4(), image };
    dispatch(addWishlist(wishlistData));
  };

  const handleAddCart = () => {
    const cartData = { name, price, author, id: uuidv4(), image };
    dispatch(addCart(cartData));
  };

  return (
    <div className={c.book_wrapper}>
      <Link to={`/shop/book/${id}`}>
        <div className={c.book_card}>
          <img
            src={getBooksImageURL(image)}
            alt="Book Image"
            draggable="false"
          />
          <p>{author}</p>
          <h3>{name}</h3>
          <p>{price}$</p>
        </div>
      </Link>
      <div className={c.icons}>
        <MdOutlineFavorite onClick={handleAddWishlist} />
        <MdOutlineAddShoppingCart onClick={handleAddCart} />
      </div>
    </div>
  );
};

export default ShopBookCard;
