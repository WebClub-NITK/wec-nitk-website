export function getStrapiImageURL(path = '') {
    return `${process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL || '/strapi'}${path}`;
}

export function getStrapiMedia(url) {
    if (url == null) {
        return "";
    }

    // Return the full URL if the media is hosted on an external provider
    if (url.startsWith('http') || url.startsWith('//')) {
        return url;
    }

    // Otherwise prepend the URL path with the Strapi URL
    return `${getStrapiImageURL()}${url}`;
}