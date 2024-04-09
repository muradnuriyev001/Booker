import c from "./BlogRecent.module.scss";
import blogData from "../../../../../data/blog-data.json";
import { getImageURL } from "../../../../../utils/getImageUrl";

const BlogRecent = () => {
  return (
    <div className={c.recent}>
      <p>RECENT POSTS</p>
      <div className={c.recent__blog}>
        <div className={c.recent__image}>
          <img src={getImageURL(blogData[4].image)} alt="" />
        </div>
        <div className={c.recent__text}>
          <p>{blogData[0].date}</p>
          <p>{blogData[0].title}</p>
        </div>
      </div>
      <div className={c.recent__blog}>
        <div className={c.recent__image}>
          <img src={getImageURL(blogData[5].image)} alt="" />
        </div>
        <div className={c.recent__text}>
          <p>{blogData[1].date}</p>
          <p>{blogData[1].title}</p>
        </div>
      </div>
      <div className={c.recent__blog}>
        <div className={c.recent__image}>
          <img src={getImageURL(blogData[3].image)} alt="" />
        </div>
        <div className={c.recent__text}>
          <p>{blogData[2].date}</p>
          <p>{blogData[2].title}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogRecent;
