import React from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "components/Wrappers";

const CompletedCheckOutPage = () => {
  const navigate = useNavigate();
  return (
    <section>
      <Container extraStyles=" md:min-h-[700px] p-20 flex flex-col gap-5 items-center">
        <h1 className="text-5xl">Congratulations!</h1>
        <p className="w-[300px] mx-auto text-center">
          Your order is successfully confirmed and will be processed soon.
          Please, check the email we sent You for more information.
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-10 py-2 text-2xl font-semibold text-white bg-green-700 rounded-md"
        >
          Back to Shop
        </button>
      </Container>
    </section>
  );
};

export default CompletedCheckOutPage;
