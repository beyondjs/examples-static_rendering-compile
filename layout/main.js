System.register(["@beyond-js/widgets@0.1.0/render", "@beyond-js/kernel@0.1.1/bundle", "@beyond-js/kernel@0.1.1/styles", "@beyond-js/react-widgets@18.20.1/base", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;

  _export("Controller", void 0);

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
          "vspecifier": "@beyond-tests/sr-app@1.0.0/layout/main"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;

      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-widgets/base', dependency_3], ['react', dependency_4]]);

      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "main-layout",
        "vspecifier": "@beyond-tests/sr-app@1.0.0/layout/main",
        "is": "layout",
        "render": {
          "csr": false,
          "sr": true
        }
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond-tests/sr-app@1.0.0/layout/main');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 2684072206,
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
              return _views.Layout;
            }

          }

          exports.Controller = Controller;
        }
      });
      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1901748492,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Layout = Layout;

          var React = require("react");

          function Layout() {
            return React.createElement("main", null, React.createElement("beyond-layout-children", null));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }];

      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7O1VBQ0E7VUFFTzs7O1VBQVUsTUFDWEEsVUFEVyxTQUNRQywyQkFEUixDQUM2QjtZQUNoQyxJQUFOQyxNQUFNO2NBQ04sT0FBT0MsYUFBUDtZQUNIOztVQUh5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ0o5Qzs7VUFVTSxTQUFVQSxNQUFWLEdBQWdCO1lBQ2xCLE9BQ0lDLGtDQUNJQSxtREFESkEsQ0FESjtVQUtIIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIkxheW91dCIsIlJlYWN0Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJwcm9qZWN0L21vZHVsZXMvbGF5b3V0cy9tYWluL3RzL2NvbnRyb2xsZXIudHMiLCJwcm9qZWN0L21vZHVsZXMvbGF5b3V0cy9tYWluL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF19