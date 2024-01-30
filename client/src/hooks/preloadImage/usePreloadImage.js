import { useEffect, useState } from 'react';


export const usePreloadImage = (selectedImage) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    useEffect(() => {
        const image = new Image();
        image.src = selectedImage;

        image.onload = () => {
            setIsImageLoaded(true);
        };

        image.onerror = () => {
            setIsImageLoaded(true);
        };

        return () => {
            image.onload = null;
            image.onerror = null;
        };
    }, []);

    return { isImageLoaded }
}
