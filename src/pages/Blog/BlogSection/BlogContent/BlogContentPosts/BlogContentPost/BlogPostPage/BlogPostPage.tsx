import c from "./BlogPostPage.module.scss";
import blogsData from "../../../../../../../data/blog-data.json";
import { Link, Navigate, useParams } from "react-router-dom";
import { getImageURL } from "../../../../../../../utils/getImageUrl";

const blogText =
  "In the intricate tapestry of life, we often find ourselves entangled in a web of contradictions. We strive for success yet yearn for simplicity. We seek stability but crave adventure. We long for connection while embracing solitude. These paradoxes shape our existence, challenging us to navigate the delicate balance between opposing forces. At the heart of this complexity lies the eternal quest for equilibrium. Like a tightrope walker, we tread the fine line between opposing poles, seeking harmony amidst discord. It is in the art of finding balance that we discover the true essence of our being. In the hustle and bustle of modern life, the pursuit of balance has become more elusive than ever. We are bombarded with endless demands and distractions, pulling us in countless directions. The pressure to excel in our careers, maintain relationships, and uphold societal expectations can leave us feeling overwhelmed and depleted. Yet, amidst the chaos, there exists a profound opportunity for growth and self-discovery. By embracing life's contradictions, we open ourselves to a deeper understanding of ourselves and the world around us. We learn to embrace the ebb and flow of existence, finding solace in the midst of chaos. Finding balance is not about achieving perfection or eliminating conflict. It is about embracing the full spectrum of human experience, with all its complexities and contradictions. It requires us to cultivate self-awareness, resilience, and flexibility, allowing us to adapt to life's ever-changing currents. One of the fundamental pillars of finding balance is learning to prioritize our values and needs. By aligning our actions with our core beliefs and aspirations, we create a sense of inner harmony that transcends external circumstances. This may involve making difficult choices and setting boundaries to protect our well-being, even if it means disappointing others or challenging societal norms. Moreover, finding balance necessitates embracing both the light and dark aspects of our existence. Just as shadows are inseparable from light, so too are joy and sorrow, success and failure, strength and vulnerability. It is through embracing our shadows that we illuminate our true potential, transforming adversity into opportunities for growth and healing. Mindfulness and self-care are essential tools in the pursuit of balance. By cultivating present-moment awareness and nurturing our physical, emotional, and spiritual well-being, we replenish our inner reserves and fortify ourselves against life's challenges. This may involve practices such as meditation, exercise, journaling, or spending time in nature—whatever nourishes the soul and restores equilibrium to our lives. Furthermore, finding balance is an ongoing journey, rather than a destination to be reached. It requires patience, perseverance, and a willingness to embrace the unknown. As we navigate the ever-shifting landscape of existence, we may stumble and fall, but it is through these moments of struggle that we discover our strength and resilience. In essence, the art of finding balance is a deeply personal and subjective endeavor. What works for one person may not resonate with another, and that's okay. The key is to listen to our inner wisdom and trust in our innate ability to find our way. As we embark on this journey of self-discovery, let us remember that balance is not a static state but a dynamic dance between opposing forces. It is in embracing life's contradictions that we discover our true power and potential. So let us tread lightly, with grace and courage, as we navigate the intricate tapestry of existence, finding balance amidst the chaos.In the intricate tapestry of life, we often find ourselves entangled in a web of contradictions. We strive for success yet yearn for simplicity. We seek stability but crave adventure. We long for connection while embracing solitude. These paradoxes shape our existence, challenging us to navigate the delicate balance between opposing forces. At the heart of this complexity lies the eternal quest for equilibrium. Like a tightrope walker, we tread the fine line between opposing poles, seeking harmony amidst discord. It is in the art of finding balance that we discover the true essence of our being. In the hustle and bustle of modern life, the pursuit of balance has become more elusive than ever. We are bombarded with endless demands and distractions, pulling us in countless directions. The pressure to excel in our careers, maintain relationships, and uphold societal expectations can leave us feeling overwhelmed and depleted. Yet, amidst the chaos, there exists a profound opportunity for growth and self-discovery. By embracing life's contradictions, we open ourselves to a deeper understanding of ourselves and the world around us. We learn to embrace the ebb and flow of existence, finding solace in the midst of chaos. Finding balance is not about achieving perfection or eliminating conflict. ";

const BlogPostPage = () => {
  const { blogId } = useParams();

  const parsedBlogId = parseInt(blogId || "");
  const blogIndex = blogsData.findIndex((blog) => blog.id === parsedBlogId);

  if (blogIndex === -1) {
    return <Navigate to={"/blog"} />;
  }

  const blog = blogsData[blogIndex];

  const previousBlogId = blogIndex > 0 ? blogsData[blogIndex - 1].id : null;
  const nextBlogId =
    blogIndex < blogsData.length - 1 ? blogsData[blogIndex + 1].id : null;

  return (
    <div className={c.blog_page}>
      <p>{`Blog / ${blog.keyword} / ${blog.title}`}</p>
      <img src={getImageURL(blog.image)} alt="" />
      <div className={c.blog_page__texts}>
        <h1>{blog.title}</h1>
        <p>{blog.description}</p>
        <p>{blog.date}</p>
        <p>{blogText}</p>
      </div>

      <div className={c.navigation_links}>
        <Link className={c.back_blog} to={"/blog"}>
          Back To Blogs
        </Link>
        <div className={c.pagination}>
          {previousBlogId && (
            <Link className={c.previous_blog} to={`/blog/${previousBlogId}`}>
              Previous Blog
            </Link>
          )}
          {nextBlogId && (
            <Link className={c.next_blog} to={`/blog/${nextBlogId}`}>
              Next Blog
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
