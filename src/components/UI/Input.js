import React from 'react';
import classes from './Input.module.css';

function Input({ refValue, type, placeholder }) {
  return <input ref={refValue} type={type} placeholder={placeholder} />;
}

export default Input;
