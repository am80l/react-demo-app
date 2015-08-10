# React Demo App

  This is a sandbox.

  Required global packages: webpack, webpack-dev-server

  After installing, run webpack-dev-server from cloned root

  Your app will be hosted at http://localhost:8080/dest/demo_app.html

# Components

Vote Panel (parent component)
  - Vote Buttons (child component)
  - Vote Count (child component)

Design implications : using the parent child relationship probably doesn't make sense the way i've implemented. i.e. vote count component should be able to be used standalone, so it should likely manage its own state. Currently the vote panel manages the state for all child components. Built this way to explore the parent/child relationship.

## Resources
- http://fancypixel.github.io/blog/2015/01/29/react-plus-flux-backed-by-rails-api-part-2/
