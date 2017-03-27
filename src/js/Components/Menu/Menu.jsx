import React from 'react';
import { Link } from 'react-router';

export const Menu = ({elements, current}) => {
  const renderedElements = elements.map(element => (
    <Link
      className={ `menu__element ${element.path === current ? 'menu__element--current' : ''}` }
      to={ element.path }
      key={ element.id }
    >
      { element.name }
    </Link>
  ));
  return (
    <div>
      { renderedElements }
    </div>
  );
}

export default Menu;
