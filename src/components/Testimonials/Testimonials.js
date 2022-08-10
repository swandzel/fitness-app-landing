import "./Testimonials.scss";
import TestimonialsItem from "../TestimonialsItem/TestimonialsItem";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import { h2Animation, cardItem } from "../../utils/animations";
import { useEffect, useState } from "react";
import { testimonials } from "../../utils/testimonials";

const Testimonials = () => {
  const [size, setSize] = useState(0);
  const [testimonialsCount, setTestimonialsCount] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      setSize(window.innerWidth);
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (size > 1000) {
      setTestimonialsCount(40);
    }
    if (size < 1000) {
      setTestimonialsCount(50);
    }
    if (size < 768) {
      setTestimonialsCount(100);
    }
  }, [size]);

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
      <motion.div
        variants={cardItem}
        initial="hidden"
        animate="show"
        transition={{ delay: 2 }}
      >
        <Carousel
          showStatus={false}
          centerMode
          infiniteLoop
          centerSlidePercentage={testimonialsCount}
          autoPlay
          interval={2000}
          showThumbs={false}
          showArrows={false}
        >
          {testimonials.map((testimonial) => (
            <TestimonialsItem
              key={testimonial.id}
              starCount={testimonial.starCount}
              text={testimonial.text}
              author={testimonial.author}
            />
          ))}
        </Carousel>
      </motion.div>
      <div className="testimonials--mask-left"></div>
      <div className="testimonials--mask-right"></div>
    </div>
  );
};

export default Testimonials;
