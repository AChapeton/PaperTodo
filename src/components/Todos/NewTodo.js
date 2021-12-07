import React from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import classes from './NewTodo.module.css';

function NewTodo() {
  const onHandlerSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <>
      <form onSubmit={onHandlerSubmit}>
        <Input type={'text'} placeholder={'New Todo'} />
        <Button type={'submit'} text={'Add'} />
      </form>
    </>
  );
}

export default NewTodo;
