import "./ConnectingWith.scss";
import Button from "../Button/Button";
import ConnectingImg from "../../assets/images/connecting.jpg";
import { motion } from "framer-motion";
import { h2Animation, picAnim } from "../../utils/animations";

const ConnectingWith = () => {
  return (
    <div className="connecting-with">
      <div className="connecting-with--text">
        <motion.h2
          variants={h2Animation}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
        >
          Connecting with like-minded people
        </motion.h2>
        <p>
          The NEXT forum is a place where you can connect with women who are
          focused on their health and fitness.
        </p>
        <p>
          To share your experiences and aspirations. To support and motivate
          each other. To embrace you journey and shape your best life.
        </p>
        <Button text="Go to forum" />
      </div>
      <motion.img
        initial="initial"
        variants={picAnim}
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
        src={ConnectingImg}
        alt=""
        className="connecting-with--photo"
      />
    </div>
  );
};

export default ConnectingWith;