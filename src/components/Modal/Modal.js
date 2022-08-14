import "./Modal.scss";
import SadFaceIcon from "../../assets/icons/sad-face.svg";
import CloseIcon from "../../assets/icons/close.svg";
import Button from "../Button/Button";
import Logo from "../../assets/icons/dumbbell.svg";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cardItem } from "../../utils/animations";

const Modal = ({ toggleModal, setShowModal }) => {
  const closeModal = (e) => {
    if (e.target.id === "modal" || e.key === "Escape") {
      setShowModal(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", closeModal);
    return () => window.removeEventListener("keydown", closeModal);
  });

  return (
    <AnimatePresence>
      <motion.div
        variants={cardItem}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="modal"
        onClick={closeModal}
        id="modal"
      >
        <div className="modal--container">
          <div className="modal--navbar">
            <div className="navbar--logo" style={{ cursor: "auto" }}>
              <img
                src={Logo}
                alt="Logo"
                className="navbar--img
            "
              />
              <span className="navbar--logo-bold">
                NE
                <span className="navbar--logo-blue">X</span>T
              </span>
              <span className="navbar--logo--fitness-app">
                &nbsp;FITNESS APP
              </span>
            </div>
            <motion.img
              whileTap={{ scale: 0.9 }}
              src={CloseIcon}
              alt="Close"
              onClick={toggleModal}
              className="modal--close"
            />
          </div>
          <img src={SadFaceIcon} alt="Error" className="modal--error" />
          <div className="modal--text">Oh no, it doesn't work</div>
          <Button text="Close" onClick={toggleModal} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
