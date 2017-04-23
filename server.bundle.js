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
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SignupStrategy = exports.LoginStrategy = undefined;

var _passportLocal = __webpack_require__(19);

var _passport = __webpack_require__(1);

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginStrategy = exports.LoginStrategy = function LoginStrategy(passport) {
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

var SignupStrategy = exports.SignupStrategy = function SignupStrategy(passport) {
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

_passport2.default.serializeUser(function (user, cb) {
    cb(null, user.id);
});

_passport2.default.deserializeUser(function (id, cb) {
    db.users.findById(id, function (err, user) {
        if (err) {
            return cb(err);
        }
        cb(null, user);
    });
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

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
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(6);

var _server2 = _interopRequireDefault(_server);

var _reactRouterDom = __webpack_require__(3);

var _app = __webpack_require__(5);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
// import reducers from '../views/src/reducers/index';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import { ADD_ITEM } from '../views/src/actions/list_actions';


router.get('/', function (req, res) {
    var context = {};
    // const store = createStore(reducers);
    // store.dispatch({
    //     type: ADD_ITEM,
    //     payload: {
    //         name: 'Components',
    //         description: 'Description for components'
    //     }
    // });

    // const finalState = JSON.stringify(store.getState());
    var html = _server2.default.renderToString(_react2.default.createElement(
        _reactRouterDom.StaticRouter,
        {
            location: req.url,
            context: context
        },
        _react2.default.createElement(_app2.default, null)
    ));
    res.render('index.ejs', {
        html: html
    });
});

exports.default = router;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(6);

var _server2 = _interopRequireDefault(_server);

var _reactRouterDom = __webpack_require__(3);

var _passport = __webpack_require__(1);

var _passport2 = _interopRequireDefault(_passport);

var _app = __webpack_require__(5);

var _app2 = _interopRequireDefault(_app);

__webpack_require__(4);

var _bcrypt = __webpack_require__(17);

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var models = __webpack_require__(14);

var router = _express2.default.Router();

router.post('/login', _passport2.default.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}), function (req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
});

router.post("/signup", function (req, res, next) {
    models.User.findOne({
        where: {
            username: req.body.username
        }
    }).then(function (user) {
        if (!user) {
            models.User.create({
                username: req.body.username,
                // password: bcrypt.hashSync(req.body.password)
                password: 'abc123'
            }).then(function (user) {
                _passport2.default.authenticate("local", { failureRedirect: "/signup", successRedirect: "/posts" })(req, res, next);
            });
        } else {
            res.send("user exists");
        }
    });
});

router.get('/login', function (req, res) {
    var context = {};

    var html = _server2.default.renderToString(_react2.default.createElement(
        _reactRouterDom.StaticRouter,
        {
            location: req.url,
            context: context
        },
        _react2.default.createElement(_app2.default, null)
    ));

    res.render('index.ejs', {
        html: html
    });
});

router.get('/signup', function (req, res) {
    var context = {};

    var html = _server2.default.renderToString(_react2.default.createElement(
        _reactRouterDom.StaticRouter,
        {
            location: req.url,
            context: context
        },
        _react2.default.createElement(_app2.default, null)
    ));
    res.render('index.ejs', {
        html: html
    });
});

exports.default = router;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    "development": {
        "username": "root",
        "password": "root",
        "database": "rent_dev",
        "host": "127.0.0.1",
        "dialect": "postgres"
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "postgres"
    },
    "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "postgres"
    }
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var fs = __webpack_require__(18);
var path = __webpack_require__(20);
var Sequelize = __webpack_require__(21);
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || 'development';
var config = __webpack_require__(13)[env];
var db = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
  sequelize.sync();
}

fs.readdirSync('./app/db/models').filter(function (file) {
  return file.indexOf('.') !== 0 && file !== 'index.js' && file.slice(-3) === '.js';
}).forEach(function (file) {
  var model = sequelize['import'](path.join('./app/db/models', file));
  db[model.name] = model;
});

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize.sync();
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _appRouter = __webpack_require__(7);

var _appRouter2 = _interopRequireDefault(_appRouter);

var _authRouter = __webpack_require__(8);

var _authRouter2 = _interopRequireDefault(_authRouter);

var _expressSession = __webpack_require__(11);

var _expressSession2 = _interopRequireDefault(_expressSession);

var _passport = __webpack_require__(1);

var _passport2 = _interopRequireDefault(_passport);

var _bodyParser = __webpack_require__(9);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = __webpack_require__(10);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _morgan = __webpack_require__(12);

var _morgan2 = _interopRequireDefault(_morgan);

var _passport3 = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// Views
app.set('views', 'app/views');
app.set('view engine', 'ejs');

app.use('/bin', _express2.default.static('./bin'));
app.use('/stylesheets', _express2.default.static('./app/public/stylesheets'));

(0, _passport3.LoginStrategy)(_passport2.default);
(0, _passport3.SignupStrategy)(_passport2.default);

// Express
app.use((0, _morgan2.default)('dev'));
app.use((0, _cookieParser2.default)());
app.use((0, _bodyParser2.default)());

// Passport
app.use((0, _expressSession2.default)({ secret: 'mySecretKey' }));
app.use(_passport2.default.initialize());
app.use(_passport2.default.session());

// Routes
app.use('/', _appRouter2.default);
app.use('/', _authRouter2.default);

app.listen(3000, function () {
	console.log('Hello World listening on port 3000!');
});

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ })
/******/ ]);