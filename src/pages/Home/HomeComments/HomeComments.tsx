import c from "./HomeComments.module.scss";
import { FaStar } from "react-icons/fa";

//Swiper Library Components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
//Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const comments = [
  {
    Emily:
      "This online book store is absolutely fantastic! From the vast selection to the seamless ordering process, everything about it is top-notch. I've never had any issues with my orders, and the customer service is excellent. Plus, the delivery is always prompt. Highly recommended for all book lovers!",
  },
  {
    Michael:
      "I can't sing enough praises for this online book store. Not only do they have an extensive collection spanning various genres, but their website is also incredibly user-friendly. I love how easy it is to discover new books through their recommendations. Plus, the packaging is secure, ensuring my books arrive in pristine condition every time. 5 stars without a doubt!",
  },
  {
    Hannah:
      "If you're a bookworm like me, this online book store will become your best friend. The browsing experience is a joy, with plenty of filters to narrow down your search. I've found some rare editions here that I couldn't find elsewhere. Their commitment to customer satisfaction is evident in every aspect of their service. I wouldn't shop anywhere else!",
  },
  {
    Sophie:
      "Five stars all the way! This online book store exceeds expectations in every aspect. Not only is the selection vast, but the prices are also competitive. I appreciate how they prioritize customer experience, evident in their quick shipping and responsive support team. Whether you're after the latest bestseller or a hard-to-find classic, this is the place to go!",
  },
];

const HomeComments = () => {
  return (
    <div>
      <Swiper
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        modules={[Autoplay, Pagination]}
        className={c.swiper}
      >
        {comments.map((comment, i) => (
          <SwiperSlide className={c.swiperSlide} key={i}>
            <div className={c.stars}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>{Object.values(comment)}</p>
            <p>{Object.keys(comment)}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeComments;
