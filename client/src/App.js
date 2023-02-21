import './App.css';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
function App() {
  return (
    <div className="App">
      <TodoForm/>
      <Todos/>
    </div>
  );
}

export default App;
