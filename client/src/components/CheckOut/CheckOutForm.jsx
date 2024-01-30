import { shippingDetailsFields } from "utils/constants";
import { camelize } from "utils/functions/camelize";
import { changeShippingDetails } from "utils/functions/changeShippingDetails";
import { handleChange } from "utils/functions/handleChange";

const CheckOutForm = ({ user, order, setOrder }) => {
  const handleChangeShippingDetails = (e) => {
    changeShippingDetails(e, order, setOrder);
  };

  const emailInput = !user ? (
    <input
      aria-label="User Email"
      name="userEmail"
      onChange={(e) => handleChange(e, setOrder)}
      placeholder="Email"
    />
  ) : null;

  return (
    <form className="border-2 rounded-lg border-darkMain mt-12 p-5 flex flex-col justify-between [&_input]:p-2 [&_input]:border-2 [&_input]:rounded-md [&_div]:gap-3 space-y-3">
      {emailInput}
      <div className="grid grid-cols-2">
        {shippingDetailsFields?.map((field, index) => (
          <input
            key={index}
            aria-label={field}
            onChange={handleChangeShippingDetails}
            name={camelize(field)}
            placeholder={field}
          />
        ))}
      </div>
    </form>
  );
};

export default CheckOutForm;
