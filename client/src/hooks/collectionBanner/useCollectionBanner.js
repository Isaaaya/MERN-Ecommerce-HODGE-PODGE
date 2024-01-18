import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getInstanceByIdAPI } from "api/instance";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCollectionBannerAPI, updateCollectionBannerAPI, deleteCollectionBannerAPI } from "api/productCollection";


export const useCollectionBanner = ({ productCollectionId }) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const [banner, setBanner] = useState({
        imageUrl: "",
        caption: "",
        captionColor: "#aabbcc",
        content: "",
    });
    const [mode, setMode] = useState("add");

    const { data: collection } = useQuery({
        queryKey: ["collection", productCollectionId],
        queryFn: () => getInstanceByIdAPI({ instanceType: "productCollections", instanceId: productCollectionId }),
        enabled: !!productCollectionId
    });

    useEffect(() => {
        if (collection?.banner?.caption) {
            setBanner(collection?.banner);
            setMode("update");
        }
    }, [collection]);

    const setBannerImage = (value) => {
        setBanner((prevState) => ({
            ...prevState,
            imageUrl: value,
        }));
    };

    const { mutate: createBanner, isPending: isCreateBannerPending } = useMutation({
        mutationFn: () => createCollectionBannerAPI({ productCollectionId, banner }),
        onSuccess: () => navigate("/admin/productCollections"),
    });

    const { mutate: updateBanner, isPending: isUpdateBannerPending } = useMutation({
        mutationFn: () => updateCollectionBannerAPI({ productCollectionId, banner }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["collection"] });
            navigate("/admin/productCollections");
        },
    });


    const { mutate: deleteBanner, isPending: isDeleteBannerPending } = useMutation({
        mutationFn: () => deleteCollectionBannerAPI({ productCollectionId }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["collection"] });
            navigate("/admin/productCollections");
        },
    });


    return { banner, setBanner, mode, setBannerImage, createBanner, isCreateBannerPending, deleteBanner, isDeleteBannerPending, updateBanner, isUpdateBannerPending };
}