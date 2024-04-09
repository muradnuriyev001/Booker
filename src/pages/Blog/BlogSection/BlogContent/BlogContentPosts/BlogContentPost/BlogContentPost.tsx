import { FC } from "react";
import c from "./BlogContentPost.module.scss";
import { getImageURL } from "../../../../../../utils/getImageUrl";
import { Link } from "react-router-dom";

interface Post {
  id: number;
  date: string;
  title: string;
  description: string;
  keyword: string;
  image: string;
}

const BlogContentPost: FC<Post> = ({ id, date, title, description, image }) => {
  return (
    <div className={c.post}>
      <div className={c.post__image}>
        <img src={getImageURL(image)} alt="Blog Cover" />
      </div>

      <div className={c.post__content}>
        <p>{date}</p>
        <h2>{title}</h2>
        <p>{description}</p>

        <Link to={`/blog/${id}`}>
          <button>Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default BlogContentPost;
