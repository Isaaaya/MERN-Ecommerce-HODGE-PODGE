import React from "react";
import { Link } from "react-router-dom";
import { Button } from "components/common/index";

const CheckOutButton = ({ setIsCartOpen }) => {
  return (
    <Link to="/checkout">
      <Button
        onClick={() => setIsCartOpen((prevState) => !prevState)}
        caption="Check Out"
        theme="basicDark"
        extraStyles="w-full h-12"
      />
    </Link>
  );
};

export default CheckOutButton;
