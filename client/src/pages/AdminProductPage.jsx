import { useGetHandleProductMode } from "hooks/product/useGetHandleProductMode";

import { ProductForm } from "Components/Product";
import { Container } from "layout";
import { useScrollToTop } from "hooks/scrollToTop/useScrollToTop";

const AdminProductPage = () => {
  useScrollToTop();
  const { mode } = useGetHandleProductMode();

  return (
    <section className="flex flex-col items-center gap-10 py-10 bg-gray-100/[0.4]">
      <Container extraStyles="space-y-12">
        <h2 className="z-50 px-4 mx-auto text-3xl font-semibold uppercase w-fit">
          {mode === "update" ? "Update" : "Add"} Product
        </h2>
        <ProductForm mode={mode} />
      </Container>
    </section>
  );
};

export default AdminProductPage;
