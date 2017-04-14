'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTappable = require('react-tappable');

var _reactTappable2 = _interopRequireDefault(_reactTappable);

var _rctabs = require('./rctabs.css');

var _rctabs2 = _interopRequireDefault(_rctabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

    _this.state = {
      activeKey: _this.initDefautActive()
    };
    _this.styles = _this.initStyle();
    return _this;
  }

  _createClass(Tabs, [{
    key: 'initStyle',
    value: function initStyle() {
      var mergeStyles = this.props.mergeStyles;

      var styles = _rctabs2.default;
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
    key: 'initDefautActive',
    value: function initDefautActive() {
      var _props$defaultActiveK = this.props.defaultActiveKey,
          defaultActiveKey = _props$defaultActiveK === undefined ? null : _props$defaultActiveK;

      return !defaultActiveKey ? 0 : defaultActiveKey;
    }
  }, {
    key: 'onTabClick',
    value: function onTabClick(curIdx) {
      var self = this;
      if (this.state.activeKey !== curIdx) {
        this.setState({
          activeKey: curIdx
        }, function () {
          self.props.onchange && self.props.onchange(curIdx);
        });
      }
    }
  }, {
    key: 'getTabCname',
    value: function getTabCname(curidx) {
      var _styles = this.styles,
          item = _styles.item,
          active = _styles.active;

      if (curidx === this.state.activeKey) {
        return item + ' ' + active;
      } else {
        return '' + item;
      }
    }
  }, {
    key: 'getPanelCname',
    value: function getPanelCname(curIdx) {
      var _styles2 = this.styles,
          panel = _styles2.panel,
          active = _styles2.active;

      if (curIdx === this.state.activeKey) {
        return panel + ' ' + active;
      } else {
        return '' + panel;
      }
    }
  }, {
    key: 'renderTabList',
    value: function renderTabList() {
      var _this2 = this;

      var children = this.props.children;

      var tablist = _react2.default.Children.map(children, function (ele, idx) {
        return _react2.default.createElement(
          _reactTappable2.default,
          {
            className: _this2.getTabCname(idx),
            key: idx,
            onTap: _this2.onTabClick.bind(_this2, idx)
          },
          ele.props.name
        );
      });
      return tablist;
    }
  }, {
    key: 'renderTabPanel',
    value: function renderTabPanel() {
      var _this3 = this;

      var children = this.props.children;

      var tabpanel = _react2.default.Children.map(children, function (ele, idx) {
        var eleProps = {
          cn: _this3.getPanelCname(idx)
        };
        return ele && _react2.default.cloneElement(ele, eleProps);
      });
      return tabpanel;
    }
  }, {
    key: 'render',
    value: function render() {
      var tablist = this.renderTabList();
      var tabpanel = this.renderTabPanel();
      var styles = this.styles;
      return _react2.default.createElement(
        'div',
        { className: styles.tab },
        _react2.default.createElement(
          'div',
          { className: styles['tab-list'] },
          tablist
        ),
        _react2.default.createElement(
          'div',
          { className: styles['tab-panels'] },
          tabpanel
        )
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