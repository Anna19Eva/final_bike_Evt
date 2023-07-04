import React from "react";
import "./footer.css";
import { FaTelegram, FaWhatsapp, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div>
          <FaTelegram size="2rem" /> <FaWhatsapp size="2rem" />
        </div>
        <div>
          <b>Pаботу выполнила Евтушенко А.А</b>
        </div>
        <div>
          <FaPhone size="1rem" /> +7900930088
        </div>
      </div>
    </footer>
  );
};

export default Footer;
