import { Location as HistoryLocation } from "history"

import { UpdateLocationsAction } from "src/locations/actions"

import { UPDATE } from "./constants"

export const defaultLocation: HistoryLocation = {
  pathname: "/",
  state: null,
  key: "",
  hash: "",
  search: "",
}

export interface ReducerState {
  history: string[];
  last: HistoryLocation;
  current: HistoryLocation;
}

const initialState: ReducerState = {
  history: [],
  last: defaultLocation,
  current: defaultLocation,
}

export const locationsReducer = (
  state = initialState,
  action: UpdateLocationsAction
): ReducerState => {
  switch (action.type) {
    default: {
      return state
    }
    case UPDATE: {
      return {
        last: action.last !== undefined ? action.last : state.last,
        current: action.current !== undefined ? action.current : state.current,
        history:
          action.last !== undefined
            ? [...state.history, action.last.pathname]
            : state.history,
      }
    }
  }
}
