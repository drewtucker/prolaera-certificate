"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

var CertInfo = (function(_React$Component) {
  (0, _inherits3.default)(CertInfo, _React$Component);

  function CertInfo() {
    (0, _classCallCheck3.default)(this, CertInfo);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (CertInfo.__proto__ || (0, _getPrototypeOf2.default)(CertInfo)).apply(
        this,
        arguments
      )
    );
  }

  (0, _createClass3.default)(CertInfo, [
    {
      key: "render",
      value: function render() {
        var _props = this.props,
          _props$cert = _props.cert,
          cert = _props$cert === undefined ? "" : _props$cert,
          _props$date = _props.date,
          date = _props$date === undefined ? "" : _props$date,
          _props$delivery = _props.delivery,
          delivery = _props$delivery === undefined ? "" : _props$delivery,
          _props$first = _props.first,
          first = _props$first === undefined ? "" : _props$first,
          _props$last = _props.last,
          last = _props$last === undefined ? "" : _props$last,
          _props$hours = (0, _slicedToArray3.default)(_props.hours, 1),
          _props$hours$ = _props$hours[0],
          _props$hours$$credits = _props$hours$.credits,
          credits =
            _props$hours$$credits === undefined ? "" : _props$hours$$credits,
          _props$hours$$subject = _props$hours$.subject_area,
          subject_area =
            _props$hours$$subject === undefined ? "" : _props$hours$$subject;

        var styles = _core.StyleSheet.create({
          header: { fontSize: "30px" },
          subtext: { fontSize: "15px", fontStyle: "italic" },
          name: { fontSize: "25px" },
          subject: { fontSize: "22px" },
          hours: { fontSize: "13px" }
        });

        return _react2.default.createElement(
          _core.View,
          null,
          _react2.default.createElement(
            Text,
            { style: styles.header },
            "Certificate of Completion"
          ),
          _react2.default.createElement(
            Text,
            { style: styles.subtext },
            "This certificate is presented to"
          ),
          _react2.default.createElement(
            Text,
            { style: styles.name },
            first,
            " ",
            last
          ),
          _react2.default.createElement(
            Text,
            { style: styles.subtext },
            "for successfully completing"
          ),
          _react2.default.createElement(Text, { style: subject }, cert),
          _react2.default.createElement(
            Text,
            { style: subtext },
            date,
            " ",
            delivery
          ),
          _react2.default.createElement(
            Text,
            { style: styles.hours },
            hours[0].subject_area,
            " ",
            hours[0].credits
          )
        );
      }
    }
  ]);
  return CertInfo;
})(_react2.default.Component);

exports.default = CertInfo;
