"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _node = require("@react-pdf/node");

var _node2 = _interopRequireDefault(_node);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _core = require("@react-pdf/core");

var _index = require("./index");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var cert = {
  cert:
    "Meeting SEC Disclosure Requirements: Compensation Discussion & Analysis",
  date: "2017-06-26T08:00:00.000Z",
  first: "Paul",
  hours: {
    subject_area: "Imported",
    credits: 3
  }
};

var Output = function Output() {
  return _react2.default.createElement(
    _core.Document,
    (0, _extends3.default)(
      {
        author: "Drew Tucker",
        title: "Certificate"
      },
      cert
    ),
    _react2.default.createElement(_index.Certificate, {
      orientation: "landscape",
      size: "A4"
    })
  );
};

describe(
  "ReactPDF Render",
  (0, _asyncToGenerator3.default)(
    /*#__PURE__*/ _regenerator2.default.mark(function _callee2() {
      return _regenerator2.default.wrap(
        function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                it(
                  "should render a PDF file for testing purposes",
                  (0, _asyncToGenerator3.default)(
                    /*#__PURE__*/ _regenerator2.default.mark(
                      function _callee() {
                        var render;
                        return _regenerator2.default.wrap(
                          function _callee$(_context) {
                            while (1) {
                              switch ((_context.prev = _context.next)) {
                                case 0:
                                  render = _node2.default.render(
                                    _react2.default.createElement(Output, null),
                                    __dirname + "/output.pdf"
                                  );

                                  console.log(render);
                                  expect(render).toEqual(true);

                                case 3:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          },
                          _callee,
                          undefined
                        );
                      }
                    )
                  )
                );

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        },
        _callee2,
        undefined
      );
    })
  )
);
