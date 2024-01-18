import { handleChange } from "utils/functions/handleChange";
import { handleNestedChange } from "utils/functions/handleNestedChange";

const CheckOutForm = ({ user, order, setOrder }) => {
  return (
    <form className="border-2 rounded-lg border-darkMain mt-12 p-5 flex flex-col justify-between [&_input]:p-2 [&_input]:border-2 [&_input]:rounded-md [&_div]:gap-3 space-y-3">
      {!user && (
        <input
          aria-label="User Email"
          name="userEmail"
          onChange={(e) => handleChange(e, setOrder)}
          placeholder="Email"
        />
      )}
      <div className="grid grid-cols-2">
        <input
          aria-label="First Name"
          onChange={(e) => handleNestedChange(e, order, setOrder)}
          name="firstName"
          placeholder="First Name"
        />
        <input
          aria-label="Last Name"
          onChange={(e) => handleNestedChange(e, order, setOrder)}
          name="lastName"
          placeholder="Last Name"
        />
      </div>
      <input
        aria-label="Street Address"
        onChange={(e) => handleNestedChange(e, order, setOrder)}
        name="streetAddress"
        placeholder="Street Address"
      />
      <div className="grid grid-cols-3">
        <input
          aria-label="Apt Number"
          onChange={(e) => handleNestedChange(e, order, setOrder)}
          name="aptNumber"
          placeholder="Apt Number"
        />
        <input
          aria-label="State"
          onChange={(e) => handleNestedChange(e, order, setOrder)}
          name="state"
          placeholder="State"
        />
        <input
          aria-label="Zip"
          onChange={(e) => handleNestedChange(e, order, setOrder)}
          name="zip"
          placeholder="Zip"
        />
      </div>
    </form>
  );
};

export default CheckOutForm;
