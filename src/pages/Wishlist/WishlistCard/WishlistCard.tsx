import { FC } from "react";
import { getBooksImageURL } from "../../../utils/getImageUrl";
import c from "./WishlistCard.module.scss";
import { MdOutlineDeleteForever } from "react-icons/md";
import { Wishlist } from "../../../types/types";
import { useDispatch } from "react-redux";
import { deleteWishlist } from "../../../redux/slices/wishlistSlice.slice";

const WishlistCard: FC<Wishlist> = ({ name, author, price, image, id }) => {
  const dispatch = useDispatch();

  const handleDeleteWishlist = (wishlistId: string) => {
    const wishlistToDelete: Wishlist = {
      id: wishlistId,
      name: "",
      price: 0,
      author: "",
      image: "",
    }; // Creating a dummy Wishlist object with just id
    dispatch(deleteWishlist(wishlistToDelete));
  };
  
  return (
    <div className={c.wishlist_card}>
      <img src={getBooksImageURL(image)} alt="" />
      <div className={c.wishlist_card__text}>
        <h1>{name}</h1>
        <p>{author}</p>
        <p>Price: {price}$</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className={c.wishlist_card__delete}>
        <MdOutlineDeleteForever onClick={() => handleDeleteWishlist(id)} />
      </div>
    </div>
  );
};

export default WishlistCard;
