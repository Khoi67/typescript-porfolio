import { useState } from "react";
import { Modal } from "antd";
import { BsArrowRight } from "react-icons/bs";
import { portfolioData } from "@/data/portfolioData";
import { ProjectItem } from "@/types/portfolio";
import { IconRenderer } from "@/components/common/IconRenderer";

const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dataDetail, setDataDetail] = useState<ProjectItem | null>(null);

  const { projects } = portfolioData;

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setDataDetail(null);
  };

  return (
    <>
      <Modal
        title={dataDetail?.title ? `Dự án: ${dataDetail.title}` : "Chi tiết dự án"}
        open={isModalOpen}
        onOk={handleCloseModal}
        onCancel={handleCloseModal}
        footer={null}
        maskClosable={true}
        destroyOnClose={true}
      >
        {dataDetail && (
          <div style={{ lineHeight: "1.8", paddingTop: "8px" }}>
            <p>
              <strong>Mô tả:</strong> {dataDetail.detail.description}
            </p>
            {dataDetail.detail.frontend && (
              <p>
                <strong>Frontend:</strong> {dataDetail.detail.frontend}
              </p>
            )}
            {dataDetail.detail.backend && (
              <p>
                <strong>Backend:</strong> {dataDetail.detail.backend}
              </p>
            )}
            <p>
              <strong>Số thành viên:</strong> {dataDetail.detail.member}
            </p>
            <p>
              <strong>Vai trò:</strong> {dataDetail.detail.role}
            </p>
            {dataDetail.detail.demo && (
              <p>
                <strong>Demo:</strong>{" "}
                <a
                  href={dataDetail.detail.demo}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#E3872D", textDecoration: "underline" }}
                >
                  {dataDetail.detail.demo}
                </a>
              </p>
            )}
            {dataDetail.detail.github && (
              <p>
                <strong>Github:</strong>{" "}
                <a
                  href={dataDetail.detail.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#E3872D", textDecoration: "underline" }}
                >
                  {dataDetail.detail.github}
                </a>
              </p>
            )}
            {dataDetail.detail.tags && dataDetail.detail.tags.length > 0 && (
              <p style={{ marginTop: "10px" }}>
                <strong>Tags:</strong>{" "}
                {dataDetail.detail.tags.map((tag, idx) => (
                  <span
                    key={`tag-${idx}`}
                    style={{
                      display: "inline-block",
                      background: "#222",
                      color: "#fff",
                      padding: "2px 8px",
                      borderRadius: "4px",
                      fontSize: "12px",
                      marginRight: "6px",
                      marginBottom: "4px",
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </p>
            )}
          </div>
        )}
      </Modal>

      <div className="arlo_tm_section" id="project" style={{ paddingTop: 80 }}>
        <div className="arlo_tm_services_wrap" style={{ marginBottom: 40 }}>
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>Amazing Projects</h3>
              <span>My latest projects</span>
            </div>
            <div className="list_wrap">
              <ul>
                {projects.map((item) => {
                  return (
                    <li key={`project-${item.id}`}>
                      <div
                        className="inner"
                        title="Xem chi tiết"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setDataDetail(item);
                          setIsModalOpen(true);
                        }}
                      >
                        <div className="icon">
                          <IconRenderer
                            icon={item.icon}
                            size={50}
                            color={item.iconColor || "#E3872D"}
                          />
                        </div>
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
