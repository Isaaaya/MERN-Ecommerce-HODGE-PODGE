import { Spinner } from "assets/icons";

const Button = ({
  theme,
  caption,
  extraStyles,
  onClick,
  disabled,
  spinner,
  ariaLabel,
}) => {
  const bg =
    theme === "danger"
      ? " bg-red-700 text-white"
      : theme === "basicLight"
      ? "bg-[#7b0b45] text-white"
      : theme === "basicDark"
      ? " bg-darkMain text-white"
      : " ";
  return (
    <button
      disabled={disabled}
      aria-label={ariaLabel || caption}
      onClick={onClick}
      className={
        extraStyles +
        ` rounded-md flex justify-center items-center text-lg ${bg}`
      }
      type="button"
    >
      {spinner ? <Spinner width="25" height="25" /> : caption}
    </button>
  );
};

export default Button;
