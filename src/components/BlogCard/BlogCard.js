import "./BlogCard.scss";
import BlogPic from "../../assets/images/blog-pic.png";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <img src={BlogPic} alt="Blog post" />
      <div className="blog-card--title">Running for fat loss</div>
      <div className="blog-card--text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum
        sem vitae lectus imperdiet pulvinar. Sed aliquet mauris non fringilla
        feugiat. Sed maximus pulvinar felis eget rutrum. Donec venenatis rhoncus
        lorem sed vehicula. Nunc consequat diam ac consectetur auctor. Ut
        accumsan, leo id consectetur dictum, risus dolor placerat ante, vitae
        ullamcorper libero odio et sapien. Nam a nulla dolor. Nunc justo urna,
        finibus quis rhoncus sit amet, convallis in turpis. Suspendisse in
        iaculis nunc. Sed posuere urna dictum lacus commodo feugiat. Integer
        vestibulum, dolor sit amet mollis aliquet
      </div>
      <div className="blog-card--read-more">Read More</div>
    </div>
  );
};

export default BlogCard;
