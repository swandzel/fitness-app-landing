import "./ImprovingHealth.scss";
import ImprovingHealthCard from "../ImprovingHealthCard/ImprovingHealthCard";
import IconWorkouts from "../../assets/icons/card-dumbbell.svg";
import IconTrainers from "../../assets/icons/card-trainers.svg";
import IconMeditation from "../../assets/icons/card-meditation.svg";
import BestWorkoutsPic from "../../assets/images/card-best-workouts.jpg";
import BestTrainersPic from "../../assets/images/card-best-trainers.jpg";
import BestMeditationPic from "../../assets/images/card-best-meditation.jpg";
import { motion } from "framer-motion";
import { h2Animation, cardContainer, cardItem } from "../../utils/animations";

const ImprovingHealth = () => {
  return (
    <div className="improving-health" id="learn-more">
      <div className="block" />
      <motion.h2
        variants={h2Animation}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
      >
        Improving Health & Fitness with NEXT
      </motion.h2>
      <p>
        Join 10+ million members on the top digital fitness platform and stay
        toned, lose weight, get strong, reduce stress, and reach your goals.
      </p>
      <motion.div
        variants={cardContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="improving-health--cards"
      >
        <motion.div
          variants={cardItem}
          className="improving-health--cards--item"
        >
          <ImprovingHealthCard
            title="BEST WORKOUTS"
            subtitle="Train your mind and body with personalized fitness plans."
            icon={IconWorkouts}
            pic={BestWorkoutsPic}
          />
        </motion.div>
        <motion.div
          variants={cardItem}
          className="improving-health--cards--item"
        >
          <ImprovingHealthCard
            title="BEST TRAINERS"
            subtitle="Work out with celebrities and world-class trainers."
            icon={IconTrainers}
            pic={BestTrainersPic}
          />
        </motion.div>
        <motion.div
          variants={cardItem}
          className="improving-health--cards--item"
        >
          <ImprovingHealthCard
            title="BEST MEDITATION"
            subtitle="Reduce stress and be more mindful with soothing video meditations."
            icon={IconMeditation}
            pic={BestMeditationPic}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ImprovingHealth;
