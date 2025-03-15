import { FaGlobeAsia, FaHome, FaLaptop, FaUserSecret } from "react-icons/fa";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { Link } from "react-router-dom";

const nav_items = [
  {
    text: "Home",
    icon: <FaHome />,
    link: "civil",
  },
  {
    text: "Our Services",
    icon: <GrServices />,
    link: "services",
  },
  {
    text: "Security",
    icon: <FaUserSecret />,
    link: "security",
  },
  {
    text: "Contact Us",
    icon: <MdOutlineConnectWithoutContact />,
    link: "contact-us",
  },
  {
    text: "Company Info",
    icon: <FaLaptop />,
    link: "company",
  },
];

export function Navbar() {
  return (
    <div className="w-full h-[3.5rem] bg-white/60 backdrop-blur-2xl backdrop-brightness-150 backdrop-saturate-150 fixed top-0 inset-x-0 z-10 font-semibold flex justify-between items-center px-1">
      <img
        src="/img.png"
        alt="Civil Engineering M Logo"
        className="w-12 h-12 rounded-full"
      />

      <div className="flex space-x-6">
        {nav_items.map((m, idx) => (
          <Link
            key={idx}
            to={m.link}
            className="flex flex-col items-center hover:text-blue-500 transition-colors duration-150"
          >
            {m.icon}
            <p>{m.text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
