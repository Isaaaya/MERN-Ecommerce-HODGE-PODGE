import { Tiptap } from "components/TipTap/Tiptap";
import { productInputFields } from "utils/constants";
import { camelize } from "utils/functions/camelize";
import sanitizeHtml from "sanitize-html";

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
            key={field.caption}
            className="p-3 border-2 rounded-md outline-none w-[50%]"
            aria-label={field.caption}
            min={field.min}
            type="number"
            name={camelize(field.caption)}
            placeholder={field.caption}
            value={product[camelize(field.caption)]}
            onChange={(e) =>
              setProduct({ ...product, [e.target.name]: e.target.value })
            }
          />
        ))}
      </div>
      {((mode === "update" &&
        (product?.description || product?.extraDetails)) ||
        mode === "addProduct") && (
        <>
          <Tiptap
            content={product?.description}
            placeholder="Description"
            setValue={(value) =>
              setProduct((prevState) => ({
                ...prevState,
                description: sanitizeHtml(value),
              }))
            }
          />
          <Tiptap
            content={product?.extraDetails}
            placeholder="Extra details"
            setValue={(value) =>
              setProduct((prevState) => ({
                ...prevState,
                extraDetails: sanitizeHtml(value),
              }))
            }
          />
        </>
      )}
    </div>
  );
};

export default ProductsInputFields;
