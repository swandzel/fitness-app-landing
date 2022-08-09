import "./Footer.scss";
import Logo from "../../assets/icons/dumbbell-white.svg";
import { scrollToTop } from "../../utils/scrollToTop";
import { footerLinks, footerSocials } from "../../utils/footerLinks";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer--content">
        <div className="footer--left">
          <div className="footer--logo" onClick={scrollToTop}>
            <img src={Logo} alt="Logo" />
            <span className="footer--logo-bold">NEXT</span>
            <span className="footer--logo--fitness-app">&nbsp;FITNESS APP</span>
          </div>
          <div className="footer--left--copyright">
            Copyright © 2022 NEXT Fitness PTE. Ltd.
            <br />
            All Rights Reserved
          </div>
        </div>
        <div className="footer--right">
          {footerLinks.map((footerLink) => (
            <div className="footer--right--links" key={footerLink.id}>
              <h3>{footerLink.categoryName}</h3>
              <ul>
                {footerLink.links.map((link, index) => (
                  <li key={index}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className="footer--right--links">
            <h3>{footerSocials.categoryName}</h3>
            <ul className="footer--right--socials">
              {footerSocials.links.map((link, index) => (
                <li key={index}>
                  <img src={link} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
