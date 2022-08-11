define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/widgets/render", "@beyond-js/kernel/styles", "@beyond-js/react-widgets/base", "react@18.2.0"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.Widget = _exports.Controller = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond-tests/sr-app/message",
    "bundle": "widget"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_4]]));
  brequire('@beyond-js/widgets/render').widgets.register([{
    "name": "message-wd",
    "id": "@beyond-tests/sr-app/message"
  }]);
  brequire('@beyond-js/kernel/styles').styles.register('@beyond-tests/sr-app/message');
  const ims = new Map();
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
    hash: 190506424,
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
        return React.createElement("div", null, "Dev, i'm a ", React.createElement("span", {
          className: "name"
        }, "Static Rendering(SR) widget "), "and I'm displaying the attribute you put in the URL: ", React.createElement("strong", null, entry));
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
  let Controller, Widget; // Module exports

  _exports.Widget = Widget;
  _exports.Controller = Controller;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Controller') && (_exports.Controller = Controller = require ? require('./controller').Controller : value);
    (require || prop === 'Widget') && (_exports.Widget = Widget = require ? require('./views/index').Widget : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUFBOztNQUNBO01BRU87OztNQUFVLE1BQ1hBLFVBRFcsU0FDUUMsMkJBRFIsQ0FDNkI7UUFDaEMsSUFBTkMsTUFBTTtVQUNOLE9BQU9BLGFBQVA7UUFDSDs7TUFIeUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNKOUM7TUFFTzs7O01BQVUsU0FDUkEsTUFEUSxDQUNEQyxLQURDLEVBQ0k7UUFDakIsTUFBTUMsS0FBSyxHQUFHRCxLQUFLLENBQUNFLFVBQU5GLENBQWlCRyxHQUFqQkgsQ0FBcUIsT0FBckJBLENBQWQ7UUFFQSxPQUNJSSxnREFDZUE7VUFBTUMsU0FBUyxFQUFDO1FBQWhCRCxHQUFzQiw4QkFBdEJBLENBRGZBLDJEQUV5REEsb0NBQVNILEtBQVRHLENBRnpEQSxDQURKO01BTUgiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwicHJvcHMiLCJlbnRyeSIsImF0dHJpYnV0ZXMiLCJnZXQiLCJSZWFjdCIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsicHJvamVjdC9tb2R1bGVzL21lc3NhZ2Uvd2lkZ2V0L3RzL2NvbnRyb2xsZXIudHMiLCJwcm9qZWN0L21vZHVsZXMvbWVzc2FnZS93aWRnZXQvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXX0=