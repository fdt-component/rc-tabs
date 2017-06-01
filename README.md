# React-Tab

> 基于react 的标签页组件(适用于移动端)

* 基于css-modules
* 基于wepack打包
* 样式灵活，可深度定制

## 引用方法

```
安装
npm install --save-dev ygq-rc-tabs
或者
yarn add --dev ygq-rc-tabs

引用
import {Tabs, TabPanel} from 'ygq-rc-tabs'
```

## 使用

``` javascript
import React from 'react';
import {Tabs, TabPanel} from '../../src/index.js';

class Demo1 extends React.Component {

  state = {
    activeKey: 0
  }

  onChange = idx => {
    this.setState({
      activeKey: idx
    });
  }

  render() {
    return (
      <Tabs
        activeKey={this.state.activeKey}
        direction="down"
        mode="fade"
        onChange={this.onChange}
      >
        <TabPanel name="选项卡1">
          <div>选项卡1内容</div>
        </TabPanel>
        <TabPanel name="选项卡2">
          选项卡2内容
        </TabPanel>
        <TabPanel name="选项卡3">
          选项卡3内容
        </TabPanel>
      </Tabs>
    );
  }
}

export default Demo1;
```

## API

### Tabs

| Properties | Descrition | Type | isRequired | Default |
| --- | --- | --- | --- | --- |
| activeKey | 初始化时展示的标签页 | number | no | 0 |
| mode | 切换动画 | oneOf(['fade', 'slide']) | no | fade |
| onChange | 切换标签页的回调(回调参数为当前TabPanel的key值) | func | no | 无 |
| clean | 是否清除默认样式 | bool | no | false |
| direction | 标签页位置 | oneOf(['up', 'down']) | no | up |
| mergeStyle| 样式覆盖 | object(tab, tab-list, item, active, tab-panels, panel, cursor) | no | 无 |

### TabPanel

| Properties | Descrition | Type | isRequired | Default |
| --- | --- | --- | --- | --- |
| name | 标签的名字或展示内容 | string/node | yes | 无 |

## example
https://fdt-component.github.io/rc-tabs/docs/index.html
