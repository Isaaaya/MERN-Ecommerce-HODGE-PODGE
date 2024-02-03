const Banner = () => {
  const blurBallStyling = "absolute z-0 w-60 h-60 rounded-full blur-2xl";
  return (
    <div className="relative pt-12 overflow-hidden md:py-20 h-[500px]">
      <div
        className={blurBallStyling + " bg-[#f6acb8] left-1/3 animate-pink"}
      />
      <div
        className={
          blurBallStyling + " bg-yellow-300/[0.7] right-1/2 animate-yellow"
        }
      />
      <div
        className={blurBallStyling + " bg-sky-300/[0.7] animate-blue right-1/2"}
      />
      <div className="relative z-10 h-fit">
        <h1 className="font-serif text-6xl text-center uppercase w-[90%] mx-auto md:top-10 left-0 right-0 leading-normal z-10 absolute text-gray-700 h-fit">
          Find here what you've been looking for
        </h1>
      </div>
    </div>
  );
};

export default Banner;
