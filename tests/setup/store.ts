import {
  connectRouter,
  routerMiddleware,
  RouterState,
} from "connected-react-router"
import { MemoryHistory } from "history"
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore as createReduxStore,
} from "redux"
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"

import { createLocationsMiddleware, locationsReducer } from "src"

import homePageReducer, {
  ReducerState as HomePageReducerState,
} from "./pages/home/reducer"

export interface ReducerState {
  router: RouterState;
  home: HomePageReducerState;
}

export const createMockStore = (
  preloadedState = {}
): ReturnType<typeof configureMockStore> => {
  const middleware = [thunk, createLocationsMiddleware()]
  const mockStore = configureMockStore(middleware)
  const store = mockStore(preloadedState)
  return store
}

export const createStore = (
  routerHistory: MemoryHistory,
  preloadedState = {}
): ReturnType<typeof createReduxStore> => {
  const rootReducer = combineReducers({
    router: connectRouter(routerHistory),
    locations: locationsReducer,
    home: homePageReducer,
  })

  const middleware = [
    thunk,
    createLocationsMiddleware(),
    routerMiddleware(routerHistory),
  ]
  const storeEnhancers = compose(applyMiddleware(...middleware))
  const store = createReduxStore(rootReducer, preloadedState, storeEnhancers)
  return store
}
