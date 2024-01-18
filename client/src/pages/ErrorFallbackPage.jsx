import React from "react";
import { Button } from "components/common";
import ErrorOccurredIcon from "assets/images/error-occurred.webp";

const ErrorFallbackPage = () => {
  const redirectToNewPage = () => {
    window.location.href = "http://localhost:3000/";
  };

  return (
    <section className="flex flex-col items-center justify-center h-screen gap-3 text-center">
      <img
        className="w-40 h-40"
        src={ErrorOccurredIcon}
        alt="Error Occurred Icon by by Parzival’ 1997"
      />
      <p>Some error ocurred. Please, refresh.</p>
      <Button
        caption="Refresh"
        onClick={redirectToNewPage}
        theme="basicDark"
        extraStyles="w-[140px] h-9"
      />
    </section>
  );
};

export default ErrorFallbackPage;
