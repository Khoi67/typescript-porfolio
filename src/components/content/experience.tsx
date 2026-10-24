import { portfolioData } from "@/data/portfolioData";
import { BsCalendarEvent, BsCheck2Circle } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";

const Experience = () => {
  const { experiences } = portfolioData;

  return (
    <div
      className="arlo_tm_section relative"
      id="experience"
      style={{ paddingTop: 80 }}
    >
      <div className="arlo_tm_services_wrap" style={{ marginBottom: 40 }}>
        <div className="container">
          <div className="arlo_tm_title_holder">
            <h3>Work Experience</h3>
            <span>My professional testing journey</span>
          </div>

          {/* Wrapper có clear: both để tránh lỗi float của template Arlo */}
          <div
            style={{
              width: "100%",
              clear: "both",
              float: "left",
              boxSizing: "border-box",
              paddingTop: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "28px",
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              {experiences.map((exp) => (
                <div
                  key={`exp-${exp.id}`}
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderLeft: "5px solid #e3872d",
                    borderRadius: "10px",
                    padding: "26px 30px",
                    boxShadow: "0 8px 24px rgba(10, 4, 37, 0.05)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    boxSizing: "border-box",
                    width: "100%",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 14px 30px rgba(10, 4, 37, 0.09)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(10, 4, 37, 0.05)";
                  }}
                >
                  {/* Card Header */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: "12px",
                      paddingBottom: "16px",
                      borderBottom: "1px solid #f1f5f9",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <div
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "8px",
                          background: "rgba(227, 135, 45, 0.12)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <MdWorkOutline size={22} color="#e3872d" />
                      </div>
                      <div>
                        <h4
                          style={{
                            fontSize: "20px",
                            fontWeight: 700,
                            color: "#0a0425",
                            margin: 0,
                            lineHeight: "1.3",
                          }}
                        >
                          {exp.role}{" "}
                          <span
                            style={{
                              color: "#e3872d",
                              fontWeight: 600,
                              fontSize: "18px",
                            }}
                          >
                            @ {exp.company}
                          </span>
                        </h4>
                      </div>
                    </div>

                    {/* Period Badge */}
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        background: "#0a0425",
                        color: "#e3872d",
                        padding: "6px 14px",
                        borderRadius: "20px",
                        fontSize: "13px",
                        fontWeight: 600,
                        letterSpacing: "0.3px",
                      }}
                    >
                      <BsCalendarEvent size={12} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Responsibilities list */}
                  <div style={{ marginTop: "16px" }}>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      {exp.responsibilities.map((resp, respIdx) => (
                        <li
                          key={`resp-${exp.id}-${respIdx}`}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "10px",
                            fontSize: "14.5px",
                            color: "#475569",
                            lineHeight: "1.65",
                          }}
                        >
                          <BsCheck2Circle
                            size={16}
                            color="#e3872d"
                            style={{ flexShrink: 0, marginTop: "4px" }}
                          />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack tags */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "8px",
                        marginTop: "18px",
                        paddingTop: "14px",
                        borderTop: "1px dashed #e2e8f0",
                      }}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={`tech-${exp.id}-${techIdx}`}
                          style={{
                            background: "#f8fafc",
                            border: "1px solid #e2e8f0",
                            color: "#0f172a",
                            fontSize: "12px",
                            fontWeight: 600,
                            padding: "4px 10px",
                            borderRadius: "6px",
                          }}
                        >
                          #{tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
