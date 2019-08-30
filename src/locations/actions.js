import { UPDATE } from "./types"

export const updateLocations = (last, current) => ({
  type: UPDATE,
  last,
  current,
})

