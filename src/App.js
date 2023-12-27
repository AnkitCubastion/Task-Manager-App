import './App.css';
import TodoList from './component/TodoList';
import { TodoProvider } from './component/TodoContext';

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
