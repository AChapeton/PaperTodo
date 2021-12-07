import React from 'react';
import classes from './Input.module.css';

function Input({ type, placeholder }) {
  return <input type={type} placeholder={placeholder} />;
}

export default Input;
