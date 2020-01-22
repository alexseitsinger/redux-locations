import { AnyAction, Dispatch } from "redux";
export declare const createLocationsMiddleware: (actionType?: string) => () => (next: Dispatch<AnyAction>) => (action: AnyAction) => AnyAction;
