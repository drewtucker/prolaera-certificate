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

var _core = require("@react-pdf/core");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Signature = (function(_React$Component) {
  (0, _inherits3.default)(Signature, _React$Component);

  function Signature() {
    (0, _classCallCheck3.default)(this, Signature);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (Signature.__proto__ || Object.getPrototypeOf(Signature)).apply(
        this,
        arguments
      )
    );
  }

  (0, _createClass3.default)(Signature, [
    {
      key: "render",
      value: function render() {
        var _props$signature = this.props.signature,
          _props$signature$imag = _props$signature.imageUrl,
          imageUrl =
            _props$signature$imag === undefined ? "" : _props$signature$imag,
          _props$signature$name = _props$signature.name,
          name =
            _props$signature$name === undefined ? "" : _props$signature$name,
          _props$signature$titl = _props$signature.title,
          title =
            _props$signature$titl === undefined ? "" : _props$signature$titl;

        var styles = _core.StyleSheet.create({
          image: {},
          subtext: {}
        });

        return _react2.default.createElement(
          _core.View,
          null,
          _react2.default.createElement(_core.Image, {
            src: signature.imageUrl,
            style: styles.image
          }),
          _react2.default.createElement(
            _core.Text,
            { style: styles.subtext },
            signature.name
          ),
          _react2.default.createElement(
            _core.Text,
            { style: styles.subtext },
            signature.title
          )
        );
      }
    }
  ]);
  return Signature;
})(_react2.default.Component);

exports.default = Signature;
