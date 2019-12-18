export const scrollUp = (id) => {
    const elem = document.getElementById(id);
    elem.scrollIntoView({block: 'start', behavior: 'smooth'});
};
