export const handleChange = (e, setValue) => {
    setValue((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
};