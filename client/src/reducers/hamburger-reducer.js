const initialState = {
  hamburgerStatus: 'closed',
  
}

export default function hamburgerReducer(state=initialState, action) {
  switch(action.type) {
    case 'TOGGLE_HAMBURGER': {
      return {
        ...state, 
        hamburgerStatus: !state.hamburgerStatus
      }
    }
    default: {
      return state;
    }
  }
}
