define(["exports", "module", "@beyond-js/kernel/bundle", "react@18.2.0", "react-dom@18.2.0/client", "@beyond-js/widgets/controller"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.ReactWidgetController = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond-js/react-widgets/base",
    "bundle": "ts"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_1], ["react-dom/client", dependency_2]]));
  const ims = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 4071237356,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ReactWidgetController = void 0;

      var React = require("react");

      var _client = require("react-dom/client");

      var _controller = require("@beyond-js/widgets/controller");

      var _widget = require("./widget");

      var _wrapper = require("./wrapper");
      /*bundle*/


      class ReactWidgetController extends _controller.WidgetClientController {
        #wrapper;
        #root; // This property must be overwritten

        get Widget() {
          return null;
        }

        mount(props) {
          if (!this.Widget) {
            return {
              errors: [`Widget "${this.element}" does not export a Widget class`]
            };
          }

          props = Object.assign({
            widget: this.widget,
            attributes: this.attributes,
            component: this.widget,
            store: this.store
          }, props ? props : {});
          const holder = this.widget.holder;
          const hydrate = !!holder.children.length; // Render the widget

          try {
            const wrapper = this.#wrapper = new _wrapper.Wrapper(this);
            const p = {
              wrapper,
              props,
              styles: this.styles,
              holder: this.widget.holder
            };
            const element = React.createElement(_widget.default, p);

            if (hydrate) {
              this.#root = (0, _client.hydrateRoot)(holder, element);
            } else {
              const root = this.#root = (0, _client.createRoot)(holder);
              root.render(element);
            }
          } catch (exc) {
            console.log(`Error rendering widget "${this.widget.localName}":`);
            console.log(exc.stack);
          }
        }

        unmount() {
          this.#root.unmount();
        }

        refresh() {
          this.#wrapper.changed();
        }

      }

      exports.ReactWidgetController = ReactWidgetController;
    }
  });
  /************************
  INTERNAL MODULE: ./styles
  ************************/

  ims.set('./styles', {
    hash: 3645751033,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = _default;

      var React = require("react");

      function _default({
        styles
      }) {
        const rs = React.useState(0); // Listen for .css bundle changes

        React.useEffect(() => {
          const refresh = () => rs[1](prev => prev + 1);

          styles.on('change', refresh);
          return () => styles.off('change', refresh) && void 0;
        }, []);
        const head = [...styles.resources].map(url => {
          const loaded = () => styles.onloaded(url);

          return React.createElement("link", {
            key: url,
            href: url,
            rel: 'stylesheet',
            onLoad: loaded,
            onError: loaded
          });
        });
        return React.createElement(React.Fragment, null, head);
      }
    }
  });
  /************************
  INTERNAL MODULE: ./widget
  ************************/

  ims.set('./widget', {
    hash: 1316246600,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = _default;

      var React = require("react");

      var _styles = require("./styles");

      function _default({
        wrapper,
        props,
        styles,
        holder
      }) {
        const elements = [];
        elements.push(React.createElement(_styles.default, {
          key: "styles",
          styles: styles,
          widget: props.widget
        }));
        const rs = React.useState(0);

        const refresh = () => rs[1](rs[0] + 1); // Listen for .js bundle changes


        wrapper.changed = refresh; // Check for styles to be loaded

        const loaded = (() => {
          !styles.loaded && styles.ready.then(refresh);
          holder.style.display = '';
          return styles.loaded;
        })();

        const {
          Widget
        } = wrapper;
        const widget = React.createElement(Widget, {
          key: "widgets",
          ...props
        });
        loaded && elements.push(widget);
        return React.createElement(React.Fragment, null, elements);
      }
    }
  });
  /*************************
  INTERNAL MODULE: ./wrapper
  *************************/

  ims.set('./wrapper', {
    hash: 4175409966,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Wrapper = void 0;

      class Wrapper {
        #Widget;

        get Widget() {
          return this.#Widget.Widget;
        } // Property changed should be overwritten to get notified about HMR changes


        changed = () => void 0;

        constructor(Widget) {
          this.#Widget = Widget;
        }

      }

      exports.Wrapper = Wrapper;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./controller",
    "from": "ReactWidgetController",
    "name": "ReactWidgetController"
  }];
  let ReactWidgetController; // Module exports

  _exports.ReactWidgetController = ReactWidgetController;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'ReactWidgetController') && (_exports.ReactWidgetController = ReactWidgetController = require ? require('./controller').ReactWidgetController : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MEMsS0FBUDFDLENBQWEyQyxPQUFiM0MsR0FBdUIsRUFBdkJBO1VBQ0EsT0FBT08sTUFBTSxDQUFDdUIsTUFBZDtRQUhvQixJQUF4Qjs7UUFNQSxNQUFNO1VBQUN6QztRQUFELElBQVdlLE9BQWpCO1FBQ0EsTUFBTVIsTUFBTSxHQUFHWSxvQkFBQ25CLE1BQURtQixFQUFPO1VBQUN3QixHQUFHLEVBQUMsU0FBTDtVQUFjLEdBQUt6QztRQUFuQixDQUFQaUIsQ0FBZjtRQUNBc0IsTUFBTSxJQUFJTyxRQUFRLENBQUNDLElBQVRELENBQWN6QyxNQUFkeUMsQ0FBVlA7UUFFQSxPQUFRdEIsMENBQUc2QixRQUFIN0IsQ0FBUjtNQUNIOzs7Ozs7Ozs7Ozs7Ozs7OztNQ3RCSyxNQUFPSCxPQUFQLENBQWM7UUFDaEI7O1FBQ1UsSUFBTmhCLE1BQU07VUFDTixPQUFPLEtBQUssT0FBTCxDQUFhQSxNQUFwQjtRQUhZLEVBTWhCOzs7UUFDQThCLE9BQU8sR0FBRyxNQUFZLEtBQUssQ0FBcEI7O1FBRVB5QixZQUFZdkQsTUFBWnVELEVBQXlDO1VBQ3JDLEtBQUssT0FBTCxHQUFldkQsTUFBZjtRQUNIOztNQVhlIiwibmFtZXMiOlsiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0Q2xpZW50Q29udHJvbGxlciIsIldpZGdldCIsIm1vdW50IiwicHJvcHMiLCJlcnJvcnMiLCJlbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwid2lkZ2V0IiwiYXR0cmlidXRlcyIsImNvbXBvbmVudCIsInN0b3JlIiwiaG9sZGVyIiwiaHlkcmF0ZSIsImNoaWxkcmVuIiwibGVuZ3RoIiwid3JhcHBlciIsIldyYXBwZXIiLCJwIiwic3R5bGVzIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50Iiwicm9vdCIsInJlbmRlciIsImV4YyIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbE5hbWUiLCJzdGFjayIsInVubW91bnQiLCJyZWZyZXNoIiwiY2hhbmdlZCIsInJzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJwcmV2Iiwib24iLCJvZmYiLCJoZWFkIiwicmVzb3VyY2VzIiwibWFwIiwidXJsIiwibG9hZGVkIiwib25sb2FkZWQiLCJrZXkiLCJocmVmIiwicmVsIiwib25Mb2FkIiwib25FcnJvciIsImVsZW1lbnRzIiwicHVzaCIsIlN0eWxlcyIsInJlYWR5IiwidGhlbiIsInN0eWxlIiwiZGlzcGxheSIsImNvbnN0cnVjdG9yIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb250cm9sbGVyLnRzIiwic3R5bGVzLnRzeCIsIndpZGdldC50c3giLCJ3cmFwcGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF19