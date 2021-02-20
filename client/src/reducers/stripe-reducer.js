const initialState = {};

export default function stripeReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_BILLING_DETAILS": {
            return {
                ...state,
                details: action.details,
            };
        }
        default:
            return state;
    }
}
