import "./Button.scss";
import { motion } from "framer-motion";
import { arrowAnim } from "../../utils/animations";

const Button = ({ text, type = "large", onClick, icon }) => {
  return (
    <motion.button
      className={`button button--${type}`}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      whileHover="hover"
    >
      <span>{text}</span>
      {icon && <motion.img variants={arrowAnim} src={icon} alt="Arrow icon" />}
    </motion.button>
  );
};

export default Button;
