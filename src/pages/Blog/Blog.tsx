import usePageTitle from "../../hooks/usePageTitle";
import c from "./Blog.module.scss";
import BlogSection from "./BlogSection/BlogSection";
const Blog = () => {
  usePageTitle("Booker | Blog");
  return (
    <div className={c.blog}>
      <div className={c.banner}>
        <h1>Blog</h1>
      </div>

      <BlogSection />
    </div>
  );
};

export default Blog;
