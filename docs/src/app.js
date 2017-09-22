import React from 'react';
import {Nav, Panels} from '../../src/index.js';
import Demo1 from './demo1.js';
// import Demo2 from './demo2.js';
// import Demo3 from './demo3.js';
class App extends React.Component {

  state = {activeKey: 0}
  onChange = activeKey => this.setState({activeKey});
  render() {
    const {activeKey} = this.state;
    return (
      <div>
        <Panels
          activeKey={activeKey}
          showAll={false}
        >
          <Demo1 />
          <div>1
            <div></div>
            <div>2</div>
            <div>2</div>
            <div>2</div>
          </div>
        </Panels>
        <Nav
          activeKey={activeKey}
          items={['demo1', 'demo2', 'demo3']}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default App;
