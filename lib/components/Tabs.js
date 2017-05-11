'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTappable = require('react-tappable');

var _reactTappable2 = _interopRequireDefault(_reactTappable);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _reactSwipe = require('react-swipe');

var _reactSwipe2 = _interopRequireDefault(_reactSwipe);

var _Cursor = require('./Cursor');

var _Cursor2 = _interopRequireDefault(_Cursor);

var _tabs = require('./tabs.css');

var _tabs2 = _interopRequireDefault(_tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

    _initialiseProps.call(_this);

    var _this$props = _this.props,
        mergeStyles = _this$props.mergeStyles,
        activeKey = _this$props.activeKey;

    _this.state = {
      activeKey: activeKey
    };
    _this.cx = _bind2.default.bind(_this.initStyle(_tabs2.default, mergeStyles));
    return _this;
  }

  _createClass(Tabs, [{
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
    key: 'initStyle',
    value: function initStyle(styles, mergeStyles) {
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
    key: 'renderTabList',
    value: function renderTabList() {
      var _this2 = this;

      var children = this.props.children;
      var activeKey = this.state.activeKey;

      return _react2.default.Children.map(children, function (ele, idx) {
        return _react2.default.createElement(
          _reactTappable2.default,
          {
            className: _this2.cx('item', { active: activeKey === idx }),
            onTap: _this2.onTabClick.bind(_this2, idx)
          },
          ele.props.name
        );
      });
    }
  }, {
    key: 'renderTabPanel',
    value: function renderTabPanel() {
      var _this3 = this;

      var children = this.props.children;
      var activeKey = this.state.activeKey;

      return _react2.default.Children.map(children, function (ele, idx) {
        var eleProps = {
          cn: _this3.cx('panel', { active: activeKey === idx })
        };
        return ele && _react2.default.cloneElement(ele, eleProps);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var tablist = this.renderTabList();
      var tabpanel = this.renderTabPanel();
      var activeKey = this.state.activeKey;
      var _props = this.props,
          mode = _props.mode,
          children = _props.children,
          direction = _props.direction;

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

  return Tabs;
}(_react2.default.Component);

var _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.onTabClick = function (activeKey) {
    if (_this5.state.activeKey !== activeKey) {
      if (_this5.props.onChange) {
        _this5.props.onChange(activeKey);
      } else {
        _this5.setState({
          activeKey: activeKey
        });
      }
    }
  };
};

Tabs.defaultProps = {
  mode: 'fade',
  direction: 'up'
};

Tabs.propTypes = {
  children: _propTypes2.default.node,
  defaultActiveKey: _propTypes2.default.number,
  onChange: _propTypes2.default.func,
  mergeStyles: _propTypes2.default.object,
  mode: _propTypes2.default.oneOf(['fade', 'slide']),
  direction: _propTypes2.default.oneOf(['up', 'down'])
};

module.exports = Tabs;