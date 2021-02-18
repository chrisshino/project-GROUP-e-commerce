const initialState = {
    totalCost: 0,
};

export default function totalReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_TOTAL": {
            return {
                ...state,
                totalCost: action.total
            };
        }
        default:
            return state;
    }
}

export const getStoreState = (state) => {
    return state;
};