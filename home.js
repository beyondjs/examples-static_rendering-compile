define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/widgets/render", "@beyond-js/react-widgets/page", "react@18.2.0", "@beyond-js/kernel/styles"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.Controller = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond-tests/sr-app/home",
    "bundle": "widget"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_3]]));
  brequire('@beyond-js/widgets/render').widgets.register([{
    "name": "home-page",
    "id": "@beyond-tests/sr-app/home",
    "is": "page",
    "route": "/${entry}"
  }]);
  brequire('@beyond-js/kernel/styles').styles.register('@beyond-tests/sr-app/home');
  const ims = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 2940256921,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Controller = void 0;

      var _page = require("@beyond-js/react-widgets/page");

      var _views = require("./views");
      /*bundle*/


      class Controller extends _page.PageReactWidgetController {
        get Widget() {
          return _views.Page;
        }

      }

      exports.Controller = Controller;
    }
  });
  /*****************************
  INTERNAL MODULE: ./views/index
  *****************************/

  ims.set('./views/index', {
    hash: 561829101,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Page = Page;

      var React = require("react");

      function Page(props) {
        const entry = props.uri.vars.get('entry');
        return React.createElement("div", {
          className: "page-container"
        }, React.createElement("h2", null, "Welcome to ", React.createElement("span", {
          className: "name"
        }, "BeyondJs test"), ". Im a page with static rendering."), React.createElement("message-wd", {
          entry: entry
        }));
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./controller",
    "from": "Controller",
    "name": "Controller"
  }];
  let Controller; // Module exports

  _exports.Controller = Controller;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Controller') && (_exports.Controller = Controller = require ? require('./controller').Controller : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BQUE7O01BQ0E7TUFFTzs7O01BQVUsTUFDWEEsVUFEVyxTQUNRQywrQkFEUixDQUNpQztRQUNwQyxJQUFOQyxNQUFNO1VBQ04sT0FBT0MsV0FBUDtRQUNIOztNQUg2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ0psRDs7TUFFTSxTQUFVQSxJQUFWLENBQWVDLEtBQWYsRUFBb0I7UUFDdEIsTUFBTUMsS0FBSyxHQUFHRCxLQUFLLENBQUNFLEdBQU5GLENBQVVHLElBQVZILENBQWVJLEdBQWZKLENBQW1CLE9BQW5CQSxDQUFkO1FBRUEsT0FDSUs7VUFBS0MsU0FBUyxFQUFDO1FBQWZELEdBQ0lBLCtDQUNlQTtVQUFNQyxTQUFTLEVBQUM7UUFBaEJELEdBQXNCLGVBQXRCQSxDQURmQSx1Q0FESkEsRUFLSUE7VUFBWUosS0FBSyxFQUFFQTtRQUFuQkksRUFMSkEsQ0FESjtNQVNIIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJQYWdlIiwicHJvcHMiLCJlbnRyeSIsInVyaSIsInZhcnMiLCJnZXQiLCJSZWFjdCIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsicHJvamVjdC9tb2R1bGVzL2hvbWUvdHMvY29udHJvbGxlci50cyIsInByb2plY3QvbW9kdWxlcy9ob21lL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF19