/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.selectItem = selectItem;
exports.getListItem = getListItem;
exports.addItem = addItem;
var ITEM_CLICKED = exports.ITEM_CLICKED = 'ITEM_CLICKED';
var ITEM_VIEW = exports.ITEM_VIEW = 'ITEM_VIEW';
var ADD_ITEM = exports.ADD_ITEM = 'ADD_ITEM';

function selectItem(listItem) {
    return {
        type: ITEM_CLICKED,
        payload: listItem
    };
}

function getListItem(id) {
    return {
        type: ITEM_VIEW,
        payload: id
    };
}

function addItem(item) {
    return {
        type: ADD_ITEM,
        payload: item
    };
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(17);

var _server2 = _interopRequireDefault(_server);

var _reactRouterDom = __webpack_require__(4);

var _index = __webpack_require__(13);

var _index2 = _interopRequireDefault(_index);

var _redux = __webpack_require__(5);

var _reactRedux = __webpack_require__(18);

var _list_actions = __webpack_require__(2);

var _passport = __webpack_require__(1);

var _passport2 = _interopRequireDefault(_passport);

var _app = __webpack_require__(12);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', function (req, res) {
    var context = {};
    var store = (0, _redux.createStore)(_index2.default);

    store.dispatch({
        type: _list_actions.ADD_ITEM,
        payload: {
            name: 'Components',
            description: 'Description for components'
        }
    });

    var finalState = JSON.stringify(store.getState());
    var html = _server2.default.renderToString(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            {
                location: req.url,
                context: context
            },
            _react2.default.createElement(_app2.default, null)
        )
    ));
    res.render('index.ejs', {
        initialState: finalState,
        html: html
    });
    // res.status(200).send(renderFullPage(html, finalState));
});

router.post('/login', _passport2.default.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}), function (req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
});

router.get('/signup', function (req, res) {
    var context = {};
    var store = (0, _redux.createStore)(_index2.default);

    store.dispatch({
        type: _list_actions.ADD_ITEM,
        payload: {
            name: 'Components',
            description: 'Description for components'
        }
    });

    var finalState = store.getState();
    var html = _server2.default.renderToString(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            {
                location: req.url,
                context: context
            },
            _react2.default.createElement(_app2.default, null)
        )
    ));

    res.status(200).send(renderFullPage(html, finalState));
    // res.render('register', {message: req.flash('message')});
});

router.post('/signup', _passport2.default.authenticate('signup', {
    successRedirect: '/home',
    failureRedirect: '/signup',
    failureFlash: true
}));

router.get('/login', function (req, res) {
    var context = {};

    var finalState = store.getState();
    var html = _server2.default.renderToString(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            {
                location: req.url,
                context: context
            },
            _react2.default.createElement(_app2.default, null)
        )
    ));

    res.status(200).send(renderFullPage(html, finalState));
});

function renderFullPage(html, initialState) {
    return '\n    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n    \t<!-- Required meta tags always come first -->\n    \t<meta charset="utf-8">\n    \t<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n    \t<meta http-equiv="x-ua-compatible" content="ie=edge">\n    \t<title>React Router Redux Express</title>\n\n    \t<!-- Bootstrap CSS -->\n    \t<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css" integrity="sha384-y3tfxAZXuh4HwSYylfB+J125MxIs6mR5FOHamPBG064zB+AFeWH94NdvaCBm8qnd" crossorigin="anonymous">\n    \t<link rel="stylesheet" href="../stylesheets/main.css">\n    </head>\n    <body>\n\n    \t<div id="reactbody"><div>' + html + '</div></div>\n        <script>\n            window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + '\n          </script>\n    \t<script src="../bin/app.bundle.js"></script>\n    \t<!-- jQuery first, then Bootstrap JS. -->\n    \t<script src="https://www.atlasestateagents.co.uk/javascript/tether.min.js"></script>\n    \t<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>\n    \t<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/js/bootstrap.min.js" integrity="sha384-vZ2WRJMwsjRMW/8U7i6PWi6AlO1L79snBrmgiDpgIWJ82z8eA5lenwvxbMV1PAh7" crossorigin="anonymous"></script>\n    </body>\n    </html>\n    ';
}

exports.default = router;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _passportLocal = __webpack_require__(16);

exports.default = function (passport) {
    passport.use(new _passportLocal.Strategy(function (username, password, done) {
        User.findOne({ username: username }, function (err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }));
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RedirectWithStatus = function RedirectWithStatus(_ref) {
    var from = _ref.from,
        to = _ref.to,
        status = _ref.status;
    return _react2.default.createElement(Route, { render: function render(_ref2) {
            var staticContext = _ref2.staticContext;

            // there is no `staticContext` on the client, so
            // we need to guard against that here
            if (staticContext) staticContext.status = status;
            return _react2.default.createElement(Redirect, { from: from, to: to });
        } });
};

var App = function App() {
    return _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(RedirectWithStatus, {
            status: 301,
            from: '/users',
            to: '/profiles'
        }),
        _react2.default.createElement(RedirectWithStatus, {
            status: 302,
            from: '/courses',
            to: '/dashboard'
        })
    );
};

exports.default = App;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(5);

var _lists = __webpack_require__(14);

var _lists2 = _interopRequireDefault(_lists);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
    lists: _lists2.default
});

exports.default = rootReducer;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
    var action = arguments[1];

    switch (action.type) {
        case _list_actions.ITEM_CLICKED:
            return _extends({}, state, { item: action.payload });
        case _list_actions.ADD_ITEM:
            return _extends({}, state, { all: [].concat(_toConsumableArray(state.all), [action.payload]) });
        case _list_actions.ITEM_VIEW:
            switch (action.payload) {
                case 'Actions':
                    return _extends({}, state, { item: ListItems[0] });
                case 'Containers':
                    return _extends({}, state, { item: ListItems[1] });
                case 'Reducers':
                    return _extends({}, state, { item: ListItems[2] });
            }
    }
    return state;
};

var _list_actions = __webpack_require__(2);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var ListItems = [{ name: 'Actions', description: 'Description for actions' }, { name: 'Containers', description: 'Description for containers' }, { name: 'Reducers', description: 'Description for reducer' }];

var INITIAL_STATE = { all: ListItems, item: null };

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _index = __webpack_require__(6);

var _index2 = _interopRequireDefault(_index);

var _expressSession = __webpack_require__(10);

var _expressSession2 = _interopRequireDefault(_expressSession);

var _passport = __webpack_require__(1);

var _passport2 = _interopRequireDefault(_passport);

var _bodyParser = __webpack_require__(8);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = __webpack_require__(9);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _morgan = __webpack_require__(11);

var _morgan2 = _interopRequireDefault(_morgan);

var _passport3 = __webpack_require__(7);

var _passport4 = _interopRequireDefault(_passport3);

var _path = __webpack_require__(19);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// Views
app.set('views', 'app/views');
app.set('view engine', 'ejs');

app.use('/bin', _express2.default.static('./bin'));
app.use('/stylesheets', _express2.default.static('./app/public/stylesheets'));

(0, _passport4.default)(_passport2.default);

// Express
app.use((0, _morgan2.default)('dev'));
app.use((0, _cookieParser2.default)());
app.use((0, _bodyParser2.default)());
// Passport
app.use((0, _expressSession2.default)({ secret: 'mySecretKey' }));
app.use(_passport2.default.initialize());
app.use(_passport2.default.session());

// Routes
app.use('/', _index2.default);
app.use('/view/*', _index2.default);

app.listen(3000, function () {
	console.log('Hello World listening on port 3000!');
});

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })
/******/ ]);