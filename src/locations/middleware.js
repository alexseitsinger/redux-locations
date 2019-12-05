import { updateLocations } from "./actions"

const LOCATION_CHANGE = "@@router/LOCATION_CHANGE"
let lastLocation

export const createLocationsMiddleware = (actionType = LOCATION_CHANGE) => store => next => action => {
  if (!( action.type )) {
    return next(action)
  }

  if (action.type === actionType) {
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

