import { useContext } from 'react';
import { LocalCartContext } from 'context/LocalCartContext';
import { useGetUser } from 'hooks/user/useGetUser';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { removeManyFromCartAPI } from 'api/cart';

export const useRemoveManyFromCart = ({ product, productQuantityInCart }) => {
    const { user } = useGetUser();
    const { removeManyFromLocalCart } = useContext(LocalCartContext);

    const queryClient = useQueryClient();
    const { mutate: removeManyFromCart, isPending: isRemoveManyPending } = useMutation({
        mutationFn: () => removeManyFromCartAPI({ productId: product?._id, productQuantityInCart }),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] }),
    });

    const removeMany = user?.email ? removeManyFromCart : removeManyFromLocalCart.bind(null, product);


    return { removeMany, isRemoveManyPending };
}


