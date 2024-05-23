import { FaReact } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaSass } from "react-icons/fa";

const Frontend = () => {
  const technologies = [
    {
      title: "HTML",
      icon: <TiHtml5 className="inline" />,
      color: "bg-red-400",
    },
    {
      title: "CSS",
      icon: <FaCss3Alt className="inline" />,
      color: "bg-blue-400",
    },
    {
      title: "Javascript",
      icon: <IoLogoJavascript className="inline" />,
      color: "bg-yellow-400",
    },
    {
      title: "React",
      icon: <FaReact className="inline" />,
      color: "bg-blue-400",
    },
    {
      title: "Next.js",
      icon: <RiNextjsLine className="inline" />,
      color: "bg-gray-950",
    },
    {
      title: "Tailwind CSS",
      icon: <RiTailwindCssFill className="inline" />,
      color: "bg-blue-500",
    },
    {
      title: "SASS",
      icon: <FaSass className="inline" />,
      color: "bg-pink-400",
    },
  ];
  return (
    <div>
      {technologies.map((t, i) => (
        <p
          key={i}
          className={`inline ${t.color} pr-2 pl-2 pb-1 rounded-xl m-1 hover:cursor`}
        >
          {t.icon}
          {t.title}
        </p>
      ))}
    </div>
  );
};

export default Frontend;