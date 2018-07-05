"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _core = require("@react-pdf/core");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Logo = (function(_React$Component) {
  (0, _inherits3.default)(Logo, _React$Component);

  function Logo() {
    (0, _classCallCheck3.default)(this, Logo);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (Logo.__proto__ || Object.getPrototypeOf(Logo)).apply(this, arguments)
    );
  }

  (0, _createClass3.default)(Logo, [
    {
      key: "render",
      value: function render() {
        var logoUrl = this.props.logoUrl;

        var styles = _core.StyleSheet.create({
          image: { maxWidth: 300, height: 100 }
        });

        return _react2.default.createElement(
          _core.View,
          null,
          _react2.default.createElement(_core.Image, {
            src: logoUrl,
            style: styles.image
          })
        );
      }
    }
  ]);
  return Logo;
})(_react2.default.Component);

exports.default = Logo;
