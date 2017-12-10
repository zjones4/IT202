(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';





















var _app = require('./modules/app.js');var _app2 = _interopRequireDefault(_app);
var _features = require('./modules/features.js');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*!
                                                                                                                                                *
                                                                                                                                                *  Web Starter Kit
                                                                                                                                                *  Copyright 2015 Google Inc. All rights reserved.
                                                                                                                                                *
                                                                                                                                                *  Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                *  you may not use this file except in compliance with the License.
                                                                                                                                                *  You may obtain a copy of the License at
                                                                                                                                                *
                                                                                                                                                *    https://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                *
                                                                                                                                                *  Unless required by applicable law or agreed to in writing, software
                                                                                                                                                *  distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                *  See the License for the specific language governing permissions and
                                                                                                                                                *  limitations under the License
                                                                                                                                                *
                                                                                                                                                */ /* eslint-env browser */ // jshint esversion: 6
(function () {'use strict'; // Check to make sure service workers are supported in the current browser,
  // and that the current page is accessed from a secure origin. Using a
  // service worker from an insecure origin will trigger JS console errors. See
  // http://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features
  var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
  window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
  window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)); // if ('serviceWorker' in navigator &&
  //     (window.location.protocol === 'https:' || isLocalhost)) {
  //   navigator.serviceWorker.register('service-worker.js')
  //   .then(function(registration) {
  //     // updatefound is fired if service-worker.js changes.
  //     registration.onupdatefound = function() {
  //       // updatefound is also fired the very first time the SW is installed,
  //       // and there's no need to prompt for a reload at that point.
  //       // So check here to see if the page is already controlled,
  //       // i.e. whether there's an existing service worker.
  //       if (navigator.serviceWorker.controller) {
  //         // The updatefound event implies that registration.installing is set:
  //         // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
  //         var installingWorker = registration.installing;
  //         installingWorker.onstatechange = function() {
  //           switch (installingWorker.state) {
  //             case 'installed':
  //               // At this point, the old content will have been purged and the
  //               // fresh content will have been added to the cache.
  //               // It's the perfect time to display a "New content is
  //               // available; please refresh." message in the page's interface.
  //               break;
  //             case 'redundant':
  //               throw new Error('The installing ' +
  //                               'service worker became redundant.');
  //             default:
  //               // Ignore
  //           }
  //         };
  //       }
  //     };
  //   }).catch(function(e) {
  //     console.error('Error during service worker registration:', e);
  //   });
  // }
  // Your custom JavaScript goes here
  var app = new _app2.default();document.addEventListener('DOMContentLoaded', function (e) {if (!(0, _features.hasPrerequisites)()) {
      // TODO make this something nicer than an alert, e.g. a panel in the app
      window.alert('This browser is missing some required features');
      return;
    }
    app.install();
    app.run();
  });

})();

},{"./modules/app.js":2,"./modules/features.js":6}],2:[function(require,module,exports){
'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 Copyright 2016 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 */

var _cart = require('./cart.js');var _cart2 = _interopRequireDefault(_cart);
var _idbStorage = require('./idb-storage.js');var _idbStorage2 = _interopRequireDefault(_idbStorage);

var _cartView = require('./cart-view.js');var _cartView2 = _interopRequireDefault(_cartView);
var _shopView = require('./shop-view.js');var _shopView2 = _interopRequireDefault(_shopView);
var _paymentForm = require('./payment-form.js');var _paymentForm2 = _interopRequireDefault(_paymentForm);
var _paymentApi = require('./payment-api.js');var _paymentApi2 = _interopRequireDefault(_paymentApi);
var _confirmationView = require('./confirmation-view.js');var _confirmationView2 = _interopRequireDefault(_confirmationView);
var _headerController = require('./header-controller.js');var _headerController2 = _interopRequireDefault(_headerController);
var _urlTools = require('./url-tools.js');
var _features = require('./features.js');var features = _interopRequireWildcard(_features);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var

App = function () {

  function App() {_classCallCheck(this, App);
    this._storage = features.hasIndexedDB ? new _idbStorage2.default() : new _idbStorage2.default();
    this._cart = new _cart2.default(this._storage, this._cartChanged.bind(this));
    this._cartView = new _cartView2.default(this._cart);
    this._shopView = new _shopView2.default(this._cart);
    this._paymentForm = new _paymentForm2.default(this._cart);
    this._confirmationView = new _confirmationView2.default();
    this._header = new _headerController2.default();
    this._hashChangeListener = this._handleHashChange.bind(this);
  }_createClass(App, [{ key: 'install', value: function install()

    {
      window.addEventListener('hashchange', this._hashChangeListener);
      this._shopView.install();
      this._cartView.install();
    } }, { key: 'uninstall', value: function uninstall()

    {
      window.removeEventListener('hashchange', this._hashChangeListener);
    }

    // Manage element visibility (hide the cart when store is selected and vice versa)
  }, { key: 'run', value: function run()













































    {var _this = this;
      (0, _urlTools.replaceLocationHash)('shop');
      this._cart.load().then(function () {
        _this._shopView.render();
        _this._cartView.render();
        _this._updateCartCountDisplay();
        _this.selection = 'shop';
      });
    }

    // Handle hashChange, manage history (#store or #cart, maybe #pay)
  }, { key: '_handleHashChange', value: function _handleHashChange(event) {
      if (!event.newURL) return;
      var index = event.newURL.lastIndexOf('#');
      if (index < 0) return;
      var sel = event.newURL.substr(index + 1);
      this.selection = sel;
    } }, { key: '_cartChanged', value: function _cartChanged(

    details) {
      if (details.action === 'load') return;
      this._updateCartCountDisplay();
      this._cartView.render();
      this._cart.save();
    } }, { key: '_updateCartCountDisplay', value: function _updateCartCountDisplay()

    {
      this._header.count = this._cart.count;
    }
    // Testing hooks
  }, { key: 'selection', set: function set(sel) {var _this2 = this;switch (sel) {case 'shop':case 'cart':this._header.selection = sel;this._shopView.visible = sel === 'shop';this._cartView.visible = sel !== 'shop';this._paymentForm.visible = false;this._confirmationView.visible = false;break;case 'pay':this._header.selection = 'cart';this._cartView.visible = true;this._confirmationView.visible = false;this._paymentForm.visible = false;var _promise = void 0; // TODO Android Pay 3.1 - Check for PaymentRequest availability
          if (window.PaymentRequest) {var api = new _paymentApi2.default();_promise = api.checkout(this._cart);} else {this._paymentForm.visible = true;_promise = this._paymentForm.checkout(this._cart);}_promise.then(function () {_this2._cart.reset();(0, _urlTools.replaceLocationHash)('shop');_this2.selection = 'shop';alert('Thanks for shopping! Payment successfully complete :)');}).catch(function () {alert('Sorry, payment failed :(');});break;case 'confirm':this._header.selection = 'cart';this._cartView.visible = false;this._paymentForm.visible = false;this._confirmationView.visible = true;break;}} }, { key: 'headerController', set: function set(obj) {this._header = obj;
    } }, { key: 'cart', get: function get()

    {
      return this._cart;
    } }, { key: 'storage', get: function get()

    {
      return this._storage;
    }, set: function set(

    adaptor) {
      this._storage = adaptor;
      this._cart.storage = adaptor;
    } }]);return App;}();exports.default = App;

},{"./cart-view.js":3,"./cart.js":4,"./confirmation-view.js":5,"./features.js":6,"./header-controller.js":7,"./idb-storage.js":8,"./payment-api.js":10,"./payment-form.js":11,"./shop-view.js":14,"./url-tools.js":16}],3:[function(require,module,exports){
'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();















var _view = require('./view.js');var _view2 = _interopRequireDefault(_view);
var _urlTools = require('./url-tools.js');
var _products = require('./products.js');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Copyright 2016 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */var CartView = function (_View) {_inherits(CartView, _View);function CartView(cart) {var containerId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'cart';_classCallCheck(this, CartView);var _this = _possibleConstructorReturn(this, (CartView.__proto__ || Object.getPrototypeOf(CartView)).call(this, containerId));_this._cart = cart;_this._element = 'tr';_this._elementClass = 'product';_this._clickHandler = null;_this._tbody = _this._container.querySelector('tbody');_this._checkoutBtn = document.getElementById('checkoutBtn');return _this;}_createClass(CartView, [{ key: 'install', value: function install() {
      this._clickHandler = this._handleClick.bind(this);
      this._container.addEventListener('click', this._clickHandler, true);
      // Checkout button switches hash to "pay", will cause the form to open
      this._checkoutBtn.addEventListener('click', this._goToPayment.bind(this));
    } }, { key: 'render', value: function render()

    {
      // Remove existing products
      var itemRows = this._tbody.querySelectorAll(this.itemSelector);
      for (var i = 0; i < itemRows.length; i++) {
        this._tbody.removeChild(itemRows[i]);
      }var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {
        for (var _iterator = this._cart.cart[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var item = _step.value;
          var product = (0, _products.findProduct)(item.sku);
          var placeholder = document.createElement('tbody');
          placeholder.innerHTML = '<tr class="product" data-sku="' + product.sku + '">\n        <td class="mdl-data-table__cell-non-numeric">' +
          product.title + '</td>\n        <td>' +
          item.quantity + '</td>\n        <td>$' +
          product.price + '</td>\n        <td><button class="mdl-button mdl-button--colored mdl-js-button\n              mdl-js-ripple-effect mdl-button--accent delete"\n              data-sku="' +


          product.sku + '" data-action="remove">\n              <i class="material-icons">delete</i>remove</button>\n        </td>\n      </tr>';



          this._tbody.appendChild(placeholder.firstElementChild); // WARN: no ie8
        }
        // Add the total price
      } catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}this.updateTotal();
    } }, { key: 'updateTotal', value: function updateTotal()

    {
      document.getElementById('cart-total').innerText = '$' + this._cart.total;
    } }, { key: 'removeFromView', value: function removeFromView(

    sku) {
      var row = this._tbody.querySelector('tr[data-sku=' + sku + ']');
      if (row) {
        row.parentNode.removeChild(row);
      }
      this.updateTotal();
    } }, { key: '_goToPayment', value: function _goToPayment()

    {
      (0, _urlTools.pushLocationHash)('pay');
    } }, { key: '_handleClick', value: function _handleClick(

    event) {
      if (event.target.dataset) {
        var sku = event.target.dataset.sku;
        var action = event.target.dataset.action;
        if (sku && action == 'remove') {
          var product = this._cart.findItem(sku);
          this._cart.remove(product);
          this.removeFromView(sku);
        }
      }
    }

    // utility for unit testing (used in counting the number of elements)
  }, { key: 'itemSelector', get: function get() {
      return this._element + '.' + this._elementClass + '[data-sku]';
    } }, { key: 'cart', set: function set(

    cart) {
      this._cart = cart;
    } }]);return CartView;}(_view2.default);exports.default = CartView;

},{"./products.js":13,"./url-tools.js":16,"./view.js":17}],4:[function(require,module,exports){
'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.LineItem = exports.CART_EVENT = undefined;var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Copyright 2016 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   */

//jshint esversion: 6

var _products = require('./products.js');function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}

var CART_EVENT = exports.CART_EVENT = "cartchange";var

Cart = function () {
  function Cart(adaptor, changeCallback) {_classCallCheck(this, Cart);
    this.items = [];
    this._storage = adaptor;
    this._loading = false;
    this._callback = changeCallback; // used to report changes back to the app
  }_createClass(Cart, [{ key: 'findItem', value: function findItem(

    sku) {
      return this.items.find(function (item) {return item.sku === sku;});
    } }, { key: 'add', value: function add(

    product) {var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      if (quantity < 0 || !product) return null;
      var item = this.findItem(product.sku);
      if (item) {
        item.quantity += quantity;
      } else {
        item = new LineItem(product, quantity);
        this.items.push(item);
      }
      this._reportChange('add', product, quantity);
      return item;
    } }, { key: 'remove', value: function remove(

    product) {
      var index = this.items.findIndex(function (item) {return item.sku === product.sku;});
      if (index >= 0) {
        this.items.splice(index, 1);
      }
      this._reportChange('remove', product);
    } }, { key: 'change', value: function change(

    product, quantity) {
      var item = this.findItem(product.sku);
      if (quantity <= 0) {
        this.remove(item);
        this._reportChange('remove', product);
        return null;
      } else {
        item.quantity = quantity;
        this._reportChange('change', product, quantity);
        return item;
      }
    } }, { key: 'reset', value: function reset()

    {
      this.items = [];
      this._reportChange('reset');
    } }, { key: 'save', value: function save()

























    {
      if (!this._storage) return;
      return this._storage.save(this.items.map(function (item) {return item.savedValue;}));
    } }, { key: 'load', value: function load()

    {var _this = this;
      if (!this._storage) return;
      this._loading = true;
      return this._storage.load().then(function (loadedItems) {
        _this.items = loadedItems.map(function (s) {var li = new LineItem();li.savedValue = s;return li;});
      }).catch(function (e) {
        _this.items = [];
      }).then(function () {
        _this._loading = false;
        _this._reportChange('load');
        return _this.items;
      });
    } }, { key: '_reportChange', value: function _reportChange(

    action, product, quantity) {
      if (this._loading) return; // don't spam the app with events
      var details = { 'action': action, 'total': this.total };
      if (product) details.sku = product.sku;
      if (quantity) details.quantity = quantity;
      if (this._callback) this._callback(details);
    } }, { key: 'length', get: function get() {return this.items.length;} }, { key: 'count', get: function get() {var count = 0;var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {for (var _iterator = this.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var item = _step.value;count += item.quantity;}} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}return count;} }, { key: 'total', get: function get() {var total = 0;var _iteratorNormalCompletion2 = true;var _didIteratorError2 = false;var _iteratorError2 = undefined;try {for (var _iterator2 = this.items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {var item = _step2.value;total += item.total;}} catch (err) {_didIteratorError2 = true;_iteratorError2 = err;} finally {try {if (!_iteratorNormalCompletion2 && _iterator2.return) {_iterator2.return();}} finally {if (_didIteratorError2) {throw _iteratorError2;}}}return total;} }, { key: 'cart', get: function get() {return this.items;} }]);return Cart;}();exports.default = Cart;var


LineItem = exports.LineItem = function () {
  function LineItem(product, quantity) {_classCallCheck(this, LineItem);
    if (product == null) {
      this._sku = null;
      this._price = this._quantity = 0;
    } else {
      this._sku = product.sku;
      this._price = product.price;
      this._quantity = quantity;
    }
  }_createClass(LineItem, [{ key: 'sku', get: function get()

    {
      return this._sku;
    } }, { key: 'price', get: function get()

    {
      return this._price;
    } }, { key: 'total', get: function get()

    {
      return this._quantity * this._price;
    } }, { key: 'quantity', get: function get()

    {
      return this._quantity;
    }, set: function set(

    value) {
      this._quantity = value < 0 ? 0 : value;
    }

    // Only save minimal information (to conserve space & prevent spoofing)
  }, { key: 'savedValue', get: function get() {
      return { sku: this._sku, qty: this._quantity };
    }, set: function set(

    value) {
      var product = (0, _products.findProduct)(value.sku);
      if (!product) throw new Error('SKU not found: ' + value.sku);
      this._sku = value.sku;
      this._quantity = value.qty;
      this._price = product.price;
    } }, { key: 'storage', set: function set(

    adaptor) {
      this._storage = adaptor;
    } }]);return LineItem;}();

},{"./products.js":13}],5:[function(require,module,exports){
'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();















var _view = require('./view.js');var _view2 = _interopRequireDefault(_view);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  Copyright 2016 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */var ConfirmationView = function (_View) {_inherits(ConfirmationView, _View);function ConfirmationView() {var containerId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'confirmation';_classCallCheck(this, ConfirmationView);var _this = _possibleConstructorReturn(this, (ConfirmationView.__proto__ || Object.getPrototypeOf(ConfirmationView)).call(this, containerId));_this._requestData = '';_this._responseData = '';_this._requestDiv = document.getElementById('requestData');_this._responseDiv = document.getElementById('responseData'); // this._clickHandler = null;
    // this._checkoutBtn = document.getElementById('checkoutBtn');
    return _this;}_createClass(ConfirmationView, [{ key: 'install', value: function install() {// this._clickHandler = this._handleClick.bind(this);
      // this._container.addEventListener('click', this._clickHandler, true);
    } }, { key: 'render', value: function render()
    {
      this._requestDiv.innerText = this._requestData;
      this._responseDiv.innerText = this._responseData;
    } }, { key: 'requestData', set: function set(

    value) {
      this._requestData = value === null ? '' : value;
      this._render();
    } }, { key: 'responseData', set: function set(

    value) {
      this._responseData = value === null ? '' : value;
      this._render();
    } }]);return ConfirmationView;}(_view2.default);exports.default = ConfirmationView;

},{"./view.js":17}],6:[function(require,module,exports){
'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.















hasPrerequisites = hasPrerequisites;exports.






hasLocalStorage = hasLocalStorage;exports.



hasIndexedDB = hasIndexedDB;exports.



hasPaymentRequest = hasPaymentRequest; /*
                                       Copyright 2016 Google Inc.
                                       
                                       Licensed under the Apache License, Version 2.0 (the "License");
                                       you may not use this file except in compliance with the License.
                                       You may obtain a copy of the License at
                                       
                                           http://www.apache.org/licenses/LICENSE-2.0
                                       
                                       Unless required by applicable law or agreed to in writing, software
                                       distributed under the License is distributed on an "AS IS" BASIS,
                                       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                       See the License for the specific language governing permissions and
                                       limitations under the License.
                                       */function hasPrerequisites() {var hasStorage = hasLocalStorage() || hasIndexedDB(); // firstElementChild not in ie8
  var hasFirstElementChild = 'firstElementChild' in document;return hasStorage & hasFirstElementChild;}function hasLocalStorage() {return 'LocalStorage' in window;}function hasIndexedDB() {return 'indexedDB' in window;}function hasPaymentRequest() {return 'PaymentRequest' in window;}

},{}],7:[function(require,module,exports){
'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Copyright 2016 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

//jshint esversion: 6
var HeaderController = function () {

  function HeaderController() {var containerId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'headers';_classCallCheck(this, HeaderController);
    this._containerId = containerId;
    this._selection = 'shop';
    this._count = 0;
  }_createClass(HeaderController, [{ key: 'selection', get: function get()

    {
      return this._selection;
    }, set: function set(

    newValue) {
      if (newValue != 'shop' && newValue != 'cart') return;
      if (newValue == this._selection) return;
      this._selection = newValue;

      // Now update the UI
      var container = document.getElementById(this._containerId);
      // Only two kinds of links, so flip active
      var links = container.querySelectorAll('a.mdl-navigation__link');
      for (var i = 0; i < links.length; i++) {
        links[i].classList.toggle('is-active');
      }
    } }, { key: 'count', get: function get()

    {
      return this._count;
    }, set: function set(

    newCount) {
      if (this._count == newCount) return;
      // TODO use a badge instead
      var label = newCount === 0 ? '' : ' (' + newCount + ' items)';
      this._count = newCount;
      var spans = document.querySelectorAll('#' + this._containerId + ' a[href="#cart"]');
      for (var i = 0; i < spans.length; i++) {
        spans[i].innerText = 'Cart' + label;
      }
    } }]);return HeaderController;}();exports.default = HeaderController;

},{}],8:[function(require,module,exports){
'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 Copyright 2016 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 */

var _idb = require('idb');var idb = _interopRequireWildcard(_idb);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}

var CART_STORE = 'cart';
var RW = 'readwrite';var

IDBStorage = function () {

  function IDBStorage() {var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'mfs-cart-items';_classCallCheck(this, IDBStorage);
    this._id = id;
    this._open();
  }

  /* Takes an array of items and writes JSON to local storage */_createClass(IDBStorage, [{ key: 'save', value: function save(
    items) {
      return this._dbPromise.then(function (db) {
        var tx = db.transaction(CART_STORE, RW);
        var store = tx.objectStore(CART_STORE);
        return store.clear().then(function () {
          var addAll = items.map(function (item) {
            return store.add({ sku: item.sku, qty: item.qty });
          });
          return Promise.all(addAll);
        }).then(function () {
          return tx.complete;
        });
      });
    } }, { key: 'load', value: function load()

    {
      return this._dbPromise.then(function (db) {
        return db.transaction(CART_STORE, RW).
        objectStore(CART_STORE).
        getAll();
      });
    } }, { key: 'delete', value: function _delete()

    {

    } //    localStorage.removeItem(this._id);

    // Returns a promise with the total number of records saved
  }, { key: 'count', value: function count() {
      return this._dbPromise.then(function (db) {
        var tx = db.transaction(CART_STORE);
        return tx.objectStore(CART_STORE).count();
      });
    }

    // Testing use only, will close the dabase but renders the adaptor unusable
  }, { key: '_close', value: function _close() {var _this = this;
      return this._dbPromise.then(function (db) {
        var closePromise = db.close();
        _this._dbPromise = null;
        return closePromise;
      });
    } }, { key: '_open', value: function _open()

    {
      return this._dbPromise = idb.open(this._id, 1, function (upgradeDB) {
        upgradeDB.createObjectStore(CART_STORE, { autoIncrement: true });
      });
    }

    // testing hooks so we can test w/o wrecking the stored data
  }, { key: 'key', set: function set(value) {var _this2 = this;
      if (value === this._id) return;
      this._close().then(function () {
        _this2._id = value;
        _this2._open();
      });
    }, get: function get()

    {
      return this._id;
    } }, { key: 'storage', get: function get()

    {
      return this._dbPromise;
    } }]);return IDBStorage;}();exports.default = IDBStorage;

},{"idb":18}],9:[function(require,module,exports){
'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.default =



















sendToServer; /*
              Copyright 2016 Google Inc.
              
              Licensed under the Apache License, Version 2.0 (the "License");
              you may not use this file except in compliance with the License.
              You may obtain a copy of the License at
              
                  http://www.apache.org/licenses/LICENSE-2.0
              
              Unless required by applicable law or agreed to in writing, software
              distributed under the License is distributed on an "AS IS" BASIS,
              WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
              See the License for the specific language governing permissions and
              limitations under the License.
              */ /*
                  * Simple server fetch function that only send a request to /checkout
                  * and returns `true` or throws an exception.
                  */function sendToServer(data) {return fetch('/checkout/', { method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }).then(function (res) {if (res.status !== 200) {throw new Error('Payment failure (id ' + res.status + ')');}return true;});}

},{}],10:[function(require,module,exports){
'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 Copyright 2016 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 */

var _merchantServer = require('./merchant-server.js');var _merchantServer2 = _interopRequireDefault(_merchantServer);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}

var SHIPPING_OPTIONS = {
  us: [
  {
    id: 'standard',
    label: 'Standard Shipping',
    price: 0 },

  {
    id: 'express',
    label: 'Express Shipping',
    price: 10 }],


  international: [
  {
    id: 'international',
    label: 'International Shipping',
    price: 15 }] };var




PaymentAPIWrapper = function () {function PaymentAPIWrapper() {_classCallCheck(this, PaymentAPIWrapper);}_createClass(PaymentAPIWrapper, [{ key: 'checkout',

    /*
                                                                                                                                                             * Given a cart set up with an order, gets payment authorization.
                                                                                                                                                             * Returns a promise that resolves when payment is complete, this
                                                                                                                                                             * has a data object you can pass to the back-end payment server.
                                                                                                                                                             */value: function checkout(
    cart) {
      var request = this.buildPaymentRequest(cart);
      var response = void 0;
      // Show UI then continue with user payment info

      // TODO Android PAY 7.1 - display the PaymentRequest
      return request.show().
      then(function (r) {
        // The UI will show a spinner to the user until
        // `request.complete()` is called.
        response = r;
        var data = r.toJSON();
        console.log(data);
        return data;
      }).
      then(function (data) {
        return (0, _merchantServer2.default)(data);
      }).
      then(function () {
        response.complete('success');
      }).
      catch(function (e) {
        response.complete('fail');
        console.error(e);
      });


    }

    /*
       * Creates a PaymentRequest object including the event handlers used to
       * update the payment details as the user makes choices.
       */ }, { key: 'buildPaymentRequest', value: function buildPaymentRequest(
    cart) {var _this = this;
      // Supported payment instruments
      var supportedInstruments = [

      // TODO Android PAY 4.1 - add support for Android Pay
      {
        supportedMethods: ['https://android.com/pay'],
        data: {
          environment: 'TEST',
          // Credit Cards allowed via Android Pay
          allowedCardNetworks: ['AMEX', 'MASTERCARD', 'VISA', 'DISCOVER'],
          paymentMethodTokenizationParameters: {
            tokenizationType: 'NETWORK_TOKEN',
            parameters: {
              'publicKey': 'BC9u7amr4kFD8qsdxnEfWV7RPDR9v4gLLkx3jfyaGOvxBoEuLZKE0Tt5O/2jMMxJ9axHpAZD2Jhi4E74nqxr944=' } } } },






      // TODO Android PAY 5.1 - add support for Basic-card


      {
        supportedMethods: ['https://android.com/pay'],
        data: {
          environment: 'TEST',
          // Credit Cards allowed via Android Pay
          allowedCardNetworks: ['AMEX', 'MASTERCARD', 'VISA', 'DISCOVER'],
          paymentMethodTokenizationParameters: {
            tokenizationType: 'NETWORK_TOKEN',
            parameters: {
              'publicKey': 'BC9u7amr4kFD8qsdxnEfWV7RPDR9v4gLLkx3jfyaGOvxBoEuLZKE0Tt5O/2jMMxJ9axHpAZD2Jhi4E74nqxr944=' } } } }];







      // Payment options
      var paymentOptions = {

        // TODO Android PAY 8.1 - allow shipping options
        requestShipping: true

        // TODO Android PAY 10.1 - Add payment options
        ,
        requestPayerEmail: true,
        requestPayerPhone: true,
        requestPayerName: true };



      var shippingOptions = [];
      var selectedOption = null;

      var details = this.buildPaymentDetails(cart, shippingOptions, selectedOption);

      // TODO Android PAY 3.2 - initialize the PaymentRequest object
      var request = new PaymentRequest(supportedInstruments, details, paymentOptions);


      // TODO Android PAY 9.1 - add `shippingaddresschange` event handler

      // When user selects a shipping address, add shipping options to match
      request.addEventListener('shippingaddresschange', function (e) {
        e.updateWith(function (_) {
          // Get the shipping options and select the least expensive
          shippingOptions = _this.optionsForCountry(request.shippingAddress.country);
          selectedOption = shippingOptions[0].id;
          var details = _this.buildPaymentDetails(cart, shippingOptions, selectedOption);
          return Promise.resolve(details);
        }());
      });

      // TODO Android PAY 9.2 - add `shippingoptionchange` event handler

      // When user selects a shipping option, update cost, etc. to match
      request.addEventListener('shippingoptionchange', function (e) {
        e.updateWith(function (_) {
          selectedOption = request.shippingOption;
          var details = _this.buildPaymentDetails(cart, shippingOptions, selectedOption);
          return Promise.resolve(details);
        }());
      });


      return request;
    }

    /*
       * Creates the PaymentDetails dictionary inside the PaymentRequest.
       * This can change as the user selects shipping options.
       */ }, { key: 'buildPaymentDetails', value: function buildPaymentDetails(
    cart, shippingOptions, shippingOptionId) {

      // TODO Android PAY 6.1 - define the display items
      var displayItems = cart.cart.map(function (item) {
        return {
          label: item.sku + ': ' + item.quantity + 'x $' + item.price,
          amount: { currency: 'USD', value: String(item.total) } };

      });
      var total = cart.total;

      // TODO Android PAY 8.3 - allow shipping options
      var displayedShippingOptions = [];
      if (shippingOptions.length > 0) {
        var selectedOption = shippingOptions.find(function (option) {
          return option.id === shippingOptionId;
        });
        displayedShippingOptions = shippingOptions.map(function (option) {
          return {
            id: option.id,
            label: option.label,
            amount: { currency: 'USD', value: String(option.price) },
            selected: option.id === shippingOptionId };

        });
        if (selectedOption) total += selectedOption.price;
      }


      var details = {
        displayItems: displayItems,
        total: {
          label: 'Total due',
          amount: { currency: 'USD', value: String(total) }

          // TODO Android PAY 8.2 - allow shipping options
        },
        shippingOptions: displayedShippingOptions };


      return details;
    }

    /*
       * Utility function to extract the correct shipping options for a country.
       */ }, { key: 'optionsForCountry', value: function optionsForCountry(
    country) {
      country = country.toLowerCase();
      if (!country || !SHIPPING_OPTIONS.hasOwnProperty(country)) {
        country = 'international';
      }
      var options = SHIPPING_OPTIONS[country];
      // Sort by price, lowest first
      options.sort(function (a, b) {
        return a.price - b.price;
      });
      return options;
    } }]);return PaymentAPIWrapper;}();exports.default = PaymentAPIWrapper;

},{"./merchant-server.js":9}],11:[function(require,module,exports){
'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();















var _view = require('./view.js');var _view2 = _interopRequireDefault(_view);
var _merchantServer = require('./merchant-server.js');var _merchantServer2 = _interopRequireDefault(_merchantServer);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           Copyright 2016 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           */var PaymentForm = function (_View) {_inherits(PaymentForm, _View);function PaymentForm(cart, confirmationView) {var containerId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'payment';_classCallCheck(this, PaymentForm);var _this = _possibleConstructorReturn(this, (PaymentForm.__proto__ || Object.getPrototypeOf(PaymentForm)).call(this, containerId));_this._checkoutForm = document.getElementById('payment_form');_this._cart = cart;_this._confirmationView = confirmationView;_this._promise = null;return _this;} /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Performs the checkout using the form. Returns a promise that resolves when
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * the user checks out.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */_createClass(PaymentForm, [{ key: 'checkout', value: function checkout() {var _this2 = this; // TODO how do we handle cart abandonment?
      var self = this;
      this.visible = true;
      this._promise = new Promise(function (resolve, reject) {
        _this2._checkoutForm.addEventListener('submit', function temp(event) {
          event.preventDefault();
          var data = new FormData(event.target);
          self._showRequest(data);
          return Promise.resolve(data).
          then(_merchantServer2.default).
          then(function (json) {
            self._showResponse(json);
            resolve(json);
          }).
          catch(function (e) {return reject(e);}).
          then(function () {return self._checkoutForm.removeEventListener('submit', temp);});
        });
      });
      return this._promise;
    } }, { key: 'abort', value: function abort()

    {
      this._promise.reject('aborted');
    } }, { key: '_showRequest', value: function _showRequest(

    formData) {
      if (this._confirmationView) {
        this._confirmationView.requestData = this._toJSON(formData);
      }
    } }, { key: '_showResponse', value: function _showResponse(

    json) {
      if (this._confirmationView) {
        this._confirmationView.responseData = json;
      }
    } }, { key: '_toJSON', value: function _toJSON(

    formData) {
      var obj = {};var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {
        for (var _iterator = formData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var entry = _step.value;
          obj[entry.key] = entry.value;
        }} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}
      return JSON.stringify(obj);
    } }]);return PaymentForm;}(_view2.default);exports.default = PaymentForm;

},{"./merchant-server.js":9,"./view.js":17}],12:[function(require,module,exports){
'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Copyright 2016 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

//jshint esversion: 6
var
Product = function () {

  function Product(sku, title, price, image) {var description = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';_classCallCheck(this, Product);
    this._sku = sku;
    this._title = title;
    this._price = price;
    this._image = image;
    this._description = description;
  }_createClass(Product, [{ key: 'sku', get: function get()

    {
      return this._sku;
    } }, { key: 'title', get: function get()

    {
      return this._title;
    } }, { key: 'price', get: function get()

    {
      return this._price;
    } }, { key: 'image', get: function get()

    {
      return this._image;
    } }, { key: 'description', get: function get()

    {
      return this._description;
    } }]);return Product;}();exports.default = Product;

},{}],13:[function(require,module,exports){
'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.products = undefined;exports.








































findProduct = findProduct;var _product = require('./product.js');var _product2 = _interopRequireDefault(_product);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //   constructor (sku, title, price, image, description='') {
// Normally you would get these from a server
var products = exports.products = [new _product2.default('BarrelChair', 'Barrel Chair', 100.00, 'BarrelChair.jpg', 'A beautiful chair made of upcycled barrel staves'), new _product2.default('C10', 'C10 Chair', 100.00, 'C10.jpg', 'A colorful chair with modern style and flair'), new _product2.default('Cl2', 'CL2 Chair', 100.00, 'Cl2.jpg', 'A comfortable extended chair made for lounging'), new _product2.default('CP03_blue', 'CP03 Chair', 100.00, 'CP03_blue.jpg', 'A wide cushion you can stack or move around the floor'), new _product2.default('CPC_RECYCLED', 'CPC Upcycled', 100.00, 'CPC_RECYCLED.jpg', 'A simple chair with a seat of recycled plastic'), new _product2.default('CPFS', 'CPFS', 100.00, 'CPFS.jpg', 'A footstool mader to complement the CPFS chair'), new _product2.default('CPO2_red', 'CPO2', 100.00, 'CPO2_red.jpg', 'A narrow cushion, smaller than CP03, and quite comfortable'), new _product2.default('CPT', 'CPT Table', 100.00, 'CPT.jpg', 'A perfect table for outdoors, has a hole for an umbrella'), new _product2.default('CS1', 'CS1 Sofa', 100.00, 'CS1.jpg', 'A soft, stylish, and colorful sofa. Perfect for your home')]; /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  Copyright 2016 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */function findProduct(sku) {var searchRange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : products;return searchRange.find(function (product) {return product.sku === sku;});}

},{"./product.js":12}],14:[function(require,module,exports){
'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();















var _view = require('./view.js');var _view2 = _interopRequireDefault(_view);
var _products = require('./products.js');
var _snackbar = require('./snackbar.js');var _snackbar2 = _interopRequireDefault(_snackbar);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  Copyright 2016 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */var ShopView = function (_View) {_inherits(ShopView, _View);function ShopView(cart) {var productSelection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _products.products;var containerId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'shop';_classCallCheck(this, ShopView);var _this = _possibleConstructorReturn(this, (ShopView.__proto__ || Object.getPrototypeOf(ShopView)).call(this, containerId, true));_this._cart = cart;_this._products = productSelection;_this._element = 'div';_this._elementClass = 'product';_this._addHandler = null;return _this;}_createClass(ShopView, [{ key: 'install', value: function install() {// Capture add events (clicks) as they bubble up. Only add once.
      this._addHandler = this._handleProductClick.bind(this);
      this._container.addEventListener('click', this._addHandler, false);
    } }, { key: 'render', value: function render()

    {
      this._container.innerHTML = ''; // remove all children
      var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {for (var _iterator = this._products[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var product = _step.value;
          var placeholder = document.createElement('div');
          placeholder.innerHTML = '<div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card product">\n        <div class="mdl-card__media">\n          <img class="article-image" src=" images/products/' +

          product.image + '" border="0" alt="">\n        </div>\n        <div class="mdl-card__title">\n          <h2 class="mdl-card__title-text">' +


          product.title + '</h2>\n        </div>\n        <div class="mdl-card__supporting-text">\n          ' +


          product.description + '\n        </div>\n        <div class="mdl-card__actions mdl-card--border">\n          <button class="mdl-button mdl-button--colored mdl-js-button\n            mdl-js-ripple-effect mdl-button--accent add-to-cart"\n            data-sku="' +




          product.sku + '">\n            <i class="material-icons">add_shopping_cart</i>Add to Cart\n          </button>\n        </div>\n      </div>';




          this._container.appendChild(placeholder.firstElementChild); // WARN: no ie8
        }} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}
    } }, { key: '_handleProductClick', value: function _handleProductClick(

    event) {
      event.preventDefault();
      // MDL inserts an animated span as a child of the button; it gets the click.
      // We may need to look at the parent to find the button.
      var target = event.target;
      if (!target || target == this._container) return;
      while (target.nodeName != 'BUTTON') {
        if (!target.parentNode) break;
        target = target.parentNode;
      }
      if (!target.dataset) return;
      var sku = target.dataset.sku;
      if (!sku) throw new Error('could not find sku, data- attrs not supported?');
      var product = (0, _products.findProduct)(sku, this._products);
      this._cart.add(product);
      this._showConfirmation(product);
    } }, { key: '_showConfirmation', value: function _showConfirmation(

    product) {
      (0, _snackbar2.default)(product.sku + ' added to cart');
    }

    // utility for unit testing (used in counting the number of elements)
  }, { key: 'itemSelector', get: function get() {
      return this._element + '.' + this._elementClass;
    } }]);return ShopView;}(_view2.default);exports.default = ShopView;

},{"./products.js":13,"./snackbar.js":15,"./view.js":17}],15:[function(require,module,exports){
'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.default =


















showToast; /*
           Copyright 2016 Google Inc.
           
           Licensed under the Apache License, Version 2.0 (the "License");
           you may not use this file except in compliance with the License.
           You may obtain a copy of the License at
           
               http://www.apache.org/licenses/LICENSE-2.0
           
           Unless required by applicable law or agreed to in writing, software
           distributed under the License is distributed on an "AS IS" BASIS,
           WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           See the License for the specific language governing permissions and
           limitations under the License.
           */ //jshint esversion: 6
// Pop up a user notification
function showToast(message) {var notification = document.getElementById('snackbar');if (notification && 'MaterialSnackbar' in notification) {notification.MaterialSnackbar.showSnackbar({ message: message });}}

},{}],16:[function(require,module,exports){
'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.
















replaceLocationHash = replaceLocationHash;exports.




pushLocationHash = pushLocationHash; /*
                                     Copyright 2016 Google Inc.
                                     
                                     Licensed under the Apache License, Version 2.0 (the "License");
                                     you may not use this file except in compliance with the License.
                                     You may obtain a copy of the License at
                                     
                                         http://www.apache.org/licenses/LICENSE-2.0
                                     
                                     Unless required by applicable law or agreed to in writing, software
                                     distributed under the License is distributed on an "AS IS" BASIS,
                                     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                     See the License for the specific language governing permissions and
                                     limitations under the License.
                                     */ //jshint esversion: 6
function replaceLocationHash(hash) {var baseUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location;var url = urlWithHash(hash, baseUrl);history.replaceState({}, "", url);}function pushLocationHash(hash) {var baseUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location;window.location = urlWithHash(hash, baseUrl);}function urlWithHash(hash, baseUrl) {var url = baseUrl.toString();var index = url.indexOf('#');if (index >= 0) url = url.substring(0, index);return url + '#' + hash;};

},{}],17:[function(require,module,exports){
'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Copyright 2016 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */var

View = function () {
  function View(containerId) {var renderBeforeVisible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;_classCallCheck(this, View);
    this._containerId = containerId;
    this._container = document.getElementById(this._containerId);
    this._needsRender = renderBeforeVisible;
  }_createClass(View, [{ key: 'render', value: function render()

    {
      // override this
    } }, { key: 'visible', set: function set(

    vis) {
      if (vis && !this.visible && this._needsRender) {
        // becoming visible, update
        this.render();
      }
      if (vis) {
        this._container.removeAttribute('hidden');
      } else {
        this._container.setAttribute('hidden', true);
      }
    }, get: function get()

    {
      return !this._container.hasAttribute('hidden');
    } }]);return View;}();exports.default = View;

},{}],18:[function(require,module,exports){
'use strict';

(function() {
  function toArray(arr) {
    return Array.prototype.slice.call(arr);
  }

  function promisifyRequest(request) {
    return new Promise(function(resolve, reject) {
      request.onsuccess = function() {
        resolve(request.result);
      };

      request.onerror = function() {
        reject(request.error);
      };
    });
  }

  function promisifyRequestCall(obj, method, args) {
    var request;
    var p = new Promise(function(resolve, reject) {
      request = obj[method].apply(obj, args);
      promisifyRequest(request).then(resolve, reject);
    });

    p.request = request;
    return p;
  }
  
  function promisifyCursorRequestCall(obj, method, args) {
    var p = promisifyRequestCall(obj, method, args);
    return p.then(function(value) {
      if (!value) return;
      return new Cursor(value, p.request);
    });
  }

  function proxyProperties(ProxyClass, targetProp, properties) {
    properties.forEach(function(prop) {
      Object.defineProperty(ProxyClass.prototype, prop, {
        get: function() {
          return this[targetProp][prop];
        },
        set: function(val) {
          this[targetProp][prop] = val;
        }
      });
    });
  }

  function proxyRequestMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return promisifyRequestCall(this[targetProp], prop, arguments);
      };
    });
  }

  function proxyMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return this[targetProp][prop].apply(this[targetProp], arguments);
      };
    });
  }

  function proxyCursorRequestMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return promisifyCursorRequestCall(this[targetProp], prop, arguments);
      };
    });
  }

  function Index(index) {
    this._index = index;
  }

  proxyProperties(Index, '_index', [
    'name',
    'keyPath',
    'multiEntry',
    'unique'
  ]);

  proxyRequestMethods(Index, '_index', IDBIndex, [
    'get',
    'getKey',
    'getAll',
    'getAllKeys',
    'count'
  ]);

  proxyCursorRequestMethods(Index, '_index', IDBIndex, [
    'openCursor',
    'openKeyCursor'
  ]);

  function Cursor(cursor, request) {
    this._cursor = cursor;
    this._request = request;
  }

  proxyProperties(Cursor, '_cursor', [
    'direction',
    'key',
    'primaryKey',
    'value'
  ]);

  proxyRequestMethods(Cursor, '_cursor', IDBCursor, [
    'update',
    'delete'
  ]);

  // proxy 'next' methods
  ['advance', 'continue', 'continuePrimaryKey'].forEach(function(methodName) {
    if (!(methodName in IDBCursor.prototype)) return;
    Cursor.prototype[methodName] = function() {
      var cursor = this;
      var args = arguments;
      return Promise.resolve().then(function() {
        cursor._cursor[methodName].apply(cursor._cursor, args);
        return promisifyRequest(cursor._request).then(function(value) {
          if (!value) return;
          return new Cursor(value, cursor._request);
        });
      });
    };
  });

  function ObjectStore(store) {
    this._store = store;
  }

  ObjectStore.prototype.createIndex = function() {
    return new Index(this._store.createIndex.apply(this._store, arguments));
  };

  ObjectStore.prototype.index = function() {
    return new Index(this._store.index.apply(this._store, arguments));
  };

  proxyProperties(ObjectStore, '_store', [
    'name',
    'keyPath',
    'indexNames',
    'autoIncrement'
  ]);

  proxyRequestMethods(ObjectStore, '_store', IDBObjectStore, [
    'put',
    'add',
    'delete',
    'clear',
    'get',
    'getAll',
    'getKey',
    'getAllKeys',
    'count'
  ]);

  proxyCursorRequestMethods(ObjectStore, '_store', IDBObjectStore, [
    'openCursor',
    'openKeyCursor'
  ]);

  proxyMethods(ObjectStore, '_store', IDBObjectStore, [
    'deleteIndex'
  ]);

  function Transaction(idbTransaction) {
    this._tx = idbTransaction;
    this.complete = new Promise(function(resolve, reject) {
      idbTransaction.oncomplete = function() {
        resolve();
      };
      idbTransaction.onerror = function() {
        reject(idbTransaction.error);
      };
      idbTransaction.onabort = function() {
        reject(idbTransaction.error);
      };
    });
  }

  Transaction.prototype.objectStore = function() {
    return new ObjectStore(this._tx.objectStore.apply(this._tx, arguments));
  };

  proxyProperties(Transaction, '_tx', [
    'objectStoreNames',
    'mode'
  ]);

  proxyMethods(Transaction, '_tx', IDBTransaction, [
    'abort'
  ]);

  function UpgradeDB(db, oldVersion, transaction) {
    this._db = db;
    this.oldVersion = oldVersion;
    this.transaction = new Transaction(transaction);
  }

  UpgradeDB.prototype.createObjectStore = function() {
    return new ObjectStore(this._db.createObjectStore.apply(this._db, arguments));
  };

  proxyProperties(UpgradeDB, '_db', [
    'name',
    'version',
    'objectStoreNames'
  ]);

  proxyMethods(UpgradeDB, '_db', IDBDatabase, [
    'deleteObjectStore',
    'close'
  ]);

  function DB(db) {
    this._db = db;
  }

  DB.prototype.transaction = function() {
    return new Transaction(this._db.transaction.apply(this._db, arguments));
  };

  proxyProperties(DB, '_db', [
    'name',
    'version',
    'objectStoreNames'
  ]);

  proxyMethods(DB, '_db', IDBDatabase, [
    'close'
  ]);

  // Add cursor iterators
  // TODO: remove this once browsers do the right thing with promises
  ['openCursor', 'openKeyCursor'].forEach(function(funcName) {
    [ObjectStore, Index].forEach(function(Constructor) {
      Constructor.prototype[funcName.replace('open', 'iterate')] = function() {
        var args = toArray(arguments);
        var callback = args[args.length - 1];
        var nativeObject = this._store || this._index;
        var request = nativeObject[funcName].apply(nativeObject, args.slice(0, -1));
        request.onsuccess = function() {
          callback(request.result);
        };
      };
    });
  });

  // polyfill getAll
  [Index, ObjectStore].forEach(function(Constructor) {
    if (Constructor.prototype.getAll) return;
    Constructor.prototype.getAll = function(query, count) {
      var instance = this;
      var items = [];

      return new Promise(function(resolve) {
        instance.iterateCursor(query, function(cursor) {
          if (!cursor) {
            resolve(items);
            return;
          }
          items.push(cursor.value);

          if (count !== undefined && items.length == count) {
            resolve(items);
            return;
          }
          cursor.continue();
        });
      });
    };
  });

  var exp = {
    open: function(name, version, upgradeCallback) {
      var p = promisifyRequestCall(indexedDB, 'open', [name, version]);
      var request = p.request;

      request.onupgradeneeded = function(event) {
        if (upgradeCallback) {
          upgradeCallback(new UpgradeDB(request.result, event.oldVersion, request.transaction));
        }
      };

      return p.then(function(db) {
        return new DB(db);
      });
    },
    delete: function(name) {
      return promisifyRequestCall(indexedDB, 'deleteDatabase', [name]);
    }
  };

  if (typeof module !== 'undefined') {
    module.exports = exp;
  }
  else {
    self.idb = exp;
  }
}());

},{}]},{},[1]);
