import { useEffect, useState, useContext } from "react";
import { useGetUser } from "hooks/user/useGetUser";
import { CartContext } from 'context/LocalCartContext'
import { getInstanceByIdAPI } from "api/instance";

export const useGetLocalCart = () => {
    const { user, isUserLoading } = useGetUser();
    const { localCart } = useContext(CartContext);
    const [fullLocalCart, setFullLocalCart] = useState(null);

    const getResults = async () => {
        const promises = localCart?.products?.map(async element => ({ product: await getInstanceByIdAPI({ instanceType: 'products', instanceId: element?.productId }), quantity: element?.quantity }));

        const results = await Promise.all(promises);
        setFullLocalCart({ products: results });
    };

    useEffect(() => {
        if ((!user?.email && !isUserLoading) && localCart?.products) getResults();
        if (!localCart?.products) setFullLocalCart(null);
    }, [user?.email, localCart])


    return { fullLocalCart };
}
