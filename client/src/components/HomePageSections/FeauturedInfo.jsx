import React from "react";
import ChrismasTreeImage from "assets/images/christmas-tree.webp";

const FeauturedInfo = () => {
  return (
    <section className="flex flex-col items-center gap-12 pt-10 md:gap-7 sm:flex-row">
      <div className="w-[80%] lg:w-[50%]">
        <img
          className={`object-cover object-center w-full rounded-xl h-full`}
          src={ChrismasTreeImage}
          alt="Christmas Gift Boxes"
        />
      </div>
      <div className="my-auto space-y-6 text-center sm:w-[50%] xl:w-[80%] text-gray-600 tracking-wider">
        <h2 className="text-4xl lg:text-5xl text-[#3d6e57] tracking-widest font-headerStraight">
          It's Christmas Time!
        </h2>
        <p className="text-[16px]">
          Enjoy incredible discounts on a wide range of products that will make
          your Christmas celebrations even more special. From dazzling
          decorations to thoughtful gifts,{" "}
          <span className="font-bold">HODGE PODGE</span> has something for
          everyone.
        </p>
      </div>
    </section>
  );
};

export default FeauturedInfo;
