import { Cloudinary } from '@cloudinary/url-gen';
import { fill } from "@cloudinary/url-gen/actions/resize";
import { getImagePublicId } from './getImagePublicId';

const cld = new Cloudinary({
    cloud: {
        cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME
    },
    url: {
        secure: true
    }
});


export const optimizeImage = (imageURL, width, height, quality) => {
    return cld.image(`HODGE-PODGE/${getImagePublicId(imageURL)}`).resize(fill().height(height).width(width)).quality(quality || 'auto').format('auto').toURL();
};