import "./Navbar.scss";
import Button from "./../Button/Button";
import Logo from "../../assets/icons/dumbbell.svg";
import { motion } from "framer-motion";
import { navAnim } from "../../utils/animations";

const Navbar = () => {
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
          <li className="navbar--link">Learn more</li>
          <li className="navbar--link navbar--link-active">Download</li>
          <li className="navbar--link">Blog</li>
          <li className="navbar--link">Testimonials</li>
          <li className="navbar--link">Login</li>
          <Button text="SIGNUP" type="small" />
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
