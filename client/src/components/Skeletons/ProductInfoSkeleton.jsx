const ProductInfoSkeleton = () => {
  return (
    <div className="space-y-6 w-[60%] [&_div]:rounded-md [&_div_div]:bg-gray-200">
      <div className="space-y-4">
        <div className="h-5 w-[30%]" />
        <div className="h-10 w-[80%]" />
        <div className="h-6 w-[40%]" />
      </div>
      <div className="space-y-5">
        <div className="h-9 w-[50%]" />
        <div className="h-7 w-[45%]" />
      </div>
      <div className="space-y-3">
        {[...Array(5)].fill().map((_, index) => (
          <div key={index} className="h-5 w-[100%] last:w-[80%]" />
        ))}
      </div>
      <p className="text-xl">Extra details</p>
      <div className="space-y-3">
        {[...Array(4)].fill().map((_, index) => (
          <div key={index} className="h-5 w-[100%] last:w-[90%]" />
        ))}
      </div>
    </div>
  );
};

export default ProductInfoSkeleton;
