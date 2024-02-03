import { categoryTitleColors } from 'utils/constants'

export const getCategoryTitleColor = (elementIndex) => {
    const colorIndex = elementIndex % categoryTitleColors.length;
    return categoryTitleColors[colorIndex];
}