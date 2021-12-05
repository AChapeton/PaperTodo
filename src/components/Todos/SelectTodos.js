import React from 'react';
import classes from './SelectTodos.module.css';

function SelectTodos() {
  return (
    <>
      <select>
        <option value="All"></option>
        <option value="Active"></option>
        <option value="Complete"></option>
      </select>
    </>
  );
}

export default SelectTodos;
