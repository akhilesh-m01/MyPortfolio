import { SiMongodb, SiPostgresql, SiPrisma, SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const Backend = () => {
  const backendTechnologies = [
    {
      title: "NodeJS",
      icon: <FaNodeJs className="inline mt-1" />,
      color: "bg-green-400",
    },
    {
      title: "ExpressJS",
      icon: <SiExpress className="inline mt-1" />,
      color: "bg-gray-400",
    },
    {
      title: "MongoDB",
      icon: <SiMongodb className="inline mt-1" />,
      color: "bg-green-600",
    },
    {
      title: "Postgres",
      icon: <SiPostgresql className="inline mt-1" />,
      color: "bg-blue-500",
    },
    {
      title: "Prisma",
      icon: <SiPrisma className="inline mt-1" />,
      color: "bg-gray-800",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row">
      {backendTechnologies.map((t, i) => (
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

export default Backend;
