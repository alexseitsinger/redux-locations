import { LOCATION_CHANGE, UPDATE } from "src"

import { createMockStore } from "./setup/store"

describe("LocationsMiddleware", () => {
  it("middleware updates store when location changes", () => {
    const mockStore = createMockStore({
      //...
    })

    const initialLocation = {
      pathname: "/",
      state: null,
      key: "",
      hash: "",
      search: "",
    }

    const locationChange = {
      type: LOCATION_CHANGE,
      payload: initialLocation,
    }

    const updateLocation = {
      type: UPDATE,
      last: initialLocation,
      current: undefined,
    }

    const expectedActions = [updateLocation, locationChange]

    mockStore.dispatch(locationChange)

    expect(mockStore.getActions()).toStrictEqual(expectedActions)
  })
})
