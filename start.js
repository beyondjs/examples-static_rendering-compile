System.register(["@beyond-js/kernel@0.1.1/bundle", "@beyond-js/kernel@0.1.1/transversals", "@beyond-js/widgets@0.1.0/render"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, Transversal, __beyond_transversal, widgets, bundles;

  return {
    setters: [function (_beyondJsKernel011Bundle) {
      dependency_0 = _beyondJsKernel011Bundle;
    }, function (_beyondJsKernel011Transversals) {
      dependency_1 = _beyondJsKernel011Transversals;
    }, function (_beyondJsWidgets010Render) {
      dependency_2 = _beyondJsWidgets010Render;
    }],
    execute: function () {
      ({
        Transversal
      } = brequire('@beyond-js/kernel/transversals'));

      _export("__beyond_transversal", __beyond_transversal = new Transversal('start', ''));

      __beyond_transversal.dependencies.update([['@beyond-js/kernel/transversals', dependency_1], ['@beyond-js/widgets/render', dependency_2]]);
      /*************
      BUNDLE: WIDGET
      *************/


      ({
        widgets
      } = brequire('@beyond-js/widgets/render'));
      widgets.register([{
        "name": "home-page",
        "vspecifier": "@beyond-tests/sr-app@1.0.0/home",
        "is": "page",
        "render": {
          "csr": false,
          "sr": ["/", "/widget"]
        },
        "route": "/${entry}"
      }, {
        "name": "main-layout",
        "vspecifier": "@beyond-tests/sr-app@1.0.0/layout/main",
        "is": "layout",
        "render": {
          "csr": false,
          "sr": true
        }
      }, {
        "name": "message-wd",
        "attrs": ["entry"],
        "vspecifier": "@beyond-tests/sr-app@1.0.0/message",
        "render": {
          "csr": false,
          "sr": [{
            "entry": "widget"
          }]
        }
      }]);
      bundles = [];

      __beyond_transversal.initialise(bundles);
    }
  };
});