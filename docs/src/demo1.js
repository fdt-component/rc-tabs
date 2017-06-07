import React from 'react';
// import {Tabs, TabPanel} from '../../lib/index.js';
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
        mode="slide"
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
