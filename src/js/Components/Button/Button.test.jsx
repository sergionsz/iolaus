import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  it('Renders a button', () => {
    const onClick = jest.fn()
    const button = shallow(<Button onClick={ onClick }/>);
    expect(button.find('button')).toHaveLength(1);
  });
  it('Executes the onClick function when clicked', () => {
    const onClick = jest.fn()
    const button = shallow(<Button onClick={ onClick }/>);
    button.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it('Executes the onClick function when pressing enter or space', () => {
    const onClick = jest.fn()
    const button = shallow(<Button onClick={ onClick }/>);
    button.simulate('keyup', {key: 'Enter'});
    button.simulate('keyup', {key: ' '});
    expect(onClick).toHaveBeenCalledTimes(2);
  });
  it('Renders a div when there is nothing to click', () => {
    const button = shallow(<Button />);
    expect(button.find('button')).toHaveLength(0);
    expect(button.find('div')).toHaveLength(1);
  });
});
