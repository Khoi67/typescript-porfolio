import React, { useState } from "react";
import { Button, Modal } from "antd";
import { IoLogoReact } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";

const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const dataProjects = [
    {
      image: <IoLogoReact size={50} color={"#2bebfd"}/>,
      title: "Website Clone Tiki",
      shortDescription:
        "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
      detail: {
        description: "",
        technology: "",
        member: "",
        role: "",
        demo: "",
        github: "",
      },
    },
    {
      image: <IoLogoReact size={50} color={"#2bebfd"}/>,
      title: "Website Clone Tiki",
      shortDescription:
        "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
      detail: {
        description: "",
        technology: "",
        member: "",
        role: "",
        demo: "",
        github: "",
      },
    },
    {
      image: <IoLogoReact size={50} color={"#2bebfd"}/>,
      title: "Website Clone Tiki",
      shortDescription:
        "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
      detail: {
        description: "",
        technology: "",
        member: "",
        role: "",
        demo: "",
        github: "",
      },
    },
  ];
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        maskClosable={false}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <div className="arlo_tm_section" id="project">
        <div className="arlo_tm_services_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>Amazing Projects</h3>
              <span>My latest projects</span>
            </div>
            <div className="list_wrap">
              <ul>
                {dataProjects.map((item, index) => {
                  return (
                    <li>
                      <div className="inner">
                        <div className="icon">
                          {item.image}
                        </div>
                        <div className="title_service">
                          <h3>{item.title}</h3>
                        </div>
                        <div className="text">
                          <p>
                            {item.shortDescription}
                          </p>
                        </div>
                        <div className="view_detail" style={{ padding: "5px 0"}}>
                          <span style={{ cursor: "pointer"}}>
                            <BsArrowRight />
                            &nbsp; 
                            Xem chi tiết
                          </span>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Project;
