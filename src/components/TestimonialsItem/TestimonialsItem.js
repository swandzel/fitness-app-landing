import "./TestimonialsItem.scss";
import ReviewStarIcon from "../../assets/icons/review-star.svg";

const TestimonialsItem = () => {
  return (
    <div className="testimonials-item">
      <div className="testimonials-item--stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <img
            src={ReviewStarIcon}
            alt="Review Star"
            className="testimonials-item--star"
          />
        ))}
      </div>
      <div className="testimonials-item--text">
        “I LOVE NEXT! Very user friendly, so it’s perfect for experienced
        athletes and beginners. It’s become my favorite way to track my
        workouts.”
      </div>
      <div className="testimonials-item--author">@maggie-c</div>
    </div>
  );
};

export default TestimonialsItem;
