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
    "name": "message-w",
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
    hash: 3983319350,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Widget = Widget;

      var React = require("react");
      /*bundle*/


      function Widget(props) {
        const user = props.attributes.get('user');
        console.log(2, props.attributes);
        console.log(3, user);
        return React.createElement("div", null, "Hello ", React.createElement("span", {
          className: "name"
        }, user), ", I am a widget and I have a message for you");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUFBOztNQUNBO01BRU87OztNQUFVLE1BQ1hBLFVBRFcsU0FDUUMsMkJBRFIsQ0FDNkI7UUFDaEMsSUFBTkMsTUFBTTtVQUNOLE9BQU9BLGFBQVA7UUFDSDs7TUFIeUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNKOUM7TUFFTzs7O01BQVUsU0FDUkEsTUFEUSxDQUNEQyxLQURDLEVBQ0k7UUFDakIsTUFBTUMsSUFBSSxHQUFHRCxLQUFLLENBQUNFLFVBQU5GLENBQWlCRyxHQUFqQkgsQ0FBcUIsTUFBckJBLENBQWI7UUFDQUksT0FBTyxDQUFDQyxHQUFSRCxDQUFZLENBQVpBLEVBQWVKLEtBQUssQ0FBQ0UsVUFBckJFO1FBQ0FBLE9BQU8sQ0FBQ0MsR0FBUkQsQ0FBWSxDQUFaQSxFQUFlSCxJQUFmRztRQUVBLE9BQU9FLDJDQUFXQTtVQUFNQyxTQUFTLEVBQUM7UUFBaEJELEdBQXdCTCxJQUF4QkssQ0FBWEEsaURBQVA7TUFDSCIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJwcm9wcyIsInVzZXIiLCJhdHRyaWJ1dGVzIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsIlJlYWN0IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJwcm9qZWN0L21vZHVsZXMvbWVzc2FnZS93aWRnZXQvdHMvY29udHJvbGxlci50cyIsInByb2plY3QvbW9kdWxlcy9tZXNzYWdlL3dpZGdldC90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==