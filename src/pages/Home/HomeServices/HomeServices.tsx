import c from "./HomeServices.module.scss";
import { FaTruckPlane } from "react-icons/fa6";
import { RiRefund2Fill } from "react-icons/ri";
import { IoMdBook } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";

import { motion } from "framer-motion";

const Animation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 1 },
  }),
};
const HomeServices = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      variants={Animation}
      custom={0.5}
      className={c.services}
    >
      <div className={c.services__1}>
        <FaTruckPlane />
        <p>Free Standard Delivery</p>
        <span>Free standard delivery for all.</span>
      </div>
      <div className={c.services__2}>
        <RiRefund2Fill />
        <p>Free Easy Returns</p>
        <span>Enjoy easy and free exchanges.</span>
      </div>
      <div className={c.services__3}>
        <IoMdBook />
        <p>4 Million Books Available</p>
        <span>More than 4 million books.</span>
      </div>
      <div className={c.services__4}>
        <CiDiscount1 />
        <p>Special Discounts</p>
        <span>Special discounts on selected items.</span>
      </div>
    </motion.div>
  );
};

export default HomeServices;
