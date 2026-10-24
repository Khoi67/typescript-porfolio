import ProgressBar from "@ramonak/react-progress-bar";
import { portfolioData } from "@/data/portfolioData";

const Skill = () => {
  const { skillCategories } = portfolioData;

  return (
    <>
      <div className="arlo_tm_section" id="skills" style={{ paddingTop: 80 }}>
        <div className="container">
          <div className="arlo_tm_title_holder">
            <h3>Skills</h3>
            <span>My technical and testing abilities</span>
          </div>
        </div>

        <div
          className="arlo_tm_skills_wrap"
          style={{
            paddingTop: 10,
            paddingBottom: 60,
            marginBottom: 0,
            clear: "both",
            float: "left",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <div className="container">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "40px",
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              {skillCategories.map((category, catIndex) => (
                <div
                  className="inner_wrap"
                  key={`skill-cat-${catIndex}`}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    width: "100%",
                    boxSizing: "border-box",
                    paddingBottom:
                      catIndex < skillCategories.length - 1 ? "30px" : "0",
                    borderBottom:
                      catIndex < skillCategories.length - 1
                        ? "1px dashed #e2e8f0"
                        : "none",
                  }}
                >
                  <div className="leftbox">
                    <div className="arlo_tm_mini_title_holder">
                      <h4>{category.title}</h4>
                    </div>
                    <ul style={{ paddingLeft: "20px", margin: "10px 0" }}>
                      {category.descriptionPoints.map((desc, descIdx) => (
                        <li
                          key={`desc-${catIndex}-${descIdx}`}
                          style={{ marginBottom: "6px", lineHeight: "1.6" }}
                        >
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rightbox">
                    <div className="progress_bar_wrap_total">
                      <div
                        className="arlo_tm_progress_wrap"
                        data-size="small"
                        data-round="c"
                        data-strip="off"
                      >
                        {category.skills.map((skill, skillIdx) => (
                          <div
                            className="arlo_tm_progress"
                            data-value={skill.percentage}
                            data-color={skill.color || "#000"}
                            key={`skill-bar-${catIndex}-${skillIdx}`}
                          >
                            <span>
                              <span className="label">{skill.name}</span>
                              <span className="number">
                                {skill.percentage}%
                              </span>
                            </span>
                            <div className="arlo_tm_bar_bg">
                              <ProgressBar
                                completed={skill.percentage}
                                bgColor={skill.color || "#E3872D"}
                                height="8px"
                                isLabelVisible={false}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;