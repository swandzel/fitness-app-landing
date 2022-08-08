import "./Blog.scss";
import BlogCard from "../BlogCard/BlogCard";
import { motion } from "framer-motion";
import { h2Animation } from "../../utils/animations";

const Blog = () => {
  return (
    <div className="blog" id="blog">
      <div className="block" />
      <motion.h2
        variants={h2Animation}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
      >
        Check our NEXT blog
      </motion.h2>
      <div className="blog--posts">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Blog;
