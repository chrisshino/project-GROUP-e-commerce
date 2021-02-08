const initialState = {
  hamburgerStatus: 'closed'
}

export default function landingPageReducer(state=initialState, action) {
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
