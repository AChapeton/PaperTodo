import React from 'react';
import classes from './TodoItem.module.css';

function TodoItem({ text, complete, isComplete }) {
  return (
    <div onClick={isComplete} className={complete ? classes.isComplete : ''}>
      <p>{text}</p>
    </div>
  );
}

export default TodoItem;
