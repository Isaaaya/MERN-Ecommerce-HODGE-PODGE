import { useRef, useEffect } from "react";
import { EyeIcon } from "components/Icons/index";

const ViewOrderInfoButton = ({ setShowOrderDetails }) => {
  const wrapperRef = useRef(null);
  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setShowOrderDetails(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  return (
    <button
      ref={wrapperRef}
      onClick={() => setShowOrderDetails((prevState) => !prevState)}
    >
      <EyeIcon />
    </button>
  );
};

export default ViewOrderInfoButton;
