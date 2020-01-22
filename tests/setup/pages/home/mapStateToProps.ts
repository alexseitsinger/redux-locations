import { ReducerState } from "../../store"

export interface StateProps {
  name: string;
}

export default (state: ReducerState): StateProps => ({
  name: state.home.name,
})
