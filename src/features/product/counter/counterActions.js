import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "./counterConstants";

export function increment(data) {
  return{
    type: INCREMENT_COUNTER,
    payload: data
  }
}

export function decrement(data) {
  return{
    type: DECREMENT_COUNTER,
    payload: data
  }
}