import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [localCart, setLocalCart] = useState(JSON.parse(localStorage.getItem('localCart')));

    const findInCart = (productId) => {
        for (const item of localCart?.products) {
            if (item.productId === productId) {
                return localCart?.products.indexOf(item);
            }
        };
        return -1;
    };

    const addToLocalCart = (productId) => {
        if (localCart?.products?.length > 0) {
            let newProducts = localCart?.products;

            if (findInCart(productId) >= 0) {
                const itemIndex = findInCart(productId);
                newProducts[itemIndex].quantity++
            } else {
                newProducts.push({ productId, quantity: 1 })
            };

            setLocalCart((prevState) => ({ ...prevState, products: newProducts }))

            localStorage.setItem('localCart', JSON.stringify({ products: localCart?.products }));

        } else {
            setLocalCart({ products: [{ productId, quantity: 1 }] });
            localStorage.setItem('localCart', JSON.stringify({ products: [{ productId, quantity: 1 }] }));
        }

    };


    const removeOneFromLocalCart = (productId) => {

        let newProducts = localCart?.products;

        if (findInCart(productId) >= 0) {
            if (newProducts[findInCart(productId)].quantity > 1) {
                newProducts[findInCart(productId)].quantity--;
            } else {
                newProducts = newProducts.filter((product) => product?.productId !== productId)
            };
            setLocalCart({ products: newProducts });
            console.log({ products: newProducts })

            localStorage.setItem('localCart', JSON.stringify({ products: newProducts }))
        };

        return;
    };

    const removeManyFromLocalCart = (productId) => {
        console.log('here')
        let newProducts = localCart?.products;

        if (findInCart(productId) >= 0) {
            newProducts = newProducts.filter((product) => product?.productId !== productId)
        };
        setLocalCart({ products: newProducts });
        console.log({ products: newProducts })

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
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
};