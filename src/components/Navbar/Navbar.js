import "./Navbar.scss";
import Button from "./../Button/Button";
import Logo from "../../assets/icons/dumbbell.svg";
import { motion } from "framer-motion";
import { navAnim } from "../../utils/animations";
import { scrollToTop } from "../../utils/scrollToTop";
import { useState, useEffect } from "react";

const Navbar = ({ toggleModal }) => {
  const [changeStyle, setChangeStyle] = useState(false);

  useEffect(() => {
    const changeStyleHandler = () => {
      setChangeStyle(window.pageYOffset > 100);
    };

    window.addEventListener("scroll", changeStyleHandler);
    return () => window.removeEventListener("scroll", changeStyleHandler);
  }, []);

  return (
    <motion.nav
      initial="initial"
      animate="animate"
      variants={navAnim}
      transition={{ duration: 0.5 }}
      className={`navbar ${changeStyle ? "navbar--scroll" : ""}`}
    >
      <div className="navbar--container">
        <div
          className={`navbar--logo ${
            changeStyle ? "navbar--logo--scroll" : ""
          }`}
          onClick={scrollToTop}
        >
          <img
            src={Logo}
            alt="Logo"
            className={`navbar--img ${
              changeStyle ? "navbar--img--scroll" : ""
            }`}
          />
          <span className="navbar--logo-bold">
            NE<span className="navbar--logo-blue">X</span>T
          </span>
          <span className="navbar--logo--fitness-app">&nbsp;FITNESS APP</span>
        </div>
        <div className="navbar--links">
          <ul className="navbar--links--container">
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
          </ul>
          <Button onClick={toggleModal} text="SIGNUP" type="small" />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
