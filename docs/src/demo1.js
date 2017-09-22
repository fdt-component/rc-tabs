import React from 'react';
import {Nav, Panels} from '../../src/index.js';

class Demo1 extends React.Component {

  state = {activeKey: 0}
  onChange = activeKey => this.setState({activeKey});
  render() {
    const {activeKey} = this.state;
    return (
      <div>
        <Nav
          activeKey={activeKey}
          items={['选项卡1', '选项卡2', '选项卡3']}
          onChange={this.onChange}
          sticky={false}
        />
        <Panels
          activeKey={activeKey}
        >
          <div style={{lineHeight: 100}}>选项卡1内容</div>
          <div>
            选项卡2内容
          </div>
          <div>
            选项卡3内容
          </div>
        </Panels>
      </div>
    );
  }
}

export default Demo1;
