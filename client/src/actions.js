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

export const toggleCart = () => ({
    type: 'TOGGLE_CART'
})

export const removeFromCart = (item) => ({
    type: 'REMOVE_FROM_CART',
    item
})

export const subtractFromCart = (item) => ({
    type: 'SUBTRACT_FROM_CART',
    item
})

