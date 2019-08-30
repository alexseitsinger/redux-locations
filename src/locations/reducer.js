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
  current: defaultLocation,
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
        last: action.last ? action.last : state.last,
        current: action.current ? action.current : state.current,
        history: action.last ? [
          ...state.history,
          action.last,
        ] : state.history,
      }
    }
  }
}
