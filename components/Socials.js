import Link from "next/link";
import { SiLeetcode, SiLinkedin, SiGithub, SiInstagram } from "react-icons/si";

const Socials = () => {
  const iconSize = 30;

  return (
    <div className="flex items-center gap-x-8 text-lg">
      <Link
        href={"https://leetcode.com/ritikchhimwal/"}
        size={iconSize}
        className="hover:text-accent transition-all duration-300"
      >
        <SiLeetcode />
      </Link>

      <Link
        href={"https://www.linkedin.com/in/ritik-chhimwal7/"}
        size={iconSize}
        className="hover:text-accent transition-all duration-300"
      >
        <SiLinkedin />
      </Link>

      <Link
        href={"https://github.com/ritikchhimwal"}
        size={iconSize}
        className="hover:text-accent transition-all duration-300"
      >
        <SiGithub />
      </Link>

      <Link
        href={"https://www.instagram.com/ritikchhimwal/"}
        size={iconSize}
        className="hover:text-accent transition-all duration-300"
      >
        <SiInstagram />
      </Link>
    </div>
  );
};

export default Socials;
