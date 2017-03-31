import React from 'react';
import ReactDom from 'react-dom';
import {Tabs, TabPanel} from '../src/index.js';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabStaticStyle: {
        color: '#999',
        borderBottom: '2px solid #999'
      },
      tabActiveStyle: {
        color: 'orange',
        borderBottom: '3px solid orange'
      }
    };

  }

  renderName() {
    const style = {
      display: 'block',
      width: '100%',
      height: '100%',
      background: 'url(//placehold.it/120x30.png) center center no-repeat',
      backgroundSize: '100% auto'
    };
    return <div style={style}/>;
  }

  handleChange(activeKey) {
    console.log(activeKey);
  }

  render() {
    return (
      <Tabs
        defaultActiveKey="1"
        onchange={this.handleChange}
      >
        <TabPanel key="1" name="选项卡1">
          选项卡1内容
        </TabPanel>

        <TabPanel key="2" name="选项卡2">
          选项卡2内容
        </TabPanel>
      </Tabs>
    );
  }
}

ReactDom.render(<App/>, document.getElementById('j-app'));
