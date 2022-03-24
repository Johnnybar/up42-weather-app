# **24-Hour Weather Forecast App**

## **Introduction**

The app was created using React, TypeScript, Sass and the OpenWeatherMap API, with testing possible using react-testing-library and Cypress (I am fairly new to Cypress).
It is based on the design provided and should display weather for 24 hours, including scrolling capability and click-to-change main view functionality.

## **Instructions**

Please run the app by running `npm i` followed by `npm start`.
To run unit tests, run `npm test`. To run Cypress tests, run `npm run cypress`.

**Note**

If there are any issues with testing in cypress - it is dependent on the BaseUrl which is currently set to `http://localhost:3000` in `cypress.json`.

## **UI**

Following the guidelines of the design, proportions and element styling was kept as-is, with css variables set in `scss-utils.scss` to maintain design consistency throughout the app. Drag-to-scroll through the bottom section is possible thanks to the slider feature added.

## **App structure**

The app is separated into typescript components (each with own scss and unit test), features and business logic (most functions found in `utils.js`). Types are declared in `types.d.ts` , and specific props' interfaces are declared in their own individual components.

## **CSS**

In terms of CSS considerations, I used the BEM methodology for clearer semantic structure, which also keeps the Sass structure clean, as well as some bootstrap classes for simpler mobile-ready responsiveness.

## **What could be improved with more time:**

- Adding a server using express.js on the backend to improve app performance due to SSR performance
- Adding more unit tests and more advanced e2e testing
- Optimize state handling using React Context or Redux
- Improve accessibility in app and app structure

## **Thank you! Jonathan**
