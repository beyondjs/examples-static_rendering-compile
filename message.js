System.register(["@beyond-js/widgets@0.1.0/render", "@beyond-js/kernel@0.1.1/bundle", "@beyond-js/kernel@0.1.1/styles", "@beyond-js/react-widgets@18.20.1/base", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Controller, Widget, __beyond_pkg, hmr;

  _export({
    Controller: void 0,
    Widget: void 0
  });

  return {
    setters: [function (_beyondJsWidgets010Render) {
      dependency_0 = _beyondJsWidgets010Render;
    }, function (_beyondJsKernel011Bundle) {
      dependency_1 = _beyondJsKernel011Bundle;
    }, function (_beyondJsKernel011Styles) {
      dependency_2 = _beyondJsKernel011Styles;
    }, function (_beyondJsReactWidgets18201Base) {
      dependency_3 = _beyondJsReactWidgets18201Base;
    }, function (_react) {
      dependency_4 = _react;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/kernel", "0.1.1"], ["@beyond-js/backend", "0.1.0"], ["@beyond-js/ssr", "0.1.0"], ["@beyond-js/widgets", "0.1.0"], ["@beyond-js/react-widgets", "18.20.1"], ["socket.io", "4.5.3"], ["socket.io-client", "4.5.3"], ["cheerio", "1.0.0-rc.12"], ["@beyond-tests/sr-app", "1.0.0"], ["@beyond-tests/sr-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };

      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-tests/sr-app@1.0.0/message"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;

      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-widgets/base', dependency_3], ['react', dependency_4]]);

      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "message-wd",
        "attrs": ["entry"],
        "vspecifier": "@beyond-tests/sr-app@1.0.0/message",
        "render": {
          "csr": false,
          "sr": [{
            "entry": "beyond"
          }, {
            "entry": "render"
          }]
        }
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond-tests/sr-app@1.0.0/message');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 8577895,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;

          var _base = require("@beyond-js/react-widgets/base");

          var _views = require("./views");
          /*bundle*/


          class Controller extends _base.ReactWidgetController {
            get Widget() {
              return _views.Widget;
            }

          }

          exports.Controller = Controller;
        }
      });
      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2436290592,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Widget = Widget;

          var React = require("react");
          /*bundle*/


          function Widget(props) {
            const entry = props.attributes.get('entry');
            return React.createElement("div", null, "I'm a ", React.createElement("span", {
              className: "name"
            }, "Static Rendering(SR) Widget "), "and I'm displaying the attribute you put in the URL: ", React.createElement("strong", null, entry));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "Widget",
        "name": "Widget"
      }];

      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Widget') && _export("Widget", Widget = require ? require('./views/index').Widget : value);
      };

      _export("__beyond_pkg", __beyond_pkg = __pkg);

      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);

        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());

      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBOztVQUNBO1VBRU87OztVQUFVLE1BQ1hBLFVBRFcsU0FDUUMsMkJBRFIsQ0FDNkI7WUFDaEMsSUFBTkMsTUFBTTtjQUNOLE9BQU9BLGFBQVA7WUFDSDs7VUFIeUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKOUM7VUFFTzs7O1VBQVUsU0FDUkEsTUFEUSxDQUNEQyxLQURDLEVBQ0k7WUFDakIsTUFBTUMsS0FBSyxHQUFHRCxLQUFLLENBQUNFLFVBQU5GLENBQWlCRyxHQUFqQkgsQ0FBcUIsT0FBckJBLENBQWQ7WUFFQSxPQUNJSSwyQ0FDVUE7Y0FBTUMsU0FBUyxFQUFDO1lBQWhCRCxHQUFzQiw4QkFBdEJBLENBRFZBLDJEQUV5REEsb0NBQVNILEtBQVRHLENBRnpEQSxDQURKO1VBTUgiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwicHJvcHMiLCJlbnRyeSIsImF0dHJpYnV0ZXMiLCJnZXQiLCJSZWFjdCIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsicHJvamVjdC9tb2R1bGVzL21lc3NhZ2Uvd2lkZ2V0L3RzL2NvbnRyb2xsZXIudHMiLCJwcm9qZWN0L21vZHVsZXMvbWVzc2FnZS93aWRnZXQvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXX0=