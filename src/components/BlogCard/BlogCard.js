import "./BlogCard.scss";

const BlogCard = ({ title, text, image }) => {
  return (
    <div className="blog-card">
      <img src={image} alt="Blog post" />
      <div className="blog-card--title">{title}</div>
      <div className="blog-card--text">{text}</div>
      <div className="blog-card--read-more">Read More</div>
    </div>
  );
};

export default BlogCard;
