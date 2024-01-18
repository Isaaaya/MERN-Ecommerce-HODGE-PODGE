import React from "react";
import { TwitterPicker, HuePicker } from "react-color";
import { twitterPickerColors } from "utils/constants";

const ColorPickers = ({ color, setColor }) => {
  return (
    <>
      <TwitterPicker
        styles={{ marginRight: 0 }}
        colors={twitterPickerColors}
        width={250}
        onChange={setColor}
      />
      <HuePicker color={color} onChange={setColor} />
    </>
  );
};

export default ColorPickers;
