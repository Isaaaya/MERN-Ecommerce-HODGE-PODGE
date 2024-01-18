import { useContext } from 'react';
import { CartContext } from 'context/LocalCartContext';
import { useGetUser } from 'hooks/user/useGetUser';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { removeManyFromCartAPI } from 'api/cart';


export const useRemoveManyFromCart = ({ productId, productQuantityInCart }) => {
    const { user } = useGetUser();
    const { removeManyFromLocalCart } = useContext(CartContext);

    const queryClient = useQueryClient();
    const { mutate: removeManyFromCart, isPending: isRemoveManyPending } = useMutation({
        mutationFn: () => removeManyFromCartAPI({ productId, productQuantityInCart }),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] }),
    });

    const removeMany = user?.email ? removeManyFromCart : removeManyFromLocalCart.bind(null, productId);


    return { removeMany, isRemoveManyPending };
}


