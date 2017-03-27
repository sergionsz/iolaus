import React from 'react';
import Menu from './Menu';
import { shallow } from 'enzyme';

describe('Menu', () => {
  const elements = [
    {
      id: 'workout',
      name: 'Workout',
      path: '/workout'
    },
    {
      id: 'config',
      name: 'Configuration',
      path: '/config'
    }
  ];

  it('Renders a menu', () => {
    const menu = shallow(<Menu elements={ elements } />);
    expect(menu.find('.menu__element')).toHaveLength(2);
  });

  it('Adds a special class to the current menu element', () => {
    const menu = shallow(<Menu elements={ elements } current='/config' />);
    expect(menu.find('.menu__element--current')).toHaveLength(1);
    expect(menu.find('.menu__element--current').children().text()).toBe('Configuration');
  });
});
