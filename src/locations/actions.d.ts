import { Location as HistoryLocation } from "history";
import { UPDATE } from "./constants";
export interface UpdateLocationsAction {
    type: typeof UPDATE;
    last: HistoryLocation;
    current: HistoryLocation;
}
export declare const updateLocations: (last: HistoryLocation<import("history").History.PoorMansUnknown>, current: HistoryLocation<import("history").History.PoorMansUnknown>) => UpdateLocationsAction;
