'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
// import webpack from 'webpack';

var port = process.env.PORT || 3000;
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());
app.use((0, _cookieParser2.default)());
app.use((0, _morgan2.default)('dev'));

// app.use(express.static(path.join(__dirname, 'public')));
// app.get('/', (req, res) => {
//   res.send('Hello World Test!')
// })


// app.use('/', 'router');

app.get('/', function (req, res) {
  res.send('hello world');
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Listening on port http://localhost:' + port);
  }
});

exports.default = app;