const RunningLine = ({ isAnimated }) => {
  return (
    <div className="inline-flex w-full overflow-hidden text-white/[0.8] bg-black h-7">
      <div
        className={`flex items-center w-full ${
          isAnimated && "animate-infinite-scroll"
        }`}
      >
        {isAnimated && (
          <p className="w-full uppercase whitespace-nowrap">
            Discounts -50% till the end of the winter, when buying 2 and more
            items!
          </p>
        )}
      </div>
    </div>
  );
};

export default RunningLine;
