"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Certificate = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _core = require("@react-pdf/core");

var _node = require("@react-pdf/node");

var _node2 = _interopRequireDefault(_node);

require("babel-core/register");

require("babel-polyfill");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _address = require("./components/address");

var _address2 = _interopRequireDefault(_address);

var _certInfo = require("./components/certInfo");

var _certInfo2 = _interopRequireDefault(_certInfo);

var _logo = require("./components/logo");

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Certificate = function Certificate(props) {
  return _react2.default.createElement(
    _core.Page,
    props,
    _react2.default.createElement(_logo2.default, null),
    _react2.default.createElement(_address2.default, null),
    _react2.default.createElement(_certInfo2.default, null)
  );
};

var Output = function Output() {
  return function(props) {
    return _react2.default.createElement(
      _core.Document,
      (0, _extends3.default)(
        { author: "Drew Tucker", title: "Certificate" },
        props,
        cert
      ),
      _react2.default.createElement(Certificate, {
        orientation: "landscape",
        size: "A4"
      })
    );
  };
};

_node2.default.render(
  _react2.default.createElement(Output, null),
  __dirname + "/output.pdf"
);

exports.Certificate = Certificate;
