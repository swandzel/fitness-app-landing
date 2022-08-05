import "./Testimonials.scss";
import TestimonialsItem from "../TestimonialsItem/TestimonialsItem";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import { h2Animation } from "../../utils/animations";

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <div className="block" />
      <motion.h2
        variants={h2Animation}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
      >
        Testimonials
      </motion.h2>
      <Carousel
        showStatus={false}
        centerMode
        infiniteLoop
        centerSlidePercentage={40}
        autoPlay
        interval={2000}
        showThumbs={false}
        showArrows={false}
      >
        <TestimonialsItem />
        <TestimonialsItem />
        <TestimonialsItem />
      </Carousel>
      <div className="testimonials--mask-left"></div>
      <div className="testimonials--mask-right"></div>
    </div>
  );
};

export default Testimonials;
