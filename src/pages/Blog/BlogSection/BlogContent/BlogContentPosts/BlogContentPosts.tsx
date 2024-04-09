import blogData from "../../../../../data/blog-data.json";
import BlogContentPost from "./BlogContentPost/BlogContentPost";

const BlogContentPosts = () => {
  return (
    <>
      {blogData.map((blog, i) => (
        <BlogContentPost key={i} {...blog} />
      ))}
    </>
  );
};

export default BlogContentPosts;
