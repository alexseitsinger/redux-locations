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
