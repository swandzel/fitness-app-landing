import "./Blog.scss";
import BlogCard from "../BlogCard/BlogCard";
import { motion } from "framer-motion";
import { h2Animation } from "../../utils/animations";
import { blogPosts } from "../../utils/blogPosts";

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
        Check our NE<span className="navbar--logo-blue">X</span>T blog
      </motion.h2>
      <div className="blog--posts">
        {blogPosts.map((blogPost) => (
          <BlogCard
            key={blogPost.id}
            title={blogPost.title}
            text={blogPost.text}
            image={blogPost.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
