import { Link } from "react-router-dom";

const Logo = ({ theme }) => {
  const textColor = theme === "dark" ? "text-white" : "text-[#1f2242]";
  return (
    <Link
      aria-label="Logo / Go to Main Page on Click"
      to="/"
      className="md:ml-52"
    >
      <p
        aria-label="Logo / Go to Main Page on Click"
        className={
          "text-2xl md:text-3xl font-semibold flex items-center gap-1 uppercase [&_span]:text-[#7b0b45] [&_span]:text-5xl " +
          textColor
        }
      >
        <span>·</span> Hodge <span>·</span> Podge
        <span>·</span>
      </p>
    </Link>
  );
};

export default Logo;
