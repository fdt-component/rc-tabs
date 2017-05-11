'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Cursor = require('./Cursor.css');

var _Cursor2 = _interopRequireDefault(_Cursor);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cursor = function (_React$PureComponent) {
  _inherits(Cursor, _React$PureComponent);

  function Cursor() {
    _classCallCheck(this, Cursor);

    return _possibleConstructorReturn(this, (Cursor.__proto__ || Object.getPrototypeOf(Cursor)).apply(this, arguments));
  }

  _createClass(Cursor, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          len = _props.len,
          index = _props.index,
          className = _props.className,
          others = _objectWithoutProperties(_props, ['len', 'index', 'className']);

      len = Math.max(1, len);
      return _react2.default.createElement(
        'div',
        { className: _Cursor2.default.cursorWrap, style: { width: 100 / len + '%', transform: 'translateX(' + index * 100 + '%)' } },
        _react2.default.createElement('div', _extends({ className: (0, _classnames2.default)(_Cursor2.default.cursor, className) }, others))
      );
    }
  }]);

  return Cursor;
}(_react2.default.PureComponent);

Cursor.propTypes = {
  className: _propTypes2.default.string.isRequired,
  len: _propTypes2.default.number.isRequired,
  index: _propTypes2.default.number.isRequired
};

module.exports = Cursor;