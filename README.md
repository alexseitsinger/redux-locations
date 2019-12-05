## Redux Locations

Save location changes to the 'locations' store state.

### Installation

```
yarn add @alexseitsinger/redux-locations
```

### Example

```javascript
// store.js
import { createLocationsMiddleware } from "@alexseitsinger/redux-locations"

const locationsMiddleware = createLocationsMiddleware()

export const configureStore = (history, initialState) => {
  const middleware = [locationsMiddleware]
  //...
}

// reducer.js
import { locationsReducer } from "@alexseitsinger/redux-locations"

export const rootReducer = combineReducers({
  ...
  locations: locationsReducer,
  ...
})
```
