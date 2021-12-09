import React, { useState, useEffect } from 'react';
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
  const [category, setCategory] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  const onHandlerComplete = (id) => {
    // console.log(id);
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    // console.log(updatedTodos);
    setTodos([...updatedTodos]);
  };

  const onAddTodo = (todo) => {
    // console.log(`New todo`);
    // console.log(todo);
    setTodos([todo, ...todos]);
    // console.log(todos);
  };

  // const onDeleteTodo = () => {
  //   console.log('Todo was deleted');
  // };

  const onSelectTodos = (e) => {
    // console.log(e.target.value);
    setCategory(e.target.value);
  };

  useEffect(() => {
    if (category === 'all') {
      setFilteredTodos(todos);
    }

    if (category === 'active') {
      setFilteredTodos(todos.filter((todo) => todo.complete === false));
    }

    if (category === 'complete') {
      setFilteredTodos(todos.filter((todo) => todo.complete === true));
    }
  }, [category, todos]);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <NewTodo onSubmit={onAddTodo} />
        <br />
        <TodoList>
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              text={todo.text}
              complete={todo.complete}
              isComplete={() => onHandlerComplete(todo.id)}
            />
          ))}
        </TodoList>
        <SelectTodos onSelect={onSelectTodos} />
      </div>
    </div>
  );
}

export default App;
