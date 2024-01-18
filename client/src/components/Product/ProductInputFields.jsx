import { Tiptap } from "Tiptap";
import { productInputFields } from "utils/constants";

const ProductsInputFields = ({ product, setProduct, mode }) => {
  return (
    <div className="flex flex-col gap-5 p-7 mx-auto w-[100%]">
      <input
        aria-label="Title"
        className="p-3 border-2 rounded-md outline-none"
        name="title"
        value={product?.title}
        type="text"
        placeholder="Title"
        onChange={(e) => setProduct({ ...product, title: e.target.value })}
      />
      <div className="flex gap-5">
        {productInputFields?.map((field) => (
          <input
            key={field.ariaLabel}
            className="p-3 border-2 rounded-md outline-none w-[50%]"
            aria-label={field.ariaLabel}
            min={field.min}
            type="number"
            name={field.name}
            placeholder={field.placeholder}
            value={product[field.name]}
            onChange={(e) =>
              setProduct({ ...product, [e.target.name]: e.target.value })
            }
          />
        ))}
      </div>
      {((mode === "update" && product?.description) ||
        (mode === "addProduct" && !product?.title)) && (
        <>
          <Tiptap
            content={product?.description}
            placeholder="Description"
            setValue={(value) =>
              setProduct((prevState) => ({
                ...prevState,
                description: value,
              }))
            }
          />
          <Tiptap
            content={product?.extraDetails}
            placeholder="Extra details"
            setValue={(value) =>
              setProduct((prevState) => ({
                ...prevState,
                extraDetails: value,
              }))
            }
          />
        </>
      )}
    </div>
  );
};

export default ProductsInputFields;
