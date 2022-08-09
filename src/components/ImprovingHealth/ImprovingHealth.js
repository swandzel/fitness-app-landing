import "./ImprovingHealth.scss";
import ImprovingHealthCard from "../ImprovingHealthCard/ImprovingHealthCard";
import { motion } from "framer-motion";
import { h2Animation, cardContainer, cardItem } from "../../utils/animations";
import { improvingHealthCards } from "../../utils/improvingHealthCards";

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
        {improvingHealthCards.map((improvingHealthCard) => (
          <motion.div
            variants={cardItem}
            className="improving-health--cards--item"
            key={improvingHealthCard.id}
          >
            <ImprovingHealthCard
              title={improvingHealthCard.title}
              subtitle={improvingHealthCard.subtitle}
              icon={improvingHealthCard.icon}
              pic={improvingHealthCard.pic}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ImprovingHealth;
