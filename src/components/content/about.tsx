import logo from "@/assets/img/about/1.jpg"
import background from "@/assets/img/about/550x640.jpg"
import myCV from "@/assets/cv.pdf"
import { TypeAnimation } from "react-type-animation";
const About = () => {
  return (
    <>
      <div className="arlo_tm_section relative" id="about">
        <div className="arlo_tm_about_wrapper_all">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>About Me</h3>
              <span><i>My maxim: "It's not a lack of intelligence holding you back; it's simply a matter of your hard work."</i> </span>
            </div>
            <div className="arlo_tm_about_wrap">
              <div className="author_wrap">
                <div className="leftbox">
                  <div
                    className="about_image_wrap parallax"
                    data-relative-input="true"
                  >
                    <div className="image layer" data-depth="0.1">
                      <img src={background} alt="550x640" />
                      <div
                        className="inner"
                        data-img-url={logo}
                      ></div>
                    </div>
                    <div className="border layer" data-depth="0.2">
                      <img src={background} alt="550x640" />
                      <div className="inner"></div>
                    </div>
                  </div>
                </div>
                <div className="rightbox">
                  <div className="arlo_tm_mini_title_holder">
                    <h4>
                      I'm Khoi and{" "}
                      <TypeAnimation
                      sequence={[
                        // Same substring at the start will only be typed out once, initially
                        "Web Developer",
                        3000,
                        "IT Help Desk",
                        2000, 
                      ]}
                      wrapper="span"
                      cursor={true}
                      //   style={{ fontSize: "2em", display: "inline-block" }}
                      repeat={Infinity}
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    />
                    </h4>
                  </div>
                  <div className="definition">
                    <p>
                      Hi! My name is <strong>Do Nguyen Khoi</strong>, a passionate and dedicated Web Developer. <br /> I have a solid foundation in web development and a strong commitment to delivering high-quality work. I am eager to bring my skills to real-world projects, and I’m driven by the desire to learn, grow, and create impactful solutions. <br /> I believe in the power of collaboration and am excited to contribute my abilities to meaningful projects that achieve your goals.

                    </p>
                  </div>
                  <div className="about_short_contact_wrap">
                    <ul>
                      <li>
                        <span>
                          <label>Birthday:</label> 06.07.2001
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Gender:</label> Male
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Study:</label> Ton Duc Thang University
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Major:</label> Computer Networks and Data Communication
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Mail:</label>{" "}
                          <a href="mailto:example@gmail.com">
                            khoi672001&#64;gmail.com 
                          </a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Facebook:</label>{" "}
                          <a href="https://www.facebook.com/khoi.donguyen.792" target="_blank">Nguyên Khôi</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="buttons_wrap">
                    <ul>
                      <li>
                        <a href={myCV} download>
                          <span>Download CV</span>
                        </a>
                      </li>
                      
                    </ul>
                  </div>
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
