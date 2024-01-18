import React, { useState } from "react";

const TitleCell = ({ content, setUpdatedInstance }) => {
  const [updatedCell, setUpdatedCell] = useState(content);
  return (
    <input
      aria-label="Cell Content"
      value={updatedCell}
      onChange={(e) => {
        setUpdatedCell(e.target.value);
        setUpdatedInstance((prevState) => ({
          ...prevState,
          title: e.target.value,
        }));
      }}
      placeholder="content"
    />
  );
};

export default TitleCell;
