import { UPDATE } from "./types"

const defaultLocation = {
  pathname: "/",
  state: null,
  key: "",
  hash: "",
  search: null,
}

const initialState = {
  history: [],
  last: defaultLocation,
  next: defaultLocation,
}

/**
 * @name locationsReducer
 *
 * @description
 * The reducer to manage redux state changes for locations.
 *
 * @param {object|array|string} [state={history: [], last: {}, next:{}}]
 * The default state to use for the reducer.
 * @param {object}
 * The action object dispatched.
 *
 * @returns {object}
 * The updated state.
 */
export const locationsReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state
    }
    case UPDATE: {
      return {
        next: action.next ? action.next : state.next,
        last: action.last ? action.last : state.last,
        history: action.last ? [
          ...state.history,
          action.last,
        ] : state.history,
      }
    }
  }
}
