## valve internal enabler

a [millennium](https://steambrew.app) plugin to enable the "Valve Internal" menu typically hidden for non-valve employees.

it works by running the following (but using millennium apis):
```js
window.webpackChunksteamui.push([[Math.random()], {}, __webpack_require__ => {
  __webpack_require__(34792).rV.m_Settings.bIsValveEmail = true;
  __webpack_require__(34792).TS.DEV_MODE = true;
}]);
```

which just gets the settings store and sets bIsValveEmail to true.