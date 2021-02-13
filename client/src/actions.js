// Home of all our actions that we will dispatch to our reducers

export const toggleHamburger = () => ({
    type: "TOGGLE_HAMBURGER",
});

export const closeHamburger = () => ({
    type: "CLOSE_HAMBURGER",
});

export const addToCart = (item) => ({
    type: "ADD_TO_CART",
    item,
});
