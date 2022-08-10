import "./Header.scss";
import Button from "../Button/Button";

const Header = ({ toggleModal }) => {
  return (
    <header className="header">
      <div className="header--layer">
        <div className="header--text">
          <div className="header--title">
            <div className="header--title-blue">FITNESS</div> MADE SIMPLE
          </div>
          <p className="header--subtitle">
            Unlimited access to the world’s best workouts from celebrity
            trainers
          </p>
          <Button onClick={toggleModal} text="Try it for free" />
        </div>
      </div>
    </header>
  );
};

export default Header;
