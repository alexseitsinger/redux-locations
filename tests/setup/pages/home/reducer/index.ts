import { AnyAction } from "redux"

import defaultState from "./defaultState.json"

export interface ReducerState {
  name: string;
}

export default (state = defaultState, action: AnyAction): ReducerState => {
  switch (action.type) {
    default: {
      return state
    }
    case "SET_NAME": {
      return {
        ...state,
        name: action.name,
      }
    }
  }
}
