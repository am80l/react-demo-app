# React Demo App

This is a sandbox for React components built with Flux.

Required global packages:
`npm i webpack -g;`
`npm i webpack-dev-server -g;`
  
Install local packages at cloned root:
`npm i`

After installing, run webpack-dev-server from cloned root

Your app will be hosted at http://localhost:8080/dest/demo_app.html

## Components

Vote Panel (parent component)
  - Vote Buttons (child component)
  - Vote Count (child component)

## Flux architecture
Components use the Flux pattern for unidirectional data flow. Data flows from stores down to views. Views can only update stores via actions which pass a payload to store methods via the dispatcher. 
![Flux Diagram](https://github.com/am80l/react-demo-app/blob/master/images/flux-diagram.png)

## Widget architecture
Actions triggered in the views fetch new data via AJAX and flow the response payload through the dispatcher to the store. New data flows from the store down to the React component and state changes trigger the components render method. Each store is responsible for a domain of the application, and only update themselves in response to actions.

Example consuming an external API and flowing response payload through to views:
![Flux Diagram](https://github.com/am80l/react-demo-app/blob/master/images/widget-diagram.png)

## Deployment
Widgets will have dedicated CI pulling from Github using Jenkins and should be deployable independent from the API/Application (LC) they consume. This will decouple widgets from the App so that they are not bound to LC's release cycle. Jenkins will always pull latest from Github Master and will kick off npm and webpack processes to compile and package our widgets for production. 

![Deploy Diagram](https://github.com/am80l/react-demo-app/blob/master/images/deployment-diagram.jpeg)

#### Need to solve
- Separate the widget build from LC main application
  * Via independent build strategy. Requires a dedicated build / deploy cycle. More info: Nolan P
- Documentation
  * JSdoc, coverage reporting, release notes
  * TODO env for docs and release notes, automatable 
- Localization
  * Via Yahoo react-intl using format.js http://formatjs.io/react/
- SDK distribution design/Multiple widgets strategy
  * Solved by React’s component based design. Components talk to each other via stores built on Flux architecture
- Class naming conventions
  * Solved in React via js interpolation. Solved in LESS/SASS with &- naming convention https://github.intuit.com/TTcom/product-compare-chart/blob/master/src/less/pcc.less
- Better development with watch (only build new files)
  * Solved with web pack watch, and optionally w/ hot reload
- Minified AND compressed production files
  * AWS limitation  
  * TODO, parallel
- ReactJS
  * Yes
- API v2 of LC
  * TODO part of execution
- Implementation design
  * TBD Web components vs Script injection or both? TBD with BU implementation teams
- Manual versioning
  * github tags or via gulp-bump, gulp release, etc
- Documentation for versions
  * Release notes for each version, potentially enforceable https://www.npmjs.com/package/grunt-release-notes
- sdk-latest
  * TODO, parallel
- sdk-versioned
  * TBD, parallel
- Semantic versioning
  * github tags or via gulp-bump, gulp release, etc
- Monitoring for SDK endpoint uptime
  * TBD, parallel
- Unit testing
  * Karma w/mocha and chai. TBD whats so great about jest?
- Regression testing
  * Unit testing + QE automation TBD

## Resources
- https://facebook.github.io/flux/docs/overview.html#content
- http://facebook.github.io/react/
- http://fancypixel.github.io/blog/2015/01/29/react-plus-flux-backed-by-rails-api-part-2/
