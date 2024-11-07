import desktopLogo from "@/assets/img/logo/desktop-logo.png";
import { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const LeftPart = () => {
  const [activeTab, setActiveTab] = useState<string>("home");
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const tab = hash.replace("#", "");
      setActiveTab(tab);
      const section = document.querySelector(`${hash}`);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);
  const handleClickTab = (
    tab: string,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    setActiveTab(tab);
    const section = document.querySelector(`#${tab}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        window.location.hash = tab;
      }, 1000);
    }
  };
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
                <a
                  href="#home"
                  className={activeTab === "home" ? "active" : ""}
                  onClick={(
                    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => handleClickTab("home", event)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={activeTab === "about" ? "active" : ""}
                  onClick={(
                    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => handleClickTab("about", event)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={activeTab === "skills" ? "active" : ""}
                  onClick={(
                    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => handleClickTab("skills", event)}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#project"
                  className={activeTab === "project" ? "active" : ""}
                  onClick={(
                    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => handleClickTab("project", event)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={activeTab === "contact" ? "active" : ""}
                  onClick={(
                    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => handleClickTab("contact", event)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="leftpart_bottom">
            <div className="social_wrap">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/khoi.donguyen.792"
                    target="_blank"
                  >
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/nguy%C3%AAn-kh%C3%B4i-26032320b/"
                    target="_blank"
                  >
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
