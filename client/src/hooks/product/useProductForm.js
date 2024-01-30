import { useParams, useNavigate } from "react-router-dom";
import { useHandleProduct } from "hooks/product/useHandleProduct";
import { useCreateInstance } from "hooks/instance/useCreateInstance";
import { useUpdateInstance } from "hooks/instance/useUpdateInstance";

export const useProductForm = ({ mode }) => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const { product, setProduct } = useHandleProduct({
        productId,
    });

    const { createInstance, isCreateInstancePending } = useCreateInstance({
        instanceType: "products",
        data: product,
        afterCall: () => navigate("/admin/products"),
    });

    const { updateInstance, isUpdateInstancePending } = useUpdateInstance({
        instanceType: "products",
        data: product,
        instanceId: productId,
        afterCall: () => navigate("/admin/products"),
    });

    const handleProduct = () => {
        if (mode === "update") updateInstance();
        else createInstance();
    };

    return { handleProduct, isProductPending: isCreateInstancePending || isUpdateInstancePending, productId, product, setProduct }
}
