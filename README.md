<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

## createLocationsMiddleware

Creates a redux middleware that adds the next and last locations to redux
store upon navigatin changes.

### Parameters

-   `actionType` **[string][1]** The action type to listen for to update locations. (optional, default `@@router/LOCATION_CHANGE`)

Returns **[function][2]** The middleware that uses the provided action type.

## locationsReducer

The reducer to manage redux state changes for locations.

### Parameters

-   `state` **([object][3] \| [array][4] \| [string][1])** The default state to use for the reducer. (optional, default `{history:[],last:{},next:{}}`)
-   `The` **[object][3]** action object dispatched.

Returns **[object][3]** The updated state.

[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[4]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array