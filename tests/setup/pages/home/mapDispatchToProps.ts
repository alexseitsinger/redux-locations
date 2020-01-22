import { Dispatch } from "redux"

import { setName } from "./actions"

export interface DispatchProps {
  setName: (n: string) => void;
}

export default (dispatch: Dispatch): DispatchProps => ({
  setName: (n: string): void => {
    dispatch(setName(n))
  },
})
