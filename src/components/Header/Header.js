import "./Header.scss";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import { headerPic, headerText } from "../../utils/animations";
import ArrowRight from "../../assets/icons/arrow-right.svg";

const Header = ({ toggleModal }) => {
  return (
    <motion.header
      initial="offscreen"
      animate="onscreen"
      variants={headerPic}
      className="header"
    >
      <div className="header--layer">
        <motion.div
          initial="offscreen"
          animate="onscreen"
          variants={headerText}
          className="header--text"
        >
          <div className="header--title">
            <div className="header--title-blue">FITNESS</div> MADE SIMPLE
          </div>
          <p className="header--subtitle">
            Unlimited access to the world’s best workouts from celebrity
            trainers
          </p>
          <Button
            onClick={toggleModal}
            text="Try it for free"
            icon={ArrowRight}
          />
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
