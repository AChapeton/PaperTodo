import React, { useRef } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import classes from './NewTodo.module.css';

function NewTodo({ onSubmit }) {
  const inputTodo = useRef('');

  const onHandlerSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.random(),
      text: inputTodo.current.value,
      complete: false,
    };
    onSubmit(newTodo);
    // console.log(inputTodo.current.value);
  };

  return (
    <>
      <form onSubmit={onHandlerSubmit}>
        <Input refValue={inputTodo} type={'text'} placeholder={'New Todo'} />
        <Button type={'submit'} text={'Add'} />
      </form>
    </>
  );
}

export default NewTodo;
