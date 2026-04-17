import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <section className="grid grid-cols-1">
      <div className="logo-and-icons">
        <img src="/img/KOEBblue.png" alt="" />
        <div className="flex justify-between">
          <FaFacebookF></FaFacebookF>
          <FaInstagram></FaInstagram>
        </div>
      </div>
      <div className="">
        <h3>info</h3>
        <p>about us</p>
        <p>events</p>
      </div>
      <div>
        <h3>help</h3>
        <p>terms and conditions</p>
        <p>privacy policy</p>
      </div>
      <div>
        <h3>contact</h3>
        <div className="flex">
          <FiPhone></FiPhone>
          <p>+45 88 66 44 22</p>
        </div>
        <div className="flex">
          <FiMail></FiMail>
          <p>koeb@email.com</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
