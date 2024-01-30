export const camelize = (str) => {
    return str?.split(' ').map((word, index) => index === 0 ? word.toLowerCase() : word.split('')[0].toUpperCase() + word.slice(1).toLowerCase()).join('');
}