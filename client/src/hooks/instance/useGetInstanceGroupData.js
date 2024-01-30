import { useParams } from "react-router-dom";

export const useGetInstanceGroupData = () => {
    const { instanceType } = useParams();
    switch (instanceType) {
        case 'productCollections': return {
            advancedUpdate: false,
            actionOptions: [
                "startUpdatingModeButton",
                "handleBannerLink",
                "deleteInstanceButton",
            ],
            fields: ["_id", "title"],
            fieldsTitles: ["ID", "Title"],
            hasCreateInstanceForm: true,
            searchBy: "Title or ID",
            parentGroup: null,
        };
        case 'categories': return {
            advancedUpdate: false,
            actionOptions: ["startUpdatingModeButton", "deleteInstanceButton"],
            fields: ["_id", "title", "productCollection.title"],
            fieldsTitles: ["ID", "Title", "Collection"],
            hasCreateInstanceForm: true,
            searchBy: "Title or ID",
            parentGroup: 'productCollections',
        };
        case 'subcategories': return {
            advancedUpdate: false,
            actionOptions: ["startUpdatingModeButton", "deleteInstanceButton"],
            fields: ["_id", "title", "productCollection.title", "category.title"],
            fieldsTitles: ["ID", "Title", "Collection", "Category"],
            hasCreateInstanceForm: true,
            searchBy: "Title or ID",
            parentGroup: 'categories',
        };
        case 'products': return {
            advancedUpdate: true,
            actionOptions: ["startUpdatingModeButton", "deleteInstanceButton"],
            fields: [
                "_id",
                "title",
                "productCollection.title",
                "category.title",
                "subcategory.title",
            ],
            fieldsTitles: ["ID", "Title", "Collection", "Category", "Subcategory"],
            hasCreateInstanceForm: false,
            searchBy: "Title or ID",
            parentGroup: null,
        };
        case 'orders': return {
            advancedUpdate: false,
            actionOptions: ["viewOrderInfoButton"],
            fields: ["_id", "userEmail", "totalItems", "totalPrice"],
            fieldsTitles: ["ID", "Purchaser", "Items", "Price"],
            hasCreateInstanceForm: false,
            searchBy: "ID or Purchaser Email",
            parentGroup: null,
        }
        default: return null;
    }
}
