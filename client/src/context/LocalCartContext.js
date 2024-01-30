import { createContext, useState } from "react";

export const LocalCartContext = createContext();

export function CartProvider({ children }) {
    const [localCart, setLocalCart] = useState(JSON.parse(localStorage.getItem('localCart')));

    const findInCart = (productId) => {
        for (const item of localCart?.products) {
            if (item.product._id === productId) {
                return localCart?.products?.indexOf(item);
            }
        };
        return -1;
    };

    const addToLocalCart = (product) => {
        const { _id, title, price, images, quantity } = product;
        if (localCart?.products?.length > 0) {
            let newProducts = localCart?.products;

            if (findInCart(_id) >= 0) {
                const itemIndex = findInCart(_id);
                newProducts[itemIndex].quantity++
            } else {
                newProducts.push({ product: { _id, title, price, images, quantity }, quantity: 1 })
            };

            setLocalCart({ products: newProducts });
            localStorage.setItem('localCart', JSON.stringify({ products: newProducts }));

        } else {
            setLocalCart({ products: [{ product: { _id, title, price, images, quantity }, quantity: 1 }] });
            localStorage.setItem('localCart', JSON.stringify({ products: [{ product: { _id, title, price, images, quantity }, quantity: 1 }] }));
        }

    };


    const removeOneFromLocalCart = (product) => {
        let newProducts = localCart?.products;
        const { _id } = product;

        if (findInCart(_id) >= 0) {
            if (newProducts[findInCart(_id)].quantity > 1) {
                newProducts[findInCart(_id)].quantity--;
            } else {
                newProducts = newProducts.filter((item) => item?.product._id !== _id)
            };
            setLocalCart({ products: newProducts });

            localStorage.setItem('localCart', JSON.stringify({ products: newProducts }))
        };

        return;
    };

    const removeManyFromLocalCart = (product) => {
        let newProducts = localCart?.products;
        const { _id } = product;

        if (findInCart(_id) >= 0) {
            newProducts = newProducts.filter((item) => item?.product._id !== _id)
        };
        setLocalCart({ products: newProducts });

        localStorage.setItem('localCart', JSON.stringify({ products: newProducts }))

        return;
    };

    const emptyCart = () => {
        setLocalCart(null);
        localStorage.removeItem('localCart');
    }


    const value = {
        localCart,
        setLocalCart,
        addToLocalCart,
        removeOneFromLocalCart,
        removeManyFromLocalCart,
        emptyCart,
    }

    return (
        <LocalCartContext.Provider value={value}>{children}</LocalCartContext.Provider>
    )
};