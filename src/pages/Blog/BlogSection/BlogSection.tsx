import BlogContent from "./BlogContent/BlogContent";
import BlogSidebar from "./BlogSidebar/BlogSidebar";
import c from "./BlogSection.module.scss";

const BlogSection = () => {
  return (
    <div className={c.section}>
      <div className={c.content}>
        <BlogContent />
      </div>

      <div className={c.sidebar}>
        <BlogSidebar />
      </div>
    </div>
  );
};

export default BlogSection;
