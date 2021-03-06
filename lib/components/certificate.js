"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectDestructuringEmpty2 = require("babel-runtime/helpers/objectDestructuringEmpty");

var _objectDestructuringEmpty3 = _interopRequireDefault(
  _objectDestructuringEmpty2
);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _core = require("@react-pdf/core");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Certificate = (function(_React$Component) {
  (0, _inherits3.default)(Certificate, _React$Component);

  function Certificate() {
    (0, _classCallCheck3.default)(this, Certificate);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (Certificate.__proto__ || Object.getPrototypeOf(Certificate)).apply(
        this,
        arguments
      )
    );
  }

  (0, _createClass3.default)(Certificate, [
    {
      key: "render",
      value: function render() {
        (0, _objectDestructuringEmpty3.default)(this.props);

        var styles = _core.StyleSheet.create({
          background: {
            width: "100%",
            backgroundImage: "http://assets.prolaera.com/pdf-background.jpg"
          }
        });

        return _react2.default.createElement("div", {
          style: styles.background
        });
      }
    }
  ]);
  return Certificate;
})(_react2.default.Component);

exports.default = Certificate;
