import { Link } from "react-router-dom";
import ErrorOccurredIcon from "assets/images/error-occurred.webp";

const ErrorFallbackPage = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen gap-3 text-center">
      <img
        className="w-40 h-40"
        src={ErrorOccurredIcon}
        alt="Error Occurred Icon by by Parzival’ 1997"
      />
      <p>Some error ocurred. Please, refresh.</p>
      <Link to="/" className="w-[140px] h-9">
        Go to the Home Page
      </Link>
    </section>
  );
};

export default ErrorFallbackPage;
