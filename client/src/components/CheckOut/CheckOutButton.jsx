import { Button } from "../common/index";
import { Link } from "react-router-dom";

const CheckOutButton = ({ closeCart }) => {
  return (
    <Link to="/checkout">
      <Button
        onClick={closeCart}
        caption="Check Out"
        theme="basicDark"
        extraStyles="w-full h-12"
      />
    </Link>
  );
};

export default CheckOutButton;
