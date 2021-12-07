import React, { useState } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import NewTodo from './components/Todos/NewTodo';
import TodoList from './components/Todos/TodoList';
import TodoItem from './components/Todos/TodoItem';
import SelectTodos from './components/Todos/SelectTodos';
function App() {
  const DEFAULT_TODOS = [
    { id: 1, text: 'Buy food', complete: false },
    { id: 2, text: 'Go to the gym', complete: true },
    { id: 3, text: 'Complete React project', complete: false },
    { id: 4, text: 'English class', complete: true },
  ];

  const [todos, setTodos] = useState(DEFAULT_TODOS);

  const onHandlerComplete = () => {
    console.log('Complete');
  };

  const onAddTodo = (todo) => {
    // console.log(`New todo`);
    // console.log(todo);
    setTodos([todo, ...todos]);
    console.log(todos);
  };

  const onDeleteTodo = () => {
    console.log('Todo was deleted');
  };

  return (
    <div className="App">
      <Header />
      <NewTodo onSubmit={onAddTodo} />
      <br />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            complete={todo.complete}
            isComplete={onHandlerComplete}
          />
        ))}
      </TodoList>
      <SelectTodos />
    </div>
  );
}

export default App;
