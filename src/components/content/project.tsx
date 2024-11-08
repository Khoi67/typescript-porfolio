import { useState } from "react";
import { Modal } from "antd";
import { IoLogoReact } from "react-icons/io5";
import { BsArrowRight} from "react-icons/bs";
import { FaWpforms, FaTrello } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import { RiMovieFill } from "react-icons/ri";

interface IProject {
  image: JSX.Element;
  title: string;
  shortDescription: string;
  detail: {
    description: string;
    frontend: string;
    backend: string;
    member: number;
    role: string;
    demo: string;
    github: string;
  };
}

const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dataDetail, setDataDetail] = useState<IProject | null>(null);

  const dataProjects: IProject[] = [
    {
      image: <FaWpforms size={50} color={"#2bebfd"} />,
      title: "Student Form",
      shortDescription:
        "Basic form for students to add, delete your information and search it by name.",
      detail: {
        description:
          "(Self-learning) Basic form for students to add, delete and search by name.", 
        frontend: "HTML, CSS, Bootstrap, ReactJS (Redux)", 
        backend: "", 
        member: 1, 
        role: "Developer", 
        demo: "https://meipaly-q2eznibpy-khoi67.vercel.app/", 
        github: "https://github.com/Khoi67/react-form.git",
      },
    },
    {
      image: <CiViewList size={50} color={"#2bebfd"} />,
      title: "To-do List",
      shortDescription:
        "Website that you can add, edit, delete tasks and change the status, your theme of tasks.",
      detail: {
        description:
          "(Self-learning) Website that you can add, edit, delete tasks and change the status, your theme of tasks.",
        frontend: "HTML, CSS(JSS), Bootstrap, ReactJS",
        backend: "",
        member: 1,
        role: "Developer",
        demo: "https://to-do-list-gdywwv9t6-khoi67.vercel.app/",
        github: "https://github.com/Khoi67/ToDoList.git",
      },
    },
    {
      image: <RiMovieFill size={50} color={"#2bebfd"} />,
      title: "Movie Website",
      shortDescription:
        "The client can choose or book a film and the ADMIN can manage the film.",
      detail: {
        description:
          "The client can choose or book a film when they log in, for the ADMIN they manage, post, or check the film.",
        frontend: "HTML, CSS, Bootstrap, ReactJS",
        backend: "Available API",
        member: 2,
        role: "Developer",
        demo: "https://youtu.be/lD-jBI1cXWw?si=i9W0SqoUtFx-lZwe",
        github: "https://github.com/Khoi67/project-capstone-movie.git",
      },
    },
    {
      image: <FaTrello size={50} color={"#2bebfd"} />,
      title: "Trello Clone",
      shortDescription:
        "A basic clone website like Trello.com which is a flexible work management tool.",
      detail: {
        description:
          "(Self-learning) A basic clone website like Trello.com which is a flexible work management tool where people can plan, collaborate on projects, organize workflows, and track progress in an intuitive, efficient, and rewarding way", 
        frontend: "React (Typescript), Redux Toolkit, Ant Design", 
        backend: "Node.JS (Express), MongoDB",
        member: 1,
        role: "Developer",
        demo: "https://youtu.be/vxIHxNnksQA",
        github: "https://github.com/Khoi67/trello-web.git",
      },
    },
  ];

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setDataDetail(null);
  };
  return (
    <>
      <Modal
        title={
          dataDetail && dataDetail.title ? `Dự án ${dataDetail.title}` : ""
        }
        open={isModalOpen}
        onOk={() => handleCloseModal()}
        onCancel={() => handleCloseModal()}
        footer={null}
        maskClosable={false}
      >
        {dataDetail && (
          <ul>
            <li>Description: {dataDetail.detail.description}</li>
            <li>Frontend: {dataDetail.detail.frontend}</li>
            <li>Backend: {dataDetail.detail.backend}</li>
            <li>Member: {dataDetail.detail.member}</li>
            <li>Role: {dataDetail.detail.role}</li>
            <li>
              Demo:&nbsp;
              <a href={dataDetail.detail.demo} target="_blank">
                {dataDetail.detail.demo}
              </a>
            </li>
            <li>
              Github:&nbsp;
              <a href={dataDetail.detail.github} target="_blank">
                {dataDetail.detail.github}
              </a>
            </li>
          </ul>
        )}
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
                    <li key={`${index}-project`}>
                      <div
                        className="inner"
                        title="Xem chi tiết"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setDataDetail(item);
                          setIsModalOpen(true);
                        }}
                      >
                        <div className="icon">{item.image}</div>
                        <div className="title_service">
                          <h3>{item.title}</h3>
                        </div>
                        <div className="text">
                          <p>{item.shortDescription}</p>
                        </div>
                        <div
                          className="view_detail"
                          style={{ padding: "5px 0" }}
                        >
                          <span style={{ cursor: "pointer" }}>
                            <BsArrowRight />
                            &nbsp; Xem chi tiết
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
