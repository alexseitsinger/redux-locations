import { updateLocations } from "./actions"

const LOCATION_CHANGE = "@@router/LOCATION_CHANGE"
let lastLocation

/**
 * @name createLocationsMiddleware
 *
 * @description
 * Creates a redux middleware that adds the next and last locations to redux
 * store upon navigatin changes.
 *
 * @param {string} [actionType=@@router/LOCATION_CHANGE]
 * The action type to listen for to update locations.
 *
 * @returns {function} The middleware that uses the provided action type.
 */
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

