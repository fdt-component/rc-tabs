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
      <div>
        <Tabs
          activeKey={this.state.activeKey}
          direction="up"
          mode="fade"
          onChange={this.onChange}
          sticky={false}
        >
          <TabPanel name="选项卡1">
            <div style={{lineHeight: 100}}>选项卡1内容</div>
          </TabPanel>
          <TabPanel name="选项卡2">
            选项卡2内容
          </TabPanel>
          <TabPanel name="选项卡3">
            选项卡3内容
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default Demo1;
