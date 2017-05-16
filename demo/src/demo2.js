import React from 'react';
import ReactDom from 'react-dom';
import {Tabs, TabPanel} from '../src/index.js';
import styles from './demo2.css';
class Demo2 extends React.Component {
  handleChange(idx) {
    console.log('点击',idx, '选项卡');
  }

  renderPanel1() {
    const style = {
      textAlign: 'center',
      lineHeight: '300px',
    };
    return (
      <div style={style}>
        我是选项卡1
      </div>
    );
  }

  renderName1() {
    const style = {
      background: 'url("http://placehold.it/150x60") center center no-repeat',
      backgroundSize: '100%',
      height: '100%',
    };
    return (
      <div style={style}/>
    );
  }

  render() {
    const name1 = this.renderName1();
    const panel1 = this.renderPanel1();
    return (
      <Tabs
        defaultActiveKey={0}
        mergeStyles={styles}
        onchange={this.handleChange}
      >
        <TabPanel name={name1}>
          {panel1}
        </TabPanel>

        <TabPanel name="选项卡2">
          选项卡2内容
        </TabPanel>
      </Tabs>
    );
  }
}

ReactDom.render((
  <Demo2/>
), document.getElementById('j-app'));
