import React from 'react';
import {Nav, Panels} from '../../src/index.js';
import styles from './demo3.less';
class Demo1 extends React.Component {
  state = {
    activeKey: 0
  }
  onChange = idx => {
    this.setState({
      activeKey: idx
    });
  }
  renderItem() {
    return (<span style={{color: 'red'}}>12312312</span>);
  }
  render() {
    return (
      <div>
        <Nav
          activeKey={this.state.activeKey}
          items={['标签栏1','标签栏2']}
          mergeStyles={styles}
          onChange={this.onChange}
        />
        <Panels
          activeKey={this.state.activeKey}
          mergeStyles={styles}
          showAll={false}
        >
          <div className="123">
            <p>1111111111</p>
            <p>1111111111</p>
            <p>1111111111</p>
            <p>1111111111</p>
          </div>
          <div>
            <p>222222222</p>
            <p>222222222</p>
            <p>222222222</p>
            <p>222222222</p>
          </div>
        </Panels>
      </div>
    );
  }
}

export default Demo1;
