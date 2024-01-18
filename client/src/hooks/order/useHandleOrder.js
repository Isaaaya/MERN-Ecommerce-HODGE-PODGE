import { useEffect, useState } from "react";
import { getUserData } from "utils/functions/getUserData";

export const useHandleOrder = ({ userCart }) => {
    const user = getUserData();

    const [order, setOrder] = useState({
        userEmail: user?.email || "",
        products: [],
        shippingDetails: {},
    });

    useEffect(() => {
        if (userCart?.products) setOrder((prevState) => ({ ...prevState, products: userCart?.products?.map((item) => ({ product: item?.product?._id, quantity: item?.quantity })) }))
    }, [userCart?.products?.length > 0]);

    return { order, setOrder };
} 
