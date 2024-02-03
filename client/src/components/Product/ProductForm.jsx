import { ImagesManager } from "Components/Image";
import { HandleInstanceButton } from "Components/Instance";
import { GroupPickerManager, ProductInputFields } from "Components/Product";
import { useProductForm } from "hooks/product/useProductForm";

const ProductForm = ({ mode }) => {
  const { handleProduct, isProductPending, productId, product, setProduct } =
    useProductForm({ mode });

  return (
    <form className="border-2 rounded-lg w-[85%] mx-auto flex flex-col py-10 bg-white">
      <ImagesManager images={product.images} setValue={setProduct} />
      <ProductInputFields
        mode={mode}
        product={product}
        setProduct={setProduct}
      />
      <GroupPickerManager product={product} setProduct={setProduct} />
      <HandleInstanceButton
        disabled={isProductPending}
        spinner={isProductPending}
        onClick={handleProduct}
        caption={mode === "update" ? "Update" : "Add"}
        extraStyles="w-[200px] h-10 mx-auto mt-8"
        instanceType="products"
        data={product}
        mode={mode}
        productId={productId}
      />
    </form>
  );
};

export default ProductForm;
