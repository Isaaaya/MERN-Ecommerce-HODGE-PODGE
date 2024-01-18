export const fetchByDotOperator = (object, value) => {
    return value.split(".").reduce((acc, curr) => acc[curr], object);
};
