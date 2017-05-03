'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTappable = require('react-tappable');

var _reactTappable2 = _interopRequireDefault(_reactTappable);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabsBasic = function (_React$Component) {
  _inherits(TabsBasic, _React$Component);

  function TabsBasic(props) {
    _classCallCheck(this, TabsBasic);

    var _this = _possibleConstructorReturn(this, (TabsBasic.__proto__ || Object.getPrototypeOf(TabsBasic)).call(this, props));

    var _this$props = _this.props,
        styles = _this$props.styles,
        _this$props$defaultAc = _this$props.defaultActiveKey,
        defaultActiveKey = _this$props$defaultAc === undefined ? 0 : _this$props$defaultAc;

    _this.state = {
      activeKey: defaultActiveKey
    };
    _this.cx = _bind2.default.bind(styles);
    return _this;
  }

  _createClass(TabsBasic, [{
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
    key: 'renderTabList',
    value: function renderTabList() {
      var _this2 = this;

      var children = this.props.children;
      var activeKey = this.state.activeKey;

      var tablist = _react2.default.Children.map(children, function (ele, idx) {
        var key = ele.key || idx;
        return _react2.default.createElement(
          _reactTappable2.default,
          {
            className: _this2.cx('item', { active: activeKey === key }),
            key: key,
            onTap: _this2.onTabClick.bind(_this2, key)
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
      var activeKey = this.state.activeKey;

      var tabpanel = _react2.default.Children.map(children, function (ele, idx) {
        var key = ele.key || idx;
        var eleProps = {
          key: key,
          cn: _this3.cx('panel', { active: activeKey === key })
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
      return _react2.default.createElement(
        'div',
        { className: this.cx('tab') },
        _react2.default.createElement(
          'div',
          { className: this.cx('tab-list') },
          tablist
        ),
        _react2.default.createElement(
          'div',
          { className: this.cx('tab-panels') },
          tabpanel
        )
      );
    }
  }]);

  return TabsBasic;
}(_react2.default.Component);

TabsBasic.propTypes = {
  children: _react2.default.PropTypes.node,
  defaultActiveKey: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
  onchange: _react2.default.PropTypes.func,
  styles: _react2.default.PropTypes.object
};

module.exports = TabsBasic;