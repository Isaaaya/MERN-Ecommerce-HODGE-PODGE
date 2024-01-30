
export const handleKeyDown = (e, { selectedKey, callback }) => {
    if (e.key === selectedKey) callback();
}
