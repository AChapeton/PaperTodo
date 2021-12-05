import './App.css';
import Header from './components/Layout/Header';
import NewTodo from './components/Todos/NewTodo';
import TodoList from './components/Todos/TodoList';
import TodoItem from './components/Todos/TodoItem';
import SelectTodos from './components/Todos/SelectTodos';
function App() {
  return (
    <div className="App">
      <Header />
      <NewTodo />
      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>
      <SelectTodos />
    </div>
  );
}

export default App;
