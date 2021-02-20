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

export const closeCart = () => ({
    type: 'CLOSE_CART'
})

export const addTotal = (total) => ({
    type: 'ADD_TOTAL',
    total
})

export const addBillingDetails = (details) => ({
    type: 'ADD_BILLING_DETAILS',
    details
})

export const toggleAuthOn = () => ({
    type: 'TOGGLE_AUTH_ON'
})

export const toggleAuthOff = () => ({
    type: 'TOGGLE_AUTH_OFF'
})

export const toggleAlert = () => ({
    type: 'TOGGLE_ALERT'
})