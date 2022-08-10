import "./VarietyWorkouts.scss";
import BigDumbbell from "../../assets/icons/big-dumbbell.svg";
import { motion } from "framer-motion";
import { h2Animation } from "../../utils/animations";

const VarietyWorkouts = () => {
  return (
    <div className="variety-workouts">
      <div className="block" />
      <motion.img
        variants={h2Animation}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        src={BigDumbbell}
        alt="Dumbbell"
        className="variety-workouts--dumbbell"
      />
      <motion.h2
        variants={h2Animation}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
      >
        Explore all the variety of workouts!
      </motion.h2>
      <p>
        NE<span className="navbar--logo-blue">X</span>T encourages you to get
        stronger week by week! You progress gradually, increasing the intensity
        in each workout. When you’re ready to take on fresh challenges and step
        up your workouts, NE<span className="navbar--logo-blue">X</span>T has
        you covered.
      </p>
    </div>
  );
};

export default VarietyWorkouts;
