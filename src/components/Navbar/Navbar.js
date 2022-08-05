import "./Navbar.scss";
import Button from "./../Button/Button";
import Logo from "../../assets/icons/dumbbell.svg";
import { motion } from "framer-motion";
import { navAnim } from "../../utils/animations";

const Navbar = ({ toggleModal }) => {
  return (
    <motion.nav
      initial="initial"
      animate="animate"
      variants={navAnim}
      transition={{ duration: 0.5 }}
      className="navbar"
    >
      <div className="navbar--container">
        <div className="navbar--logo">
          <img src={Logo} alt="Logo" />
          <span className="navbar--logo-bold">
            NE<span className="navbar--logo-blue">X</span>T
          </span>
          &nbsp;FITNESS APP
        </div>
        <ul className="navbar--links">
          <li className="navbar--link">
            <a href="#learn-more">Learn more</a>
          </li>
          <li className="navbar--link">
            <a href="#download">Download</a>
          </li>
          <li className="navbar--link">
            <a href="#blog">Blog</a>
          </li>
          <li className="navbar--link">
            <a href="#testimonials">Testimonials</a>
          </li>
          <li onClick={() => toggleModal()} className="navbar--link">
            Login
          </li>
          <Button onClick={toggleModal} text="SIGNUP" type="small" />
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
