import React from 'react';
import { Link } from 'react-router';

import './Menu.css';

export const Menu = ({items, current}) => {
  const renderedItems = items.map(item => (
    <Link
      className={ `menu__item ${item.path === current ? 'menu__item--current' : ''}` }
      to={ item.path }
      key={ item.id }
    >
      { item.name }
    </Link>
  ));
  return (
    <div className='menu'>
      { renderedItems }
    </div>
  );
}

Menu.defaultProps = {
  items: [
    {
      id: 'workout',
      name: 'Workout',
      path: '/workout'
    },
    {
      id: 'config',
      name: 'Configuration',
      path: '/config'
    },
    {
      id: 'create',
      name: 'Create',
      path: '/create'
    }
  ]
}

export default Menu;
