import {
  INCREASE_COUNTER_VALUE,
  REDUCE_COUNTER_VALUE,
  RESET_COUNTER_VALUE,
} from './actions'

const initialState = {
  counterValue: 1,
}

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNTER_VALUE:
      return {
        ...state,
        counterValue: state.counterValue + 1,
      }

    case REDUCE_COUNTER_VALUE:
      if (state.counterValue === 1) {
        return state
      }

      return {
        ...state,
        counterValue: state.counterValue - 1,
      }

    case RESET_COUNTER_VALUE:
      return {
        ...state,
        counterValue: 1,
      }

    default:
      return state
  }
}
