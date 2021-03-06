import { AnyAction, Dispatch } from "redux"

import { updateLocations } from "./actions"
import { LOCATION_CHANGE } from "./constants"
import { defaultLocation } from "./reducer"

let lastLocation = defaultLocation

export const createLocationsMiddleware = (
  actionType = LOCATION_CHANGE
) => () => (next: Dispatch) => (action: AnyAction): ReturnType<typeof next> => {
  if (action.type !== undefined && action.type === actionType) {
    const currentLocation = action.payload.location
    // If we use store.dispatch instead, the router will spam location changes
    // (4x). So, to make sure it only happens the once, we need to silently run
    // next just to update the state, but not dispatch location changes in
    // succession.
    next(updateLocations(lastLocation, currentLocation))
    lastLocation = currentLocation
  }
  return next(action)
}
