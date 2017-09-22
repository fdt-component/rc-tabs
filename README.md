# React-Tab

> 基于react 的标签页组件(适用于移动端)

* 基于css-modules
* 基于wepack打包
* 样式灵活，可深度定制

## 引用方法

```
安装
npm install ygq-rc-tabs
或者
yarn add ygq-rc-tabs

引用
import {Nav, Panel} from 'ygq-rc-tabs'
```

## 使用

``` javascript
import React from 'react';
import {Nav, Panel} from '../../src/index.js';

class Demo1 extends React.Component {
  state = {activeKey: 0}
  onChange = idx => this.setState({activeKey: idx});

  render() {
    return (
      <Nav
        activeKey={this.state.activeKey}
        onChange={this.onChange}
        items={['栏目1','栏目2']}
      />
      <Panels
        activeKey={this.state.activeKey}
        showAll={false}
      >
        <div>我是栏目1</div>
        <div>我是栏目2</div>
      </Panels>
    );
  }
}
```

## 样式自定义

``` less
/* 默认动画效果 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Nav 组件样式 */
.nav-wrap {
  width: 100%;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}

.nav {
  display: block;
  line-height: 40px;
  flex: 1;
  &.active {
  }
}

/* Panels组件样式 */
.panels {
  width: 100%;
}

.panel {
  width: 100%;
  height: 100%;
  &.active {
    animation: fadeIn .8s;
  }
}

/* Tab 游标样式 */
.cursor-wrap {
  position: absolute;
  left: 0;
  bottom: 0;
  transition: transform 300ms ease-out;
}

.cursor {
  width: 100%;
  height: 2px;
  margin: auto;
  background-color: #4A86EA;
}

```

当前项目依赖css-modules，新建一份自己的自定义css|less文件， 比如tabstyle.less;
* 命名需和默认样式名字保持一致
* 如果需要全部自定义，开启组件clean属性为true，消除默认样式

```
import styles form './tabstyle.less';
```

将styles作为mergeStyle传入对应react 组件即可

## API

### Nav

| Properties | Descrition | Type | isRequired | Default |
| --- | --- | --- | --- | --- |
| activeKey | 初始化时展示的标签页 | number | no | 0 |
| items | Nav标签内容 | array | yes | null |
| onChange | 切换标签页的回调(回调参数为当前点击Nav的key值) | func | yes | 无 |
| clean | 是否清除默认样式 | bool | no | false |
| noCursor | 清除nav游标 | bool | no | false |
| mergeStyle| 样式覆盖 | object(tab, tab-list, item, active, tab-panels, panel, cursor) | no | 无 |

### Panel

| Properties | Descrition | Type | isRequired | Default |
| --- | --- | --- | --- | --- |
| activeKey | 初始化时展示的标签页 | number | no | 0 |
| name | 标签的名字或展示内容 | string/node | yes | 无 |
| clean | 是否清除默认样式 | bool | no | false |
| showAll | 是否展示全部面板 | bool | no | true |
| mergeStyle| 样式覆盖 | object(tab, tab-list, item, active, tab-panels, panel, cursor) | no | 无 |

## example
https://fdt-component.github.io/rc-tabs/docs/index.html
