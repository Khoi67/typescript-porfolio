import { TypeAnimation } from "react-type-animation";

const HomeCV = () => {
  const handleScrollToAbout = () => {
    const section = document.querySelector("#about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
      <div className="arlo_tm_section" id="home">
        <div className="arlo_tm_hero_header_wrap">
          <div className="arlo_tm_universal_box_wrap">
            <div className="bg_wrap">
              <div
                className="overlay_image hero jarallax"
                data-speed="0.1"
              ></div>
              <div className="overlay_color hero"></div>
            </div>
            <div className="content hero">
              <div className="inner_content">
                <div className="image_wrap">
                  <img src="img/hero/img.jpg" alt="hero" />
                </div>
                <div className="name_holder">
                  <h3>
                    Do Nguyen<span> Khoi</span>
                  </h3>
                </div>
                <div className="text_typing">
                  <p>
                    I'm a <span className="arlo_tm_animation_text_word"></span>
                    <TypeAnimation
                      sequence={["Web Developer", 3000, "IT Help Desk", 2000]}
                      wrapper="span"
                      cursor={true}
                      //   style={{ fontSize: "2em", display: "inline-block" }}
                      repeat={Infinity}
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="arlo_tm_arrow_wrap bounce anchor">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToAbout();
                }}
              >
                <i className="xcon-angle-double-down"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeCV;
