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
        case "CLOSE_HAMBURGER": {
            return {
                ...state,
                hamburgerStatus: false,
            }
        }
        default: {
            return state;
        }
    }
}

export const getHamburgerStoreState = (state) => {
    return state;
};
