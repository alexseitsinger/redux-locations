import { Location as HistoryLocation } from "history";
import { UpdateLocationsAction } from "src/locations/actions";
export declare const defaultLocation: HistoryLocation;
export interface ReducerState {
    history: string[];
    last: HistoryLocation;
    current: HistoryLocation;
}
export declare const locationsReducer: (state: ReducerState | undefined, action: UpdateLocationsAction) => ReducerState;
