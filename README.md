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
React component use the Flux pattern for unidirectional data flow. Data flows from stores down to views. Views can only update stores via actions which pass a payload to store methods via the dispatcher.
![Flux Diagram](https://github.com/am80l/react-demo-app/blob/master/images/flux-diagram.png)

## Widget architecture
Actions triggered in the views fetch new data via AJAX and flow the response payload through the dispatcher to the store. New data flows from the store down to the React component and state changes trigger the components render method. Each store is responsible for a domain of the application, and only update themselves in response to actions.

Example consuming an external API and flowing response payload through to views:
![Flux Diagram](https://github.com/am80l/react-demo-app/blob/master/images/widget-diagram2.png)

## Deployment
Widgets will have dedicated CI pulling from Github using Jenkins and should be deployable independent from the API/Application (LC) they consume. Jenkins will will also kick off npm, karma and webpack to install dependencies, run unit tests using phantom.js, and compile and package the widget for production.

![Deploy Diagram](https://github.com/am80l/react-demo-app/blob/master/images/deploy-diagram.png)

### React File size
- min+gzip 36k
- min 120k

React's footprint is not completely negligible. One potential solution to mitigating this file size's impact on the customer experience could be to take advantag of React's isomorphic capability to render a flat component, and lazy load the React library based on interaction (clicked help drawer, put focus on search bar, etc)

### Why React
#### Isomorphic/universal JS
Flexibility in how we render components to address things like SEO, performance, etc. This allows React to conform and optimize almost any use case.
#### Testing
Testability is simplified since we can easily test React's output without a browser like phantom.js.
#### Framework agnostic
React does not prescribe how the rest of your application works, only the view. React can be used in any MV* javascript framework.
#### Composition / Workflow
React uses JSX. Instead of interacting with the dom directly, React outputs virtual dom via jsx and React handles the changes via its diffing algorythm. The conveniance of this is you have 1 file for 1 component. Everything is conveniently in one place which simplifies both composition and testing.
#### Component based design
React.js is component best which allows for reusing, combing, and nesting as needed. Parent child relationships pass state from parents down to children.
#### Debugging
There is a chrome extension for React that shows you the virtual dom as if it were the real dom, and is extremeley helpful with debugging.

#### Adoption by major players
In addition to Facebook, React.js is being used by Khan Academy, the new york times, Atlassian, Instagram and most recently Netflix. Adopters tend to become advocates.
- http://techblog.netflix.com/2015/01/netflix-likes-react.html
- http://stackshare.io/react
- https://developer.atlassian.com/blog/2015/02/rebuilding-hipchat-with-react/

### Alternatives
React and Flux replace a traditional MVC approach with React representing the view and view-controllers, and Flux handling the models and some controller-like behavior. React and Flux eschew traditional two way data binding in favor of unidirectional data flow. This is the recommended way to use React, however React can be the V in a more traditional MVC with two way data binding as well.

#### Backbone, underscore, handlebars
This is the traditional backbone approach. IMO this does not provide enough guard rail for an open contribution model.

#### Backbone + react
React just needs to be notified when the model changes, there are existing solutions for this.
- https://github.com/clayallsopp/react.backbone

#### Backbone with Marionette and handlebars, underscore
We could implement the Marionette framework on top of backbone to provide some guard rails and extend backbone features and concepts.

#### Flux w/o React
The flux design isn't dependent on React. We can create our own app dispatcher using the flux base, and build components using a module pattern or similar approach to create component singletons that can talk to eachother via exposed public methods.

#### No frameworks
We aren't bound to using a framework. Another alternative is to write our javascript without a framework. We can take advantage of ES6 features using the Babel transpiler and use module patterns or similar to create our widgets.

#### State machine
All alternatives support a basic FSM javascript implememntation per Boki's recommendation.

## Need to solve
These were identified as issues we would like to improve on. Below are the issues and their potential solutions if applicable.
- Separate the widget build from LC main application
  * Via independent build strategy *see deploy diagram. POC Nolan
- Documentation
  * JSdoc, coverage reporting, release notes
  * TODO env for docs and release notes, pref automatable push
- Localization
  * Via Yahoo react-intl using format.js http://formatjs.io/react/
- SDK distribution design/Multiple widgets strategy
  * Solved by React’s component based design. Components talk to each other via stores built on Flux architecture
- Class naming conventions
  * Solved in React via js interpolation/prefixing. Solved in LESS/SASS with &- naming convention https://github.intuit.com/TTcom/product-compare-chart/blob/master/src/less/pcc.less
- Better development with watch (only build new files)
  * Solved with web pack watch, and optionally w/ hot reload
- Minified AND compressed production files
  * Akamai
  * TODO, parallel
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
  * github tags or via gulp-bump, or via cdn
- Monitoring for SDK endpoint uptime
  * TBD, parallel
- Unit testing
  * Karma w/mocha and chai. TBD advantages of jest?
- Regression testing
  * Unit testing + QE automation TBD
  
## Next Steps
- Write cards/stories for hello world example to implement a deployment process
- Work with QE to establish testing strategy (envs, process, etc)

## Resources
- https://facebook.github.io/flux/docs/overview.html#content
- http://facebook.github.io/react/
- https://github.com/facebook/flux/tree/master/examples/flux-todomvc/
- http://fancypixel.github.io/blog/2015/01/29/react-plus-flux-backed-by-rails-api-part-2/
