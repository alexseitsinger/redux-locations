import { UPDATE } from "./types"

export const updateLocations = (last, next) => ({
  type: UPDATE,
  last,
  next,
})

