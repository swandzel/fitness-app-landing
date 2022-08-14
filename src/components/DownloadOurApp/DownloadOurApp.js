import "./DownloadOurApp.scss";
import OurAppPic from "../../assets/images/our-app.webp";
import AppStoreIcon from "../../assets/images/app-store-icon.webp";
import { motion } from "framer-motion";
import { picAnim } from "../../utils/animations";

const DownloadOurApp = () => {
  return (
    <div className="download-our-app" id="download">
      <div className="download-our-app--content">
        <div className="download-our-app--image">
          <motion.img
            initial="initial"
            variants={picAnim}
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            src={OurAppPic}
            alt="Download Our App"
          />
        </div>
        <div className="download-our-app--text">
          <h2>DOWNLOAD OUR APP</h2>
          <p>
            We’re one of the top fitness apps for iPhone, Android, or web users.
            Our workout plans are designed to help you reach your fitness goals
            faster and simpler.
          </p>
          <p>
            But don’t just take our word for it. Check out the amazing
            transformations and testimonials.
          </p>
          <div className="download-our-app--icons">
            <img src={AppStoreIcon} alt="Download on App Store" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadOurApp;
