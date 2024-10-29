import ProgressBar from "@ramonak/react-progress-bar";

const Skill = () => {
    return (
        <>
            <div className="arlo_tm_section" id="skills">
                <div className="arlo_tm_skills_wrap">
                    <div className="container">
                        <div className="inner_wrap">
                            <div className="leftbox">
                                <div className="arlo_tm_mini_title_holder">
                                    <h4>Frontend Skills</h4>
                                </div>
                                <li>Framework/Library: Bootstrap, JQuery, React.JS, Antd, MUI</li>
                            </div>
                            <div className="rightbox">
                                <div className="progress_bar_wrap_total">
                                    <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                                        <div className="arlo_tm_progress" data-value="95" data-color="#000">
                                            <span>
                                                <span className="label">HTML/CSS/JavaScript  </span>
                                                <span className="number">95%</span>
                                            </span>
                                            <div className="arlo_tm_bar_bg">
                                                <ProgressBar
                                                    completed={95}
                                                    bgColor={"#333"}
                                                    height="8px"
                                                    isLabelVisible={false}
                                                />
                                            </div>
                                        </div>
                                        <div className="arlo_tm_progress" data-value="80" data-color="#000">
                                            <span>
                                                <span className="label">React.JS (Typescript)</span>
                                                <span className="number">80%</span>
                                            </span>
                                            <div className="arlo_tm_bar_bg">
                                                <ProgressBar
                                                    completed={80}
                                                    bgColor={"#333"}
                                                    height="8px"
                                                    isLabelVisible={false}
                                                />
                                            </div>
                                        </div>
                                        <div className="arlo_tm_progress" data-value="85" data-color="#000">
                                            <span>
                                                <span className="label">Antd, Mui</span>
                                                <span className="number">85%</span>
                                            </span>
                                            <div className="arlo_tm_bar_bg">
                                                <ProgressBar
                                                    completed={85}
                                                    bgColor={"#333"}
                                                    height="8px"
                                                    isLabelVisible={false}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="arlo_tm_skills_wrap">
                    <div className="container">
                        <div className="inner_wrap">
                            <div className="leftbox">
                                <div className="arlo_tm_mini_title_holder">
                                    <h4>Backend Skills</h4>
                                </div>
                                <li>Programming language: PHP, Javascript</li>
                                <li>Framework: Express.JS</li>
                                <li>Database: SQL(MySQL) & NoSQL(MongoDB)</li>

                            </div>
                            <div className="rightbox">
                                <div className="progress_bar_wrap_total">
                                    <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                                        <div className="arlo_tm_progress" data-value="85" data-color="#000">
                                            <span>
                                                <span className="label">Express.JS</span>
                                                <span className="number">85%</span>
                                            </span>
                                            <div className="arlo_tm_bar_bg">
                                                <ProgressBar
                                                    completed={85}
                                                    bgColor={"#333"}
                                                    height="8px"
                                                    isLabelVisible={false}
                                                />
                                            </div>
                                        </div>
                                        <div className="arlo_tm_progress" data-value="80" data-color="#000">
                                            <span>
                                                <span className="label">Database MongoDB</span>
                                                <span className="number">80%</span>
                                            </span>
                                            <div className="arlo_tm_bar_bg">
                                                <ProgressBar
                                                    completed={85}
                                                    bgColor={"#333"}
                                                    height="8px"
                                                    isLabelVisible={false}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Skill;