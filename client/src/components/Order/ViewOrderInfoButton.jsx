import { useRef } from "react";
import { EyeIcon } from "assets/icons";
import { useClickOutside } from "hooks/clickOutside/useClickOutside";

const ViewOrderInfoButton = ({ setShowOrderDetails }) => {
  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, () => setShowOrderDetails(false));

  return (
    <button
      ref={wrapperRef}
      onClick={() => setShowOrderDetails((prevState) => !prevState)}
    >
      <EyeIcon width="25" height="25" />
    </button>
  );
};

export default ViewOrderInfoButton;
