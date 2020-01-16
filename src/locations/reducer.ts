import { Location } from "history"

import { UpdateLocationsAction } from "src/locations/actions"

import { UPDATE } from "./constants"

export const defaultLocation: Location = {
  pathname: "/",
  state: null,
  key: "",
  hash: "",
  search: "",
}

export interface ReducerState {
  history: (string | Location)[];
  last: Location;
  current: Location;
}

const initialState: ReducerState = {
  history: [],
  last: defaultLocation,
  current: defaultLocation,
}

type Actions = UpdateLocationsAction

export const locationsReducer = (
  state = initialState,
  action: Actions
): ReducerState => {
  switch (action.type) {
    default: {
      return state
    }
    case UPDATE: {
      return {
        last: action.last ? action.last : state.last,
        current: action.current ? action.current : state.current,
        history: action.last ? [...state.history, action.last] : state.history,
      }
    }
  }
}
