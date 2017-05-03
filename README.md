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

## webpack.config.js 需要添加如下loader
> 如果不是全局使用css-modules
需要在其余loader中屏蔽`tabs.css`文件

```
{
  test: /(tabs)\.css/,
  loader: [
    'style-loader',
    'css-loader?modules&localIdentName=[name]__[local]__[hash:base64:5]',
    'postcss-loader'
  ],
}
```


## API

### Tabs

| Properties | Descrition | Type | isRequired | Default |
| --- | --- | --- | --- | --- |
| defaultActiveKey | 初始化时展示的标签页 | string/number | yes | 0 |
| onchange| 切换标签页的回调(回调参数为当前TabPanel的key值) | func | no | 无 |
| mergeStyle| 样式覆盖 | object | no | 无 |

### TabPanel

| Properties | Descrition | Type | isRequired | Default |
| --- | --- | --- | --- | --- |
| name | 标签的名字或展示内容 | string/node | yes | 无 |
| key | 标签的key | string/number | no | number(0,1,2...) |

## example
https://fdt-component.github.io/rc-tabs/docs/index.html
