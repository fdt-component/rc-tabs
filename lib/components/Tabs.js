'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTappable = require('react-tappable');

var _reactTappable2 = _interopRequireDefault(_reactTappable);

var _tab = require('./tab.css');

var _tab2 = _interopRequireDefault(_tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

    var _this$props = _this.props,
        tabStaticStyle = _this$props.tabStaticStyle,
        tabActiveStyle = _this$props.tabActiveStyle,
        tabHeight = _this$props.tabHeight,
        styles = _this$props.styles;

    _this.state = {
      activeKey: _this.initDefautActive()
    };
    _this.style = {
      styles: styles,
      tabStaticStyle: tabStaticStyle,
      tabActiveStyle: tabActiveStyle,
      tabHeight: {
        lineHeight: tabHeight
      },
      contentHeight: {
        height: 'calc(100% - ' + tabHeight + ')'
      }
    };
    return _this;
  }

  _createClass(Tabs, [{
    key: 'initDefautActive',
    value: function initDefautActive() {
      var _props = this.props,
          children = _props.children,
          _props$defaultActiveK = _props.defaultActiveKey,
          defaultActiveKey = _props$defaultActiveK === undefined ? null : _props$defaultActiveK;

      return !defaultActiveKey ? children[0].key : defaultActiveKey;
    }
  }, {
    key: 'onTabClick',
    value: function onTabClick(activeKey) {
      var self = this;
      if (this.state.activeKey !== activeKey) {
        this.setState({
          activeKey: activeKey
        }, function () {
          self.props.onchange && self.props.onchange(activeKey);
        });
      }
    }
  }, {
    key: 'getTabStyle',
    value: function getTabStyle(activeKey) {
      var _style = this.style,
          tabActiveStyle = _style.tabActiveStyle,
          tabStaticStyle = _style.tabStaticStyle;

      if (activeKey === this.state.activeKey) {
        return tabActiveStyle;
      } else {
        return tabStaticStyle;
      }
    }
  }, {
    key: 'renderTabList',
    value: function renderTabList() {
      var _this2 = this;

      var children = this.props.children;
      var styles = this.style.styles;

      var tablist = _react2.default.Children.map(children, function (ele, idx) {
        return _react2.default.createElement(
          _reactTappable2.default,
          {
            className: styles.item,
            key: idx,
            onTap: _this2.onTabClick.bind(_this2, ele.key),
            style: _this2.getTabStyle(ele.key)
          },
          ele.props.name
        );
      });
      return tablist;
    }
  }, {
    key: 'renderTabPanel',
    value: function renderTabPanel() {
      var children = this.props.children;
      var activeKey = this.state.activeKey;
      var styles = this.style.styles;

      var tabpanel = _react2.default.Children.map(children, function (ele) {
        var eleProps = {
          styles: styles,
          isActive: ele.key === activeKey
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
      var _style2 = this.style,
          styles = _style2.styles,
          tabHeight = _style2.tabHeight,
          contentHeight = _style2.contentHeight;

      return _react2.default.createElement(
        'div',
        { className: styles.tab },
        _react2.default.createElement(
          'div',
          {
            className: styles['tab-list'],
            style: tabHeight
          },
          tablist
        ),
        _react2.default.createElement(
          'div',
          {
            className: styles['tab-content'],
            style: contentHeight
          },
          tabpanel
        )
      );
    }
  }]);

  return Tabs;
}(_react2.default.Component);

Tabs.defaultProps = {
  styles: _tab2.default,
  tabHeight: '45px',
  tabStaticStyle: {
    color: '#333',
    borderBottom: '1px solid #333'
  },
  tabActiveStyle: {
    color: 'red',
    borderBottom: '3px solid red'
  }
};

Tabs.propTypes = {
  children: _react2.default.PropTypes.node,
  defaultActiveKey: _react2.default.PropTypes.string,
  onchange: _react2.default.PropTypes.func,
  tabHeight: _react2.default.PropTypes.string,
  tabStaticStyle: _react2.default.PropTypes.object,
  tabActiveStyle: _react2.default.PropTypes.object,
  styles: _react2.default.PropTypes.object
};

module.exports = Tabs;