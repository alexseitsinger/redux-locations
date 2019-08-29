import { updateLocations } from "./actions"

const LOCATION_CHANGE = "@@router/LOCATION_CHANGE"
let lastLocation

export const createLocationsMiddleware = (actionType = LOCATION_CHANGE) => store => next => action => {
  if (!( action.type )) {
    return next(action)
  }

  if (action.type === actionType) {
    const nextLocation = action.payload.location
    store.dispatch(updateLocations(lastLocation, nextLocation))
    lastLocation = nextLocation
  }

  return next(action)
}

