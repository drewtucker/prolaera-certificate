"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Certificate = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _core = require("@react-pdf/core");

var _logo = require("./components/logo");

var _logo2 = _interopRequireDefault(_logo);

var _address = require("./components/address");

var _address2 = _interopRequireDefault(_address);

var _certInfo = require("./components/certInfo");

var _certInfo2 = _interopRequireDefault(_certInfo);

var _node = require("@react-pdf/node");

var _node2 = _interopRequireDefault(_node);

var _regeneratorRuntime = require("regenerator-runtime");

var _regeneratorRuntime2 = _interopRequireDefault(_regeneratorRuntime);

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
  return _react2.default.createElement(
    _core.Document,
    {
      author: "Drew Tucker",
      title: "Certificate"
    },
    _react2.default.createElement(Certificate, {
      orientation: "landscape",
      size: "A4"
    })
  );
};

_node2.default.render(
  _react2.default.createElement(Output, null),
  __dirname + "/output.pdf"
);

exports.Certificate = Certificate;
