import "core-js/stable" from "core-js"

export { createLocationsMiddleware } from "./locations/middleware"
import { locationsReducer } from "./locations/reducer"
import { updateLocations } from "./locations/actions"
import { UPDATE } from "./locations/types"
