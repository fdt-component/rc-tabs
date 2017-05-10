'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTappable = require('react-tappable');

var _reactTappable2 = _interopRequireDefault(_reactTappable);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _reactSwipe = require('react-swipe');

var _reactSwipe2 = _interopRequireDefault(_reactSwipe);

var _Cursor = require('./Cursor');

var _Cursor2 = _interopRequireDefault(_Cursor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabsBasic = function (_React$Component) {
  _inherits(TabsBasic, _React$Component);

  function TabsBasic(props) {
    _classCallCheck(this, TabsBasic);

    var _this = _possibleConstructorReturn(this, (TabsBasic.__proto__ || Object.getPrototypeOf(TabsBasic)).call(this, props));

    _initialiseProps.call(_this);

    var _this$props = _this.props,
        styles = _this$props.styles,
        activeKey = _this$props.activeKey;

    _this.state = {
      activeKey: activeKey
    };
    _this.cx = _bind2.default.bind(styles);
    return _this;
  }

  _createClass(TabsBasic, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.activeKey !== this.props.activeKey) {
        this.setState({ activeKey: nextProps.activeKey });
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      if (nextState.activeKey !== this.state.activeKey && this.swipe) {
        this.swipe.slide(nextState.activeKey);
      }
    }
  }, {
    key: 'renderTabList',
    value: function renderTabList() {
      var _this2 = this;

      var children = this.props.children;
      var activeKey = this.state.activeKey;

      var tablist = _react2.default.Children.map(children, function (ele, idx) {
        return _react2.default.createElement(
          _reactTappable2.default,
          {
            className: _this2.cx('item', { active: activeKey === idx }),
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

      var _props = this.props,
          children = _props.children,
          mode = _props.mode;
      var activeKey = this.state.activeKey;

      var pannelStyle = {};
      var tabpanel = _react2.default.Children.map(children, function (ele, idx) {
        var eleProps = {
          cn: _this3.cx('panel', { active: activeKey === idx })
        };
        return ele && _react2.default.cloneElement(ele, eleProps);
      });
      return tabpanel;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var tablist = this.renderTabList();
      var tabpanel = this.renderTabPanel();
      var activeKey = this.state.activeKey;
      var _props2 = this.props,
          mode = _props2.mode,
          children = _props2.children,
          direction = _props2.direction;

      return _react2.default.createElement(
        'div',
        { className: this.cx('tab', { fade: mode === 'mode', slide: mode === 'slide', down: direction === 'down' }) },
        _react2.default.createElement(
          'div',
          { className: this.cx('tab-list') },
          tablist,
          _react2.default.createElement(_Cursor2.default, { className: this.cx('cursor'), index: activeKey, len: children.length })
        ),
        _react2.default.createElement(
          'div',
          { className: this.cx('tab-panels') },
          mode === 'slide' ? _react2.default.createElement(
            _reactSwipe2.default,
            {
              ref: function ref(swipe) {
                return _this4.swipe = swipe;
              },
              style: {
                container: {
                  height: '100%'
                },
                wrapper: {
                  height: '100%'
                }
              },
              swipeOptions: {
                continuous: false,
                startSlide: activeKey,
                transitionEnd: this.onTabClick
              }
            },
            tabpanel
          ) : tabpanel
        )
      );
    }
  }]);

  return TabsBasic;
}(_react2.default.Component);

var _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.onTabClick = function (activeKey) {
    if (_this5.state.activeKey !== activeKey) {
      if (_this5.props.onchange) {
        _this5.props.onchange(activeKey);
      } else {
        _this5.setState({
          activeKey: activeKey
        });
      }
    }
  };
};

TabsBasic.defaultProps = {
  mode: 'fade',
  direction: 'up'
};

TabsBasic.propTypes = {
  children: _react2.default.PropTypes.node,
  defaultActiveKey: _react2.default.PropTypes.number,
  onchange: _react2.default.PropTypes.func,
  styles: _react2.default.PropTypes.object,
  mode: _react2.default.PropTypes.oneOf(['fade', 'slide']),
  direction: _react2.default.PropTypes.oneOf(['up', 'down'])
};

module.exports = TabsBasic;