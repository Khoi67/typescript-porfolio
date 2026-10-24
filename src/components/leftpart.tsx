import { useState } from "react";
import { isMobile } from "react-device-detect";
import { SiApachehadoop } from "react-icons/si";
import { portfolioData } from "@/data/portfolioData";
import { IconRenderer } from "@/components/common/IconRenderer";
import { useScrollSpy } from "@/hooks/useScrollSpy";

interface IProps {
  hideLeftPart: boolean;
  setHideLeftPart: (value: boolean) => void;
}

const LeftPart = (props: IProps) => {
  const { navigation, socialLinks } = portfolioData;
  const sectionIds = navigation.map((item) => item.id);
  const [activeSection, setActiveSection] = useScrollSpy(sectionIds, 200);

  const handleClickTab = (
    tab: string,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    setActiveSection(tab);
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
      <div
        className={
          props.hideLeftPart === true
            ? "arlo_tm_leftpart_wrap opened"
            : "arlo_tm_leftpart_wrap "
        }
      >
        <div className="leftpart_inner">
          <div className="logo_wrap">
            <a href="#home">
              <SiApachehadoop
                style={{ width: "100px", height: "100px", color: "white" }}
              />
            </a>
          </div>
          <div className="menu_list_wrap">
            <ul className="anchor_nav">
              {navigation.map((navItem) => (
                <li key={`nav-${navItem.id}`}>
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
          <div className="leftpart_bottom">
            <div className="social_wrap">
              <ul>
                {socialLinks.map((item, idx) => (
                  <li key={`social-${idx}`}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      title={item.title || item.platform}
                    >
                      <IconRenderer icon={item.icon} size={18} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {!isMobile && (
            <a
              className={
                props.hideLeftPart ? "arlo_tm_resize opened" : "arlo_tm_resize"
              }
              href="#"
              onClick={(e) => {
                e.preventDefault();
                props.setHideLeftPart(!props.hideLeftPart);
              }}
              aria-label="Toggle Sidebar"
            >
              <i
                className={
                  props.hideLeftPart
                    ? "xcon-angle-left opened"
                    : "xcon-angle-left"
                }
              ></i>
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default LeftPart;
