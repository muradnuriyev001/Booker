import { FC } from "react";
import c from "./BlogContentPost.module.scss";
import { getImageURL } from "../../../../../../utils/getImageUrl";

interface Post {
  date: string;
  title: string;
  description: string;
  keyword: string;
  image: string;
}

const BlogContentPost: FC<Post> = ({ date, title, description, image }) => {
  return (
    <div className={c.post}>
      <div className={c.post__image}>
        <img src={getImageURL(image)} alt="Blog Cover" />
      </div>

      <div className={c.post__content}>
        <p>{date}</p>
        <h2>{title}</h2>
        <p>{description}</p>

        <button>Read More</button>
      </div>
    </div>
  );
};

export default BlogContentPost;
