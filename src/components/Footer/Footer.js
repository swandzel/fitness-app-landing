import "./Footer.scss";
import Logo from "../../assets/icons/dumbbell-white.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer--content">
        <div className="footer--left">
          <div className="footer--logo">
            <img src={Logo} alt="Logo" />
            <span className="footer--logo-bold">NEXT</span>
            &nbsp;FITNESS APP
          </div>
          <div className="footer--left--copyright">
            Copyright © 2022 NEXT Fitness PTE. Ltd.
            <br />
            All Rights Reserved
          </div>
        </div>
        <div className="footer--right">
          <div className="footer--right--links">
            <h3>Resources</h3>
            <ul>
              <li>Help Center</li>
              <li>Terms of Service</li>
              <li>Privacy</li>
              <li>Wall of Love</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer--right--links">
            <h3>Download</h3>
            <ul>
              <li>App Store</li>
              <li>Google Play</li>
            </ul>
          </div>
          <div className="footer--right--links">
            <h3>Follow Us</h3>
            <ul>
              <li>FB</li>
              <li>IG</li>
              <li>PINT</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
