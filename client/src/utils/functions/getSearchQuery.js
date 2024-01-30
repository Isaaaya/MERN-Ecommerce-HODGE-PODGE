
export const getSearchQuery = ({ filters, exeptions = [] }) => {
    let searchQuery = '';

    for (const [key, value] of Object.entries({ ...filters })) {
        if (value) {
            if ((exeptions?.includes(key))) searchQuery += value;
            else searchQuery += (`${key}=${value}&`);
        }
    }

    return { searchQuery }
};
