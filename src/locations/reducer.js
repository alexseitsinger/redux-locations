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
