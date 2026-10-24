import { useState } from "react";
import { SiApachehadoop } from "react-icons/si";
import { portfolioData } from "@/data/portfolioData";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { navigation } = portfolioData;
  const sectionIds = navigation.map((item) => item.id);
  const [activeSection, setActiveSection] = useScrollSpy(sectionIds, 200);

  const style = {
    overflow: "hidden",
    display: isOpen ? "block" : "none",
    transition: "2s",
  };

  const handleClickTab = (
    tab: string,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    setActiveSection(tab);
    setIsOpen(false);
    const section = document.querySelector(`#${tab}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        window.history.replaceState(null, "", `#${tab}`);
      }, 500);
    }
  };


  return (
    <>
      <div className="arlo_tm_mobile_header_wrap">
        <div className="main_wrap">
          <div className="logo">
            <a href="#home">
              <SiApachehadoop
                style={{ width: "40px", height: "40px", color: "white" }}
              />
            </a>
          </div>
          <div className="arlo_tm_trigger">
            <div
              className={
                isOpen
                  ? "hamburger hamburger--collapse-r is-active"
                  : "hamburger hamburger--collapse-r"
              }
            >
              <div className="hamburger-box">
                <div
                  className="hamburger-inner"
                  onClick={() => {
                    setIsOpen((prev) => !prev);
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="arlo_tm_mobile_menu_wrap" style={style}>
          <div className="mob_menu">
            <ul className="anchor_nav">
              {navigation.map((navItem) => (
                <li key={`mobile-nav-${navItem.id}`}>
                  <a
                    href={`#${navItem.id}`}
                    className={activeSection === navItem.id ? "active" : ""}
                    onClick={(event) => handleClickTab(navItem.id, event)}
                  >
                    {navItem.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};


export default MobileMenu;
