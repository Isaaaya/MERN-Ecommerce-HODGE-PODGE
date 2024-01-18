export const getDeletionWarning = (instanceType) => {
    switch (instanceType) {
        case 'products': return 'It will cause the deletion of this product in all groups and in all users` carts.';
        case 'productCollections': return 'It will cause the deletion of all products of this collection as well.'
        case 'categories': return 'It will cause the deletion of all products of this category as well.'
        case 'subcategories': return 'It will cause the deletion of all products of this subcategory as well.'
        default: return null;
    };
}