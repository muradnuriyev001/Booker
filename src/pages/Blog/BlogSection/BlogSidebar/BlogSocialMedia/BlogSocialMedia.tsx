import c from "./BlogSocialMedia.module.scss";
import {
  LiaInstagram,
  LiaFacebookF,
  LiaTwitter,
  LiaReddit,
} from "react-icons/lia";

const BlogSocialMedia = () => {
  return (
    <div className={c.social_media}>
      <p>SOCIAL MEDIA</p>
      <div className={c.logos}>
        <LiaInstagram />
        <LiaFacebookF />
        <LiaTwitter />
        <LiaReddit />
      </div>
    </div>
  );
};

export default BlogSocialMedia;
