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

```
<Tabs
  defaultActiveKey={0}
  mergeStyles={styles}
  onchange={this.handleChange}
>
  <TabPanel name="选项卡1">
    选项卡1内容
  </TabPanel>

  <TabPanel name="选项卡2">
    选项卡2内容
  </TabPanel>
</Tabs>
```    


## API

### Tabs

| Properties | Descrition | Type | isRequired | Default |
| --- | --- | --- | --- | --- |
| defaultActiveKey | 初始化时展示的标签页 | string | no | 第一个TabPanel |
| onchange| 切换标签页的回调 | func | no | 无 |
| ~~tabHeight(废弃)~~| 标签的高度 | string | no | "45px" |
| ~~tabStaticStyle(废弃)~~| 标签未选中的样式 | object | no | {color: '#333',borderBottom: '1px solid #333'} |
| ~~tabActiveStyle(废弃)~~| 标签选中的样式 | object | no | {color: 'red',borderBottom: '3px solid red'} |
| mergeStyle| 样式覆盖 | object | no | 无 |

### TabPanel

| Properties | Descrition | Type | isRequired | Default |
| --- | --- | --- | --- | --- |
| name | 标签的名字或展示内容 | string/node | yes | 无 |
| ~~key(废弃)~~ | 标签的key | string | yes | 无 |

## example
https://fdt-component.github.io/rc-tabs/
