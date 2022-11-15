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
            "entry": "widget"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTs7VUFDQTtVQUVPOzs7VUFBVSxNQUNYQSxVQURXLFNBQ1FDLDJCQURSLENBQzZCO1lBQ2hDLElBQU5DLE1BQU07Y0FDTixPQUFPQSxhQUFQO1lBQ0g7O1VBSHlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSjlDO1VBRU87OztVQUFVLFNBQ1JBLE1BRFEsQ0FDREMsS0FEQyxFQUNJO1lBQ2pCLE1BQU1DLEtBQUssR0FBR0QsS0FBSyxDQUFDRSxVQUFORixDQUFpQkcsR0FBakJILENBQXFCLE9BQXJCQSxDQUFkO1lBRUEsT0FDSUksMkNBQ1VBO2NBQU1DLFNBQVMsRUFBQztZQUFoQkQsR0FBc0IsOEJBQXRCQSxDQURWQSwyREFFeURBLG9DQUFTSCxLQUFURyxDQUZ6REEsQ0FESjtVQU1IIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsInByb3BzIiwiZW50cnkiLCJhdHRyaWJ1dGVzIiwiZ2V0IiwiUmVhY3QiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInByb2plY3QvbW9kdWxlcy9tZXNzYWdlL3dpZGdldC90cy9jb250cm9sbGVyLnRzIiwicHJvamVjdC9tb2R1bGVzL21lc3NhZ2Uvd2lkZ2V0L3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF19