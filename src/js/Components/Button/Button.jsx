import React from 'react';


export const Button = ({onClick, children}) => {
  // When there is nothing to click, we don't need a button
  // Render a div instead
  if (typeof onClick !== 'function') {
    return (
      <div>{ children }</div>
    )
  }

  const onKeyUp = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onClick(e);
    }
  }

  return (
    <button onClick={ onClick } onKeyUp={ onKeyUp }>
      { children }
    </button>
  )
}

export default Button;
