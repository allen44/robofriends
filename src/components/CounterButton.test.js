import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';

it('expect to render CounterButton component', () => {
    const mockColor = 'red';
    const shallowRender = shallow(<CounterButton color={mockColor} />);
    expect(shallowRender).toMatchSnapshot();
});

it('correctly increments the counter', () => {
    const mockColor = 'red';
    const shallowRender = shallow(<CounterButton color={mockColor} />);

    shallowRender.find('[id="counter"]').simulate('click');
    shallowRender.find('[id="counter"]').simulate('click');
    expect(shallowRender.state()).toEqual({count: 2})
    shallowRender.find('[id="counter"]').simulate('click');
    expect(shallowRender.state()).toEqual({count: 3})
    shallowRender.find('[id="counter"]').simulate('keypress');
    expect(shallowRender.state()).toEqual({count: 3})
    expect(shallowRender.props().color).toEqual('red')
})