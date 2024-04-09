import BlogCategories from "./BlogCategories/BlogCategories";
import BlogRecent from "./BlogRecent/BlogRecent";
import BlogSearch from "./BlogSearch/BlogSearch";
import BlogSocialMedia from "./BlogSocialMedia/BlogSocialMedia";

const BlogSidebar = () => {
  return (
    <>
      <BlogSearch />
      <BlogCategories />
      <BlogRecent />
      <BlogSocialMedia />
    </>
  );
};

export default BlogSidebar;
