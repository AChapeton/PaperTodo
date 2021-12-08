import React, { useState } from 'react';
import classes from './SelectTodos.module.css';

function SelectTodos({ onSelect }) {

  return (
    <form>
      <select onChange={e => onSelect(e)}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="complete">Complete</option>
      </select>
    </form>
  );
}

export default SelectTodos;
