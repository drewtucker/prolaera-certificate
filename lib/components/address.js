"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var Address = (function(_React$Component) {
  (0, _inherits3.default)(Address, _React$Component);

  function Address() {
    (0, _classCallCheck3.default)(this, Address);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (Address.__proto__ || (0, _getPrototypeOf2.default)(Address)).apply(
        this,
        arguments
      )
    );
  }

  (0, _createClass3.default)(Address, [
    {
      key: "render",
      value: function render() {
        var _props = this.props,
          _props$addressOne = _props.addressOne,
          addressOne = _props$addressOne === undefined ? "" : _props$addressOne,
          _props$addressTwo = _props.addressTwo,
          addressTwo = _props$addressTwo === undefined ? "" : _props$addressTwo,
          _props$city = _props.city,
          city = _props$city === undefined ? "" : _props$city,
          _props$state = _props.state,
          state = _props$state === undefined ? "" : _props$state,
          _props$zip = _props.zip,
          zip = _props$zip === undefined ? "" : _props$zip;

        var styles = _core.StyleSheet.create({
          wrapper: { maxWidth: "300px", height: "100px" },
          line: { maxWidth: "100%", fontStyle: "italic" }
        });

        return _react2.default.createElement(
          _core.View,
          { style: styles.wrapper },
          _react2.default.createElement(
            _core.Text,
            { style: styles.line },
            addressOne
          ),
          _react2.default.createElement(
            _core.Text,
            { style: styles.line },
            addressTwo
          ),
          _react2.default.createElement(
            _core.Text,
            { style: styles.line },
            city,
            ", ",
            state,
            " ",
            zip
          )
        );
      }
    }
  ]);
  return Address;
})(_react2.default.Component);

exports.default = Address;
