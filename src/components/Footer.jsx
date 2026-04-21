import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="flex flex-wrap gap-4 items-center justify-evenly bg-[#2D2D2D] py-20 px-4 z-1">
      <div className="logo-and-icons">
        <img
          src="/img/KOEBblue.png"
          alt="logo image"
          className="max-w-20 cursor-pointer"
        />
        <div className="flex justify-between my-4">
          <div className="bg-[#99D2DF] p-1 rounded-full">
            <FaFacebookF
              size={25}
              color="#2D2D2D"
              className="cursor-pointer"
            />
          </div>
          <div className="bg-[#99D2DF] p-1 rounded-full">
            <FaInstagram
              size={25}
              color="#2D2D2D"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="text-[#E4DFD3]">
        <h3>info</h3>
        <p>about us</p>
        <p>events</p>
      </div>
      <div className="text-[#E4DFD3]">
        <h3>help</h3>
        <p>terms and conditions</p>
        <p>privacy policy</p>
      </div>
      <div className="text-[#E4DFD3]">
        <h3>contact</h3>
        <div className="flex items-center gap-2 cursor-pointer">
          <FiPhone />
          <p>+45 88 66 44 22</p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <FiMail className="" />
          <p>koeb@email.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
