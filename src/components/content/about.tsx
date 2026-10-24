import { useRef, useEffect } from "react";
import Parallax from "parallax-js";
import { TypeAnimation } from "react-type-animation";
import { portfolioData } from "@/data/portfolioData";

const About = () => {
  const sceneEl = useRef<HTMLDivElement | null>(null);
  const { personalInfo } = portfolioData;

  useEffect(() => {
    if (sceneEl && sceneEl.current) {
      const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        hoverOnly: true,
      });
      parallaxInstance.enable();
      return () => parallaxInstance.disable();
    }
  }, []);

  return (
    <>
      <div
        className="arlo_tm_section relative"
        id="about"
        style={{ paddingTop: 80 }}
      >
        <div className="arlo_tm_about_wrapper_all">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>About Me</h3>
              {personalInfo.quote && (
                <span>
                  <i>{personalInfo.quote}</i>
                </span>
              )}
            </div>
            <div className="arlo_tm_about_wrap">
              <div className="author_wrap">
                <div className="leftbox">
                  <div
                    ref={sceneEl}
                    className="about_image_wrap parallax"
                    data-relative-input="true"
                  >
                    <div className="image layer" data-depth="0.2">
                      <img
                        src={personalInfo.backgroundUrl}
                        alt="Profile Background"
                      />
                      <div
                        className="inner"
                        data-img-url={personalInfo.avatarUrl}
                        style={{
                          backgroundImage: `url(${personalInfo.avatarUrl})`,
                        }}
                      ></div>
                    </div>
                    <div className="border layer" data-depth="0.6">
                      <img
                        src={personalInfo.backgroundUrl}
                        alt="Profile Frame"
                      />
                      <div className="inner"></div>
                    </div>
                  </div>
                </div>
                <div className="rightbox">
                  <div className="arlo_tm_mini_title_holder">
                    <h4>
                      I'm {personalInfo.firstName} and{" "}
                      <TypeAnimation
                        sequence={personalInfo.typingSequence}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      />
                    </h4>
                  </div>
                  <div className="definition">
                    {personalInfo.bio.map((paragraph, idx) => (
                      <p key={`bio-p-${idx}`} style={{ marginBottom: "10px" }}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="about_short_contact_wrap">
                    <ul>
                      {personalInfo.attributes.map((attr, idx) => (
                        <li key={`attr-${idx}`}>
                          <span>
                            <label>{attr.label}:</label>{" "}
                            {attr.isLink ? (
                              <a
                                href={attr.href || attr.value}
                                target={
                                  attr.href?.startsWith("mailto")
                                    ? "_self"
                                    : "_blank"
                                }
                                rel="noreferrer"
                              >
                                {attr.value}
                              </a>
                            ) : (
                              attr.value
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {personalInfo.cvFileUrl && (
                    <div className="buttons_wrap">
                      <ul>
                        <li>
                          <a href={personalInfo.cvFileUrl} download>
                            <span>Download CV</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
