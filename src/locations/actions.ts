import { Location } from "history"

import { UPDATE } from "./constants"

export interface UpdateLocationsAction {
  type: typeof UPDATE;
  last: Location;
  current: Location;
}

export const updateLocations = (
  last: Location,
  current: Location
): UpdateLocationsAction => ({
  type: UPDATE,
  last,
  current
})
