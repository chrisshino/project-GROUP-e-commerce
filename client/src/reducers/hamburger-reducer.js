const initialState = {
    hamburgerStatus: false,
};

export default function hamburgerReducer(state = initialState, action) {
    switch (action.type) {
        case "TOGGLE_HAMBURGER": {
            return {
                ...state,
                hamburgerStatus: !state.hamburgerStatus,
            };
        }
        default: {
            return state;
        }
    }
}

export const getStoreState = (state) => {
    return state;
};
