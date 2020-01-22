import { Dispatch } from "redux";
export interface DispatchProps {
    setName: (n: string) => void;
}
declare const _default: (dispatch: Dispatch<import("redux").AnyAction>) => DispatchProps;
export default _default;
