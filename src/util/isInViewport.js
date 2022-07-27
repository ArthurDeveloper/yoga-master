export default function isInViewport({ element, offset = 0 }) {
    const top = element.getBoundingClientRect().top;
    if (top - offset <= window.innerHeight) {
        return true;
    }

    return false;
}
