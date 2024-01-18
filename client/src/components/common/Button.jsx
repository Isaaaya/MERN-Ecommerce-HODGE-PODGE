import React from "react";
import { Spinner } from "components/Icons";

const Button = ({
  theme,
  caption,
  extraStyles,
  onClick,
  disabled,
  spinner,
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
      aria-label={caption}
      onClick={onClick}
      className={
        extraStyles +
        ` rounded-md flex justify-center items-center text-lg ${bg}`
      }
      type="button"
    >
      {spinner ? <Spinner /> : caption}
    </button>
  );
};

export default Button;
