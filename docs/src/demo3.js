import React from 'react';
import {Tabs, Panels, Panel} from '../../src/index.js';
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
        <Tabs
          activeKey={this.state.activeKey}
          items={['1',this.renderItem()]}
          mergeStyles={styles}
          onChange={this.onChange}
        />
        <Panels
          activeKey={this.state.activeKey}
          mergeStyles={styles}
          showAll={false}
        >
          <Panel className="123">
            <p>1111111111</p>
            <p>1111111111</p>
            <p>1111111111</p>
            <p>1111111111</p>
          </Panel>
          <Panel>
            <p>222222222</p>
            <p>222222222</p>
            <p>222222222</p>
            <p>222222222</p>
          </Panel>
        </Panels>
      </div>
    );
  }
}

export default Demo1;
