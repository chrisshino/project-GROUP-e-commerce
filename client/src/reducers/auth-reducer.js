const initialState = {
    authState: false,
    authAlert: false 
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case "TOGGLE_AUTH_ON": {
            return {
                ...state,
                authState: true,
            };
        }
        case "TOGGLE_AUTH_OFF": {
          return {
              ...state,
              authState: false,
          };
      }
      case "TOGGLE_ALERT": {
        return {
            ...state,
            authAlert: true,
        };
    }
        default:
            return state;
    }
}
