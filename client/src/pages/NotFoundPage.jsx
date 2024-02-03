import { Button } from "../components/common/index";

const NotFoundPage = () => {
  return (
    <section className="flex flex-col h-screen gap-3 text-center">
      <h1 className="pt-20 text-4xl font-bold">
        Oops, it seems like you got lost...
      </h1>
      <p>
        There page you are looking for is currently or permanently unavailable.
      </p>
      <Button
        caption="Back to the Home Page"
        extraStyles="w-fit mx-auto p-2 mt-7"
        theme="basicDark"
      />
    </section>
  );
};

export default NotFoundPage;
