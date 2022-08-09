import "./TestimonialsItem.scss";
import ReviewStarIcon from "../../assets/icons/review-star.svg";

const TestimonialsItem = ({ starCount, text, author }) => {
  return (
    <div className="testimonials-item">
      <div className="testimonials-item--stars">
        {Array.from(starCount).map((star, index) => (
          <img
            src={ReviewStarIcon}
            alt="Review Star"
            className="testimonials-item--star"
            key={index}
          />
        ))}
      </div>
      <div className="testimonials-item--text">“{text}”</div>
      <div className="testimonials-item--author">{author}</div>
    </div>
  );
};

export default TestimonialsItem;
