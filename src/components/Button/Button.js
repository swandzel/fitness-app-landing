import "./Button.scss";
import { motion } from "framer-motion";

const Button = ({ text, type = "large", onClick }) => {
  return (
    <motion.button
      className={`button button--${type}`}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};

export default Button;
