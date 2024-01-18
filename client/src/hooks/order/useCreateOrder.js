import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createInstanceAPI } from "api/instance";
import { useGetUser } from "hooks/user/useGetUser";
import { useContext } from "react";
import { CartContext } from "context/LocalCartContext";
import { toast } from "react-toastify";

export const useCreateOrder = ({ order }) => {
    const { user } = useGetUser();
    const { emptyCart } = useContext(CartContext);
    const nagivate = useNavigate();
    const queryClient = useQueryClient();

    const orderWithAvailableProducts = { ...order, products: order?.products?.filter((item) => item?.product) };

    const { mutate: createOrder, isPending: isCreateOrderPending } = useMutation({
        mutationFn: () => createInstanceAPI({ instanceType: "orders", data: orderWithAvailableProducts }),
        onSuccess: () => {
            nagivate("/checkout/success");
            if (user?.email) queryClient.invalidateQueries({ queryKey: ["cart"] });
            else emptyCart();
        },
        onError: (error) => error.response.data.errors.map((err) => toast.error(err.msg))
    });

    return { createOrder, isCreateOrderPending };
}
