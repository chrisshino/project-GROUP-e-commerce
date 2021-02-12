const initialState = {};

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            {
                if (!state[action.item._id]) {
                    return {
                        ...state,
                        [action.item._id]: {
                            ...action.item,
                            quantity: 1,
                            numInStock: action.item.numInStock - 1,
                        },
                    };
                } else if (state[action.item._id]) {
                    return {
                        ...state,
                        [action.item._id]: {
                            ...action.item,
                            quantity:
                                Number(state[action.item._id].quantity) + 1,
                            numInStock:
                                Number(state[action.item._id].numInStock) - 1,
                        },
                    };
                }
            }
            break;
        default:
            return state;
    }
}

export const getStoreState = (state) => {
    return state;
};
