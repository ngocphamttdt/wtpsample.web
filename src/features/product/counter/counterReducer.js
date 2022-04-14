import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "./counterConstants"

const initialState = {
  data: 0
}

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        data: state.data + action.payload
      }
    case DECREMENT_COUNTER:
      return {
        ...state,
        data: state.data - action.payload
      }
    default: return state

  }


}