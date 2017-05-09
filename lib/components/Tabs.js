'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tabs = require('./tabs.css');

var _tabs2 = _interopRequireDefault(_tabs);

var _TabsBasic = require('./TabsBasic');

var _TabsBasic2 = _interopRequireDefault(_TabsBasic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

    var mergeStyles = _this.props.mergeStyles;

    _this.styles = mergeStyles && _this.initStyle(mergeStyles) || _tabs2.default;
    return _this;
  }

  _createClass(Tabs, [{
    key: 'initStyle',
    value: function initStyle(mergeStyles) {
      var styles = _tabs2.default;
      if (!!mergeStyles) {
        for (var prop in styles) {
          if (mergeStyles[prop]) {
            styles[prop] += ' ' + mergeStyles[prop];
          }
        }
      }
      return styles;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          onchange = _props.onchange,
          defaultActiveKey = _props.defaultActiveKey,
          others = _objectWithoutProperties(_props, ['children', 'onchange', 'defaultActiveKey']);

      return _react2.default.createElement(
        _TabsBasic2.default,
        _extends({
          defaultActiveKey: defaultActiveKey,
          onchange: onchange,
          styles: this.styles
        }, others),
        children
      );
    }
  }]);

  return Tabs;
}(_react2.default.Component);

Tabs.propTypes = {
  children: _react2.default.PropTypes.node,
  defaultActiveKey: _react2.default.PropTypes.number,
  onchange: _react2.default.PropTypes.func,
  mergeStyles: _react2.default.PropTypes.object
};

module.exports = Tabs;