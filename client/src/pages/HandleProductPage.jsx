import { useParams } from "react-router-dom";
import { useGetHandleProductMode } from "hooks/product/useGetHandleProductMode";

import { ProductForm } from "components/Product/index";
import { Container } from "components/Wrappers";

const HandleProductPage = () => {
  const { mode } = useGetHandleProductMode();
  const { productId } = useParams();

  return (
    <section className="flex flex-col items-center gap-10 py-10 bg-gray-100/[0.4]">
      <Container extraStyles="space-y-12">
        <h2 className="z-50 px-4 mx-auto text-3xl font-semibold uppercase w-fit">
          {mode === "update" ? "Update Product" : "Add Product"}
        </h2>
        <ProductForm mode={mode} productId={mode === "update" && productId} />
      </Container>
    </section>
  );
};

export default HandleProductPage;
