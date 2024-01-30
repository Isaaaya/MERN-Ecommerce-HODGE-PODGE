export const changeShippingDetails = (e, order, setOrder) => {
    setOrder({
        ...order,
        shippingDetails: {
            ...order?.shippingDetails,
            [e.target.name]: e.target.value,
        },
    });
};
