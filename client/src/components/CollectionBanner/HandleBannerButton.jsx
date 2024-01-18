import React from "react";
import { useNavigate } from "react-router-dom";
import { PencilSquareIcon } from "components/Icons/index";

const HandleBannerButton = ({ instanceId }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(`/admin/productCollections/${instanceId}/banner`)}
    >
      <PencilSquareIcon />
    </button>
  );
};

export default HandleBannerButton;
