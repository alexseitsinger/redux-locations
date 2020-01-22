import { AnyAction } from "redux";
export interface ReducerState {
    name: string;
}
declare const _default: (state: {
    "name": string;
} | undefined, action: AnyAction) => ReducerState;
export default _default;
