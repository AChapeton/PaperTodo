import React from 'react';
import classes from './SelectTodos.module.css';

function SelectTodos() {
  return (
    <>
      <select>
        <option value="All">All</option>
        <option value="Active">Active</option>
        <option value="Complete">Complete</option>
      </select>
    </>
  );
}

export default SelectTodos;
