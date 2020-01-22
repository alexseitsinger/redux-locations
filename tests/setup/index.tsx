import React from "react"
import { Provider } from "react-redux"
import { Route } from "react-router"
import { ConnectedRouter } from "connected-react-router"
import { mount, ReactWrapper } from "enzyme"
import { createMemoryHistory, MemoryHistory } from "history"

import HomePage from "./pages/home"
import { createStore } from "./store"

export interface SetupType {
  store: ReturnType<typeof createStore>;
  wrapper: ReactWrapper;
  history: MemoryHistory;
}

export interface SetupArgs {
  url: string;
  preloadedState?: {};
}

export const setup = ({
  url = "/",
  preloadedState = {},
}: SetupArgs): SetupType => {
  const routerHistory = createMemoryHistory({
    initialIndex: 0,
    initialEntries: [url],
  })
  const store = createStore(routerHistory, preloadedState)
  const wrapper = mount(
    <Provider store={store}>
      <ConnectedRouter history={routerHistory}>
        <Route exact path={"/"} component={HomePage} />
      </ConnectedRouter>
    </Provider>
  )
  return {
    store,
    wrapper,
    history: routerHistory,
  }
}
