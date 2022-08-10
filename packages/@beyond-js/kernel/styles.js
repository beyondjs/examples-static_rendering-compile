define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/kernel/core"], function (_exports, _amd_module, dependency_0, dependency_1) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.styles = _exports.hmr = _exports.V1Styles = _exports.DependenciesStyles = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond-js/kernel/styles",
    "bundle": "ts"
  }, __url).package();

  ;
  externals.register(new Map([]));
  const ims = new Map();
  /*************************************
  INTERNAL MODULE: ./dependencies-styles
  *************************************/

  ims.set('./dependencies-styles', {
    hash: 2842068258,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DependenciesStyles = void 0;

      var _bundle = require("@beyond-js/kernel/bundle");

      var _core = require("@beyond-js/kernel/core");

      var _registry = require("./registry");
      /*bundle*/


      class DependenciesStyles extends _core.Events {
        #bundle;
        #elements;

        get elements() {
          return this.#elements;
        }

        constructor(bundle) {
          super();
          this.#bundle = bundle;

          const change = () => this.trigger('change');

          this.#elements = new Set();

          const recursive = id => {
            if (!_bundle.instances.has(id)) {
              console.log(`Bundle id "${id}" not found. Try refreshing the page.\n` + `If the problem still persist, delete the BeyondJS cache and try again.`);
              return;
            }

            const bundle = _bundle.instances.get(id);

            if (id !== this.#bundle && bundle.name === 'widget') return; // Check if the bundle has styles

            const styles = _registry.styles.get(id);

            if (styles && styles.engine !== 'legacy') {
              this.#elements.add(styles);
              styles.on('change', change);
            }

            const {
              dependencies
            } = bundle.package();
            dependencies.forEach(dependency => recursive(dependency));
          };

          recursive(this.#bundle);
        }

      }

      exports.DependenciesStyles = DependenciesStyles;
    }
  });
  /************************
  INTERNAL MODULE: ./legacy
  ************************/

  ims.set('./legacy', {
    hash: 3086414223,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      var _core = require("@beyond-js/kernel/core");

      const pkg = globalThis.__app_package;

      class _default {
        get engine() {
          return 'legacy';
        }

        #bundle;
        #value;

        get value() {
          return this.#value;
        } // Is the stylesheet appended to the DOM of the page (not a shadow dom of a widget)


        #appended = false;

        get appended() {
          return this.#appended;
        }

        constructor(bundle, value) {
          this.#bundle = bundle;

          const module = (() => {
            const module = bundle.split('/');
            module.pop();
            return module.join('/');
          })(); // Find and replace #host...


          const regexp = /#host\.([\w\d]*)#([^.]*\.[\w\d]*)/g;
          this.#value = value.replace(regexp, (match, host, resource) => {
            if (host === 'module' || host === 'library') {
              return `${module}/${resource}`;
            } else if (host === 'application') {
              const {
                host
              } = _core.projects.get(pkg);

              return `${host}${resource}`;
            }

            console.warn(`Invalid css host specification on bundle "${bundle}"`, match);
          });
        }
        /**
         * @deprecated Only required by legacy applications
         */


        appendToDOM(is) {
          if (this.#appended) {
            const previous = document.querySelectorAll(`:scope > [bundle="${this.#bundle}"]`)[0];
            previous && document.removeChild(previous);
          }

          const css = document.createElement('style');
          css.appendChild(document.createTextNode(this.#value));
          is && css.setAttribute('is', is);
          document.getElementsByTagName('head')[0].appendChild(css);
          this.#appended = true;
        }

      }

      exports.default = _default;
    }
  });
  /**************************
  INTERNAL MODULE: ./registry
  **************************/

  ims.set('./registry', {
    hash: 2973103620,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.styles = void 0;

      var _legacy = require("./legacy");

      var _v = require("./v1");

      class Registry {
        #registry = new Map();

        register(bundle, value) {
          if (this.#registry.has(bundle)) return;
          const styles = value ? new _legacy.default(bundle, value) : new _v.V1Styles(bundle);
          this.#registry.set(bundle, styles);
          return styles;
        }

        has(bundle) {
          return this.#registry.has(bundle);
        }

        get(bundle) {
          return this.#registry.get(bundle);
        }

      }
      /*bundle*/


      const styles = new Registry(); // Just for legacy projects

      exports.styles = styles;
      globalThis.beyondLegacyStyles = styles;
    }
  });
  /********************
  INTERNAL MODULE: ./v1
  ********************/

  ims.set('./v1', {
    hash: 3449853183,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.V1Styles = void 0;

      var _core = require("@beyond-js/kernel/core");

      var _bundle = require("@beyond-js/kernel/bundle");
      /*bundle*/


      class V1Styles extends _core.Events {
        get engine() {
          return 'v1';
        }
        /**
         * The bundle object
         *
         * @type {Bundle}
         * @private
         */


        #bundle;

        get bundle() {
          return this.#bundle;
        }
        /**
         * The autoincremental HMR version
         *
         * @type {number}
         * @private
         */


        #version = 0;

        get version() {
          return this.#version;
        }
        /**
         * The href without the version qs parameter
         *
         * @type {string}
         * @private
         */


        #resource;

        get resource() {
          return this.#resource;
        }
        /**
         * The url of the stylesheet including the HMR version qs parameter
         *
         * @return {string}
         */


        get href() {
          const version = this.#version ? `?version=${this.#version}` : '';
          return `${this.#resource}${version}`;
        }

        constructor(resource) {
          super();
          this.#bundle = _bundle.instances.get(resource);

          this.#resource = (() => {
            if (typeof process === 'object') {
              const split = resource.split('/');
              const pkg = split[0].startsWith('@') ? `${split.shift()}/${split.shift()}` : split.shift();
              const subpath = split.join('/');
              return `##_!${pkg}!_##${subpath}.css`;
            }

            let {
              uri
            } = this.#bundle;
            uri = uri.slice(0, uri.length - 3); // Remove the .js extension

            return `${uri}.css`;
          })();
        }
        /**
         * Called by HMR in development environment
         */


        change() {
          this.#version++;
          this.trigger('change');
        }

      }

      exports.V1Styles = V1Styles;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./dependencies-styles",
    "from": "DependenciesStyles",
    "name": "DependenciesStyles"
  }, {
    "im": "./registry",
    "from": "styles",
    "name": "styles"
  }, {
    "im": "./v1",
    "from": "V1Styles",
    "name": "V1Styles"
  }];
  let DependenciesStyles, styles, V1Styles; // Module exports

  _exports.V1Styles = V1Styles;
  _exports.styles = styles;
  _exports.DependenciesStyles = DependenciesStyles;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'DependenciesStyles') && (_exports.DependenciesStyles = DependenciesStyles = require ? require('./dependencies-styles').DependenciesStyles : value);
    (require || prop === 'styles') && (_exports.styles = styles = require ? require('./registry').styles : value);
    (require || prop === 'V1Styles') && (_exports.V1Styles = V1Styles = require ? require('./v1').V1Styles : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFBQTs7TUFDQTs7TUFDQTtNQUdPOzs7TUFBVSxNQUNYQSxrQkFEVyxTQUNnQkMsWUFEaEIsQ0FDc0I7UUFDMUI7UUFDQTs7UUFDRyxJQUFSQyxRQUFRO1VBQ1IsT0FBTyxLQUFLLFNBQVo7UUFDSDs7UUFFREMsWUFBWUMsTUFBWkQsRUFBMEI7VUFDdEI7VUFDQSxLQUFLLE9BQUwsR0FBZUMsTUFBZjs7VUFFQSxNQUFNQyxNQUFNLEdBQUcsTUFBTSxLQUFLQyxPQUFMLENBQWEsUUFBYixDQUFyQjs7VUFFQSxLQUFLLFNBQUwsR0FBaUIsSUFBSUMsR0FBSixFQUFqQjs7VUFDQSxNQUFNQyxTQUFTLEdBQUlDLEVBQUQsSUFBZTtZQUM3QixJQUFJLENBQUNDLGtCQUFRQyxHQUFSRCxDQUFZRCxFQUFaQyxDQUFMLEVBQXNCO2NBQ2xCRSxPQUFPLENBQUNDLEdBQVJELENBQVksY0FBY0gsRUFBRSx5Q0FBaEIsR0FDUix3RUFESkc7Y0FFQTtZQUNIOztZQUNELE1BQU1SLE1BQU0sR0FBR00sa0JBQVFJLEdBQVJKLENBQVlELEVBQVpDLENBQWY7O1lBQ0EsSUFBSUQsRUFBRSxLQUFLLEtBQUssT0FBWkEsSUFBdUJMLE1BQU0sQ0FBQ1csSUFBUFgsS0FBZ0IsUUFBM0MsRUFBcUQsT0FQeEIsQ0FTN0I7O1lBQ0EsTUFBTVksTUFBTSxHQUFhQyxpQkFBU0gsR0FBVEcsQ0FBYVIsRUFBYlEsQ0FBekI7O1lBQ0EsSUFBSUQsTUFBTSxJQUFJQSxNQUFNLENBQUNFLE1BQVBGLEtBQWtCLFFBQWhDLEVBQTBDO2NBQ3RDLEtBQUssU0FBTCxDQUFlRyxHQUFmLENBQW1CSCxNQUFuQjtjQUNBQSxNQUFNLENBQUNJLEVBQVBKLENBQVUsUUFBVkEsRUFBb0JYLE1BQXBCVztZQUNIOztZQUVELE1BQU07Y0FBQ0s7WUFBRCxJQUFpQmpCLE1BQU0sQ0FBQ2tCLE9BQVBsQixFQUF2QjtZQUNBaUIsWUFBWSxDQUFDRSxPQUFiRixDQUFzQkcsVUFBRCxJQUF3QmhCLFNBQVMsQ0FBQ2dCLFVBQUQsQ0FBdERIO1VBakJKOztVQW1CQWIsU0FBUyxDQUFDLEtBQUssT0FBTixDQUFUQTtRQUNIOztNQWxDa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNOdkM7O01BRUEsTUFBTWlCLEdBQUcsR0FBU0MsVUFBVyxDQUFDQyxhQUE5Qjs7TUFFYztRQUNBLElBQU5ULE1BQU07VUFDTixPQUFPLFFBQVA7UUFDSDs7UUFFUTtRQUVBOztRQUNBLElBQUxVLEtBQUs7VUFDTCxPQUFPLEtBQUssTUFBWjtRQVRNLEVBWVY7OztRQUNBLFlBQVksS0FBWjs7UUFDWSxJQUFSQyxRQUFRO1VBQ1IsT0FBTyxLQUFLLFNBQVo7UUFDSDs7UUFFRDFCLFlBQVlDLE1BQVpELEVBQTRCeUIsS0FBNUJ6QixFQUF5QztVQUNyQyxLQUFLLE9BQUwsR0FBZUMsTUFBZjs7VUFFQSxNQUFNMEIsTUFBTSxHQUFHLENBQUMsTUFBSztZQUNqQixNQUFNQSxNQUFNLEdBQUcxQixNQUFNLENBQUMyQixLQUFQM0IsQ0FBYSxHQUFiQSxDQUFmO1lBQ0EwQixNQUFNLENBQUNFLEdBQVBGO1lBQ0EsT0FBT0EsTUFBTSxDQUFDRyxJQUFQSCxDQUFZLEdBQVpBLENBQVA7VUFIVyxJQUFmLENBSHFDLENBU3JDOzs7VUFDQSxNQUFNSSxNQUFNLEdBQUcsb0NBQWY7VUFDQSxLQUFLLE1BQUwsR0FBY04sS0FBSyxDQUFDTyxPQUFOUCxDQUFjTSxNQUFkTixFQUFzQixDQUFDUSxLQUFELEVBQVFDLElBQVIsRUFBY0MsUUFBZCxLQUEwQjtZQUMxRCxJQUFJRCxJQUFJLEtBQUssUUFBVEEsSUFBcUJBLElBQUksS0FBSyxTQUFsQyxFQUE2QztjQUN6QyxPQUFPLEdBQUdQLE1BQU0sSUFBSVEsUUFBUSxFQUE1QjtZQURKLE9BRU8sSUFBSUQsSUFBSSxLQUFLLGFBQWIsRUFBNEI7Y0FDL0IsTUFBTTtnQkFBQ0E7Y0FBRCxJQUFTRSxlQUFTekIsR0FBVHlCLENBQWFkLEdBQWJjLENBQWY7O2NBQ0EsT0FBTyxHQUFHRixJQUFJLEdBQUdDLFFBQVEsRUFBekI7WUFDSDs7WUFDRDFCLE9BQU8sQ0FBQzRCLElBQVI1QixDQUFhLDZDQUE2Q1IsTUFBTSxHQUFoRVEsRUFBcUV3QixLQUFyRXhCO1VBUFUsRUFBZDtRQVNIO1FBRUQ7Ozs7O1FBR0E2QixXQUFXLENBQUNDLEVBQUQsRUFBVztVQUNsQixJQUFJLEtBQUssU0FBVCxFQUFvQjtZQUNoQixNQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVRELENBQTBCLHFCQUFxQixLQUFLLE9BQU8sSUFBM0RBLEVBQWlFLENBQWpFQSxDQUFqQjtZQUNBRCxRQUFRLElBQUlDLFFBQVEsQ0FBQ0UsV0FBVEYsQ0FBcUJELFFBQXJCQyxDQUFaRDtVQUNIOztVQUVELE1BQU1JLEdBQUcsR0FBR0gsUUFBUSxDQUFDSSxhQUFUSixDQUF1QixPQUF2QkEsQ0FBWjtVQUNBRyxHQUFHLENBQUNFLFdBQUpGLENBQWdCSCxRQUFRLENBQUNNLGNBQVROLENBQXdCLEtBQUssTUFBN0JBLENBQWhCRztVQUVBTCxFQUFFLElBQUlLLEdBQUcsQ0FBQ0ksWUFBSkosQ0FBaUIsSUFBakJBLEVBQXVCTCxFQUF2QkssQ0FBTkw7VUFDQUUsUUFBUSxDQUFDUSxvQkFBVFIsQ0FBOEIsTUFBOUJBLEVBQXNDLENBQXRDQSxFQUF5Q0ssV0FBekNMLENBQXFERyxHQUFyREg7VUFFQSxLQUFLLFNBQUwsR0FBaUIsSUFBakI7UUFDSDs7TUF4RFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNKZDs7TUFDQTs7TUFFQSxNQUFNUyxRQUFOLENBQWM7UUFDVixZQUFrRCxJQUFJQyxHQUFKLEVBQWxEOztRQUVBQyxRQUFRLENBQUNuRCxNQUFELEVBQWlCd0IsS0FBakIsRUFBOEI7VUFDbEMsSUFBSSxLQUFLLFNBQUwsQ0FBZWpCLEdBQWYsQ0FBbUJQLE1BQW5CLENBQUosRUFBZ0M7VUFDaEMsTUFBTVksTUFBTSxHQUFHWSxLQUFLLEdBQUcsSUFBSTRCLGVBQUosQ0FBaUJwRCxNQUFqQixFQUF5QndCLEtBQXpCLENBQUgsR0FBcUMsSUFBSTZCLFdBQUosQ0FBYXJELE1BQWIsQ0FBekQ7VUFDQSxLQUFLLFNBQUwsQ0FBZXNELEdBQWYsQ0FBbUJ0RCxNQUFuQixFQUEyQlksTUFBM0I7VUFDQSxPQUFPQSxNQUFQO1FBQ0g7O1FBRURMLEdBQUcsQ0FBQ1AsTUFBRCxFQUFlO1VBQ2QsT0FBTyxLQUFLLFNBQUwsQ0FBZU8sR0FBZixDQUFtQlAsTUFBbkIsQ0FBUDtRQUNIOztRQUVEVSxHQUFHLENBQUNWLE1BQUQsRUFBZTtVQUNkLE9BQU8sS0FBSyxTQUFMLENBQWVVLEdBQWYsQ0FBbUJWLE1BQW5CLENBQVA7UUFDSDs7TUFoQlM7TUFtQlA7OztNQUFXLE1BQU1ZLE1BQU0sR0FBRyxJQUFJcUMsUUFBSixFQUFmLEVBRWxCOzs7TUFDQzNCLFVBQWtCLENBQUNpQyxrQkFBbkJqQyxHQUF3Q1YsTUFBeENVOzs7Ozs7Ozs7Ozs7Ozs7OztNQ3pCRDs7TUFDQTtNQUVPOzs7TUFBVSxNQUNYK0IsUUFEVyxTQUNNeEQsWUFETixDQUNZO1FBQ2YsSUFBTmlCLE1BQU07VUFDTixPQUFPLElBQVA7UUFDSDtRQUVEOzs7Ozs7OztRQU1TOztRQUNDLElBQU5kLE1BQU07VUFDTixPQUFPLEtBQUssT0FBWjtRQUNIO1FBRUQ7Ozs7Ozs7O1FBTUEsV0FBVyxDQUFYOztRQUNXLElBQVB3RCxPQUFPO1VBQ1AsT0FBTyxLQUFLLFFBQVo7UUFDSDtRQUVEOzs7Ozs7OztRQU1TOztRQUNHLElBQVJ0QixRQUFRO1VBQ1IsT0FBTyxLQUFLLFNBQVo7UUFDSDtRQUVEOzs7Ozs7O1FBS1EsSUFBSnVCLElBQUk7VUFDSixNQUFNRCxPQUFPLEdBQUcsS0FBSyxRQUFMLEdBQWdCLFlBQVksS0FBSyxRQUFRLEVBQXpDLEdBQThDLEVBQTlEO1VBQ0EsT0FBTyxHQUFHLEtBQUssU0FBUyxHQUFHQSxPQUFPLEVBQWxDO1FBQ0g7O1FBRUR6RCxZQUFZbUMsUUFBWm5DLEVBQTRCO1VBQ3hCO1VBQ0EsS0FBSyxPQUFMLEdBQWVPLGtCQUFRSSxHQUFSSixDQUFZNEIsUUFBWjVCLENBQWY7O1VBRUEsS0FBSyxTQUFMLEdBQWlCLENBQUMsTUFBSztZQUNuQixJQUFJLE9BQU9vRCxPQUFQLEtBQW1CLFFBQXZCLEVBQWlDO2NBQzdCLE1BQU0vQixLQUFLLEdBQUdPLFFBQVEsQ0FBQ1AsS0FBVE8sQ0FBZSxHQUFmQSxDQUFkO2NBQ0EsTUFBTWIsR0FBRyxHQUFHTSxLQUFLLENBQUMsQ0FBRCxDQUFMQSxDQUFTZ0MsVUFBVGhDLENBQW9CLEdBQXBCQSxJQUEyQixHQUFHQSxLQUFLLENBQUNpQyxLQUFOakMsRUFBYSxJQUFJQSxLQUFLLENBQUNpQyxLQUFOakMsRUFBYSxFQUE1REEsR0FBaUVBLEtBQUssQ0FBQ2lDLEtBQU5qQyxFQUE3RTtjQUNBLE1BQU1rQyxPQUFPLEdBQUdsQyxLQUFLLENBQUNFLElBQU5GLENBQVcsR0FBWEEsQ0FBaEI7Y0FDQSxPQUFPLE9BQU9OLEdBQUcsT0FBT3dDLE9BQU8sTUFBL0I7WUFDSDs7WUFFRCxJQUFJO2NBQUNDO1lBQUQsSUFBUSxLQUFLLE9BQWpCO1lBQ0FBLEdBQUcsR0FBR0EsR0FBRyxDQUFDQyxLQUFKRCxDQUFVLENBQVZBLEVBQWFBLEdBQUcsQ0FBQ0UsTUFBSkYsR0FBYSxDQUExQkEsQ0FBTkEsQ0FUbUIsQ0FTaUI7O1lBQ3BDLE9BQU8sR0FBR0EsR0FBRyxNQUFiO1VBVmEsSUFBakI7UUFZSDtRQUVEOzs7OztRQUdBN0QsTUFBTTtVQUNGLEtBQUssUUFBTDtVQUNBLEtBQUtDLE9BQUwsQ0FBYSxRQUFiO1FBQ0g7O01BeEV3QiIsIm5hbWVzIjpbIkRlcGVuZGVuY2llc1N0eWxlcyIsIkV2ZW50cyIsImVsZW1lbnRzIiwiY29uc3RydWN0b3IiLCJidW5kbGUiLCJjaGFuZ2UiLCJ0cmlnZ2VyIiwiU2V0IiwicmVjdXJzaXZlIiwiaWQiLCJidW5kbGVzIiwiaGFzIiwiY29uc29sZSIsImxvZyIsImdldCIsIm5hbWUiLCJzdHlsZXMiLCJyZWdpc3RyeSIsImVuZ2luZSIsImFkZCIsIm9uIiwiZGVwZW5kZW5jaWVzIiwicGFja2FnZSIsImZvckVhY2giLCJkZXBlbmRlbmN5IiwicGtnIiwiZ2xvYmFsVGhpcyIsIl9fYXBwX3BhY2thZ2UiLCJ2YWx1ZSIsImFwcGVuZGVkIiwibW9kdWxlIiwic3BsaXQiLCJwb3AiLCJqb2luIiwicmVnZXhwIiwicmVwbGFjZSIsIm1hdGNoIiwiaG9zdCIsInJlc291cmNlIiwicHJvamVjdHMiLCJ3YXJuIiwiYXBwZW5kVG9ET00iLCJpcyIsInByZXZpb3VzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlQ2hpbGQiLCJjc3MiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsInNldEF0dHJpYnV0ZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiUmVnaXN0cnkiLCJNYXAiLCJyZWdpc3RlciIsIkxlZ2FjeVN0eWxlcyIsIlYxU3R5bGVzIiwic2V0IiwiYmV5b25kTGVnYWN5U3R5bGVzIiwidmVyc2lvbiIsImhyZWYiLCJwcm9jZXNzIiwic3RhcnRzV2l0aCIsInNoaWZ0Iiwic3VicGF0aCIsInVyaSIsInNsaWNlIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJkZXBlbmRlbmNpZXMtc3R5bGVzLnRzIiwibGVnYWN5LnRzIiwicmVnaXN0cnkudHMiLCJ2MS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdfQ==