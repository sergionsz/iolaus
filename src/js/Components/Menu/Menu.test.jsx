import React from 'react';
import Menu from './Menu';
import { shallow } from 'enzyme';

describe('Menu', () => {
  const items = [
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
    const menu = shallow(<Menu items={ items } />);
    expect(menu.find('.menu__item')).toHaveLength(2);
  });

  it('Adds a special class to the current menu item', () => {
    const menu = shallow(<Menu items={ items } current='/config' />);
    expect(menu.find('.menu__item--current')).toHaveLength(1);
    expect(menu.find('.menu__item--current').children().text()).toBe('Configuration');
  });
});
