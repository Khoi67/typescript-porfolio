import React, { ReactNode } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTrello, FaWpforms } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import { RiMovieFill } from "react-icons/ri";
import { IoLogoReact } from "react-icons/io5";
import { IconType } from "@/types/portfolio";

interface IconRendererProps {
  icon?: IconType | ReactNode;
  size?: number;
  color?: string;
  className?: string;
}

export const IconRenderer: React.FC<IconRendererProps> = ({
  icon,
  size = 20,
  color,
  className,
}) => {
  if (!icon) return null;

  // Nếu đã truyền trực tiếp ReactNode (JSX element)
  if (React.isValidElement(icon)) {
    return icon;
  }

  const iconProps = { size, color, className };

  switch (icon) {
    case "facebook":
      return <FaFacebook {...iconProps} />;
    case "linkedin":
      return <FaLinkedin {...iconProps} />;
    case "github":
      return <FaGithub {...iconProps} />;
    case "trello":
      return <FaTrello {...iconProps} />;
    case "form":
      return <FaWpforms {...iconProps} />;
    case "list":
      return <CiViewList {...iconProps} />;
    case "movie":
      return <RiMovieFill {...iconProps} />;
    case "react":
      return <IoLogoReact {...iconProps} />;
    default:
      return null;
  }
};
