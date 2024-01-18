import { useNavigate } from "react-router-dom";
import { useHandleProduct } from "hooks/product/useHandleProduct";
import { useCreateInstance } from "hooks/instance/useCreateInstance";
import { useUpdateInstance } from "hooks/instance/useUpdateInstance";

import {
  ProductInputFields,
  GroupPickerManager,
} from "components/Product/index";
import { ImagesManager } from "components/Image/index";
import { CreateInstanceButton } from "components/Instance/index";

const ProductForm = ({ mode, productId }) => {
  const { product, setProduct } = useHandleProduct({
    productId,
    mode,
  });
  const navigate = useNavigate();

  const { createInstance, isCreateInstancePending } = useCreateInstance({
    instanceType: "products",
    data: product,
  });
  const { updateInstance, isUpdateInstancePending } = useUpdateInstance({
    instanceType: "products",
    data: product,
    instanceId: productId,
  });

  return (
    <form className="border-2 rounded-lg w-[85%] mx-auto flex flex-col py-10 bg-white">
      <ImagesManager images={product.images} setValue={setProduct} />
      <ProductInputFields
        mode={mode}
        product={product}
        setProduct={setProduct}
      />
      <GroupPickerManager product={product} setProduct={setProduct} />
      <CreateInstanceButton
        disabled={isCreateInstancePending || isUpdateInstancePending}
        spinner={isCreateInstancePending || isUpdateInstancePending}
        handleClick={() => {
          mode === "update" ? updateInstance() : createInstance();
          navigate("/admin/products");
        }}
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
