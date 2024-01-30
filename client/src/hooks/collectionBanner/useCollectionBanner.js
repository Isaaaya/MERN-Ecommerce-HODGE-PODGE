import { useState, useEffect } from "react";
import { useGetInstanceById } from "hooks/instance/useGetInstanceById";
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

    const { groupTypeInstance: collection } = useGetInstanceById({
        instanceType: "productCollections",
        instanceId: productCollectionId,
    })

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
        mutationFn: () => updateCollectionBannerAPI({ productCollectionId, updatedBanner: banner }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["productCollections"] });
            navigate("/admin/productCollections");
        },
    });


    const { mutate: deleteBanner, isPending: isDeleteBannerPending } = useMutation({
        mutationFn: () => deleteCollectionBannerAPI({ productCollectionId }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["productCollections"] });
            navigate("/admin/productCollections");
        },
    });


    return { banner, setBanner, mode, setBannerImage, createBanner, isCreateBannerPending, deleteBanner, isDeleteBannerPending, updateBanner, isUpdateBannerPending };
}