export default function(app) {

  return function(name, url, templateUrl, controller, additionalOpts) {

    additionalOpts = additionalOpts || {}

    // Add the route to ui-router
    app.config(['$stateProvider', function($stateProvider) {

      var opts = {
        url: url,
        templateUrl: '/app/views/' + templateUrl
      }

      if (controller) {
        opts.controller = controller
      }

      // If there are additional options like onEnter, onExit, append them
      opts = Object.assign(opts, additionalOpts)

      $stateProvider.state(name, opts)

    }])

  }

}
