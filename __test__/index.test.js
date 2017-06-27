import React from 'react';
import sinon from 'sinon';
import {Tabs, TabPanel} from '../src/index.js';
import {mount} from 'enzyme';

describe('<Tabs />', () => {

  it('calls componentWillReceiveProps', () => {
    sinon.spy(Tabs.prototype, 'componentWillReceiveProps');
    const wrapper = mount(
      <Tabs>
        <TabPanel name="1" />
        <TabPanel name="2" />
      </Tabs>
    );
    wrapper.setProps({
      activeKey: 1,
    });
    expect(Tabs.prototype.componentWillReceiveProps.calledOnce).toEqual(true);
  });

  it('allows us to set props', () => {
    const wrapper = mount(
      <Tabs>
        <TabPanel name="1" />
        <TabPanel name="2" />
      </Tabs>
    );
    expect(wrapper.props().activeKey).toEqual(0);
    expect(wrapper.props().mode).toEqual('fade');
    expect(wrapper.props().direction).toEqual('up');
    expect(wrapper.props().clean).toEqual(false);
    wrapper.setProps({
      activeKey: 1,
      mode: 'slide',
      direction: 'down',
      clean: true
    });
    expect(wrapper.props().activeKey).toEqual(1);
    expect(wrapper.props().mode).toEqual('slide');
    expect(wrapper.props().direction).toEqual('down');
    expect(wrapper.props().clean).toEqual(true);
  });

  it('simulates tap events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount(
      <Tabs>
        <TabPanel name="1" />
        <TabPanel name="2" />
      </Tabs>
    );
    console.log(wrapper.find('item'));
    wrapper.find('.item').simulate('tap');
    expect(onButtonClick.calledOnce).to.equal(true);
  });
});
