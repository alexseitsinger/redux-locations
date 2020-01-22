import { Location as HistoryLocation } from "history"

import { UPDATE } from "./constants"

export interface UpdateLocationsAction {
  type: typeof UPDATE;
  last: HistoryLocation;
  current: HistoryLocation;
}

export const updateLocations = (
  last: HistoryLocation,
  current: HistoryLocation
): UpdateLocationsAction => ({
  type: UPDATE,
  last,
  current,
})
