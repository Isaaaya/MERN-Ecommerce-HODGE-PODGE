import React from "react";

const CollectionBannerSkeleton = () => {
  return (
    <article className="flex flex-col md:flex-row overflow-hidden rounded-xl h-[550px] md:h-[490px] bg-[#eeeeee] animate-pulse [&_div]:rounded-md">
      <div className="md:w-[50%] h-[45%] md:h-[100%] aspect-square bg-gray-300" />
      <div className="flex flex-col gap-5 pt-10 mx-auto md:pt-28 w-[80%] md:w-[50%]">
        <div className="h-16 bg-gray-300 w-[80%] mx-auto" />
        <div className="space-y-2">
          {[
            ...Array(3)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="w-[90%] md:w-[80%] mx-auto h-5 bg-gray-300"
                />
              )),
          ]}
        </div>
      </div>
    </article>
  );
};

export default CollectionBannerSkeleton;
