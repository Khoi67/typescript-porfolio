import desktopLogo from "@/assets/img/logo/desktop-logo.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const LeftPart = () => {
  return (
    <>
      <div className="arlo_tm_leftpart_wrap">
        <div className="leftpart_inner">
          <div className="logo_wrap">
            <a href="#">
              <img src={desktopLogo} alt="desktop-logo" />
            </a>
          </div>
          <div className="menu_list_wrap">
            <ul className="anchor_nav">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#project">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="leftpart_bottom">
            <div className="social_wrap">
              <ul>
                <li>
                  <a href="https://www.facebook.com/khoi.donguyen.792" target="_blank">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/nguy%C3%AAn-kh%C3%B4i-26032320b/" target="_blank">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Khoi67" target="_blank">
                  <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LeftPart;
