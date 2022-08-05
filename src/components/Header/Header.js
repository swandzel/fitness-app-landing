import "./Header.scss";
import Button from "../Button/Button";
import Container from "../Container/Container";

const Header = () => {
  return (
    <header className="header">
      <div className="header--layer">
        <Container>
          <div className="header--text">
            <div className="header--title">
              <div className="header--title-blue">FITNESS</div> MADE SIMPLE
            </div>
            <div className="header--subtitle">
              Unlimited access to the world’s best workouts from celebrity
              trainers
            </div>
            <Button text="Try it for free" />
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
