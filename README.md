## Redux Locations

### Description

Save location changes to the 'locations' store state.

### Installation

```
yarn add @alexseitsinger/redux-locations
```

### Example

```javascript

import { createLocationsMiddleware } from "@alexseitsinger/redux-locations"

const locationsMiddleware = createLocationsMiddleware()

export const configureStore = (history, initialState) => {
  const middleware = [locationsMiddleware]
  ...
}
```
