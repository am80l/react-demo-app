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
Components use the Flux pattern for unidirectional data flow. Data flows from stores down to views. Views interact with stores via actions which trigger store methods via the dispatcher. 
![Flux Diagram](https://github.com/am80l/react-demo-app/blob/master/images/flux-diagram.png)

## Widget architecture
Example consuming an external API and flowing the data through to views. Actions triggered in the views fetch new data via AJAX and flow the response payload through the dispatcher to the store. New data flows from the store down to the React component and state changes trigger the components render method.
![Flux Diagram](https://github.com/am80l/react-demo-app/blob/master/images/widget-diagram.png)

## Resources
- http://fancypixel.github.io/blog/2015/01/29/react-plus-flux-backed-by-rails-api-part-2/
