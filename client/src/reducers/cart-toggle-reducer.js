const initialState = {
  cartStatus: false,
};

export default function cartToggle(state = initialState, action) {
  switch (action.type) {
      case "TOGGLE_CART": {
          return {
              ...state,
              cartStatus: !state.cartStatus,
          };
      }
      default: {
          return state;
      }
  }
}

export const getCartStoreState = (state) => {
  return state;
};
