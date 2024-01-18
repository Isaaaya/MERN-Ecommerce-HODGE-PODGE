import { useQuery } from "@tanstack/react-query";
import { getCollectionCategoriesAPI } from "api/productCollection";

export const useGetCollectionCategories = ({ selectedCollectionId, isUpdatingMode, field }) => {
    const { data: collectionCategories } = useQuery({
        queryKey: ["collectionCategories", selectedCollectionId],
        queryFn: () => getCollectionCategoriesAPI({ productCollectionId: selectedCollectionId }),
        enabled:
            isUpdatingMode &&
            selectedCollectionId?.length > 0 &&
            field === "Category" &&
            selectedCollectionId !== 'Select'
    });

    return { collectionCategories }
}
