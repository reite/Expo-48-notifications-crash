# Expo-48-notifications-crash

Importing expo-notifications gives this error:
```
Module not found: Can't resolve './dist/abort-controller'
Did you mean 'abort-controller.mjs'?
BREAKING CHANGE: The request './dist/abort-controller' failed to resolve only because it was resolved as fully specified
(probably because the origin is strict EcmaScript Module, e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"').
The extension in the request is mandatory for it to be fully specified.
Add the extension to the request.
  1 | /*globals self, window */
> 2 | import * as ac from "./dist/abort-controller"
  3 |
  4 | /*eslint-disable @mysticatea/prettier */
  5 | const g =

web compiled with 1 error
```

The app will still run with this error, but if the ```getExpoPushTokenAsync();``` function is used anywhere the app will crash with this error:
```
Uncaught Error: Cannot find module './dist/abort-controller'
    at webpackMissingModule (wrapNativeSuper.js:30:1)
    at ./node_modules/abort-controller/polyfill.mjs (wrapNativeSuper.js:30:1)
    at __webpack_require__ (bootstrap:24:1)
    at fn (hot module replacement:62:1)
    at ./node_modules/expo-notifications/build/DevicePushTokenAutoRegistration.fx.js (setUpErrorManager.fx.ts:16:1)
    at __webpack_require__ (bootstrap:24:1)
    at fn (hot module replacement:62:1)
    at ./node_modules/expo-notifications/build/getExpoPushTokenAsync.js (getDevicePushTokenAsync.web.ts:121:1)
    at __webpack_require__ (bootstrap:24:1)
    at fn (hot module replacement:62:1)
    ```
