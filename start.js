define(["@beyond-js/kernel/bundle", "@beyond-js/kernel/transversals", "@beyond-js/widgets/render", "@beyond-js/kernel/routing"], function (dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  const {
    Transversal
  } = brequire('@beyond-js/kernel/transversals');
  const transversal = new Transversal('start', '');
  /*************
  BUNDLE: WIDGET
  *************/

  const {
    widgets
  } = brequire('@beyond-js/widgets/render');
  widgets.register([{
    "name": "main-layout",
    "id": "@beyond-tests/sr-app/layout/main",
    "is": "layout",
    "render": {
      "csr": false,
      "sr": []
    }
  }, {
    "name": "message-w",
    "attrs": ["user"],
    "id": "@beyond-tests/sr-app/message",
    "render": {
      "csr": false,
      "sr": [{
        "user": "box"
      }]
    }
  }, {
    "name": "welcome-page",
    "id": "@beyond-tests/sr-app/welcome",
    "is": "page",
    "render": {
      "csr": false,
      "sr": ["/welcome/box"]
    },
    "route": "/welcome/${user}"
  }]);
  const bundles = new Map();
  /**********************
  MODULE: unnamed/routing
  **********************/

  bundles.set({
    "module": "@beyond-tests/sr-app/unnamed/routing",
    "bundle": "start"
  }, function (ims, exports) {
    /*************************
    INTERNAL MODULE: ./routing
    *************************/
    ims.set('./routing', {
      hash: 3204864713,
      creator: function (require, exports) {
        "use strict";

        var _routing = require("@beyond-js/kernel/routing");

        _routing.routing.redirect = async function redirect(uri) {
          return uri.pathname;
        };

        _routing.routing.setup();
      }
    });
  });
  transversal.initialise(bundles);
});