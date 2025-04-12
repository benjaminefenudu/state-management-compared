import './App.css';
import TodoUseReducer from './TodoUseReducer';
import TodoRedux from './TodoRedux';
import TodoUseState from './TodoUseState';
import TodoViewOnly from './TodoViewOnly';

function App() {
  return (
    <div>
      <div>
        <h3>Todo useReducer</h3>
        <TodoUseReducer  />
      </div>
      <hr />
      <div>
        <h3>Todo useState</h3>
        <TodoUseState />
      </div>
      <hr />
      <div>
        <h3>Todo Redux</h3>
        <TodoRedux />
      </div>
      <hr />
      <div>
        <h3>Todo View Only</h3>
        <TodoViewOnly  />
      </div>
    </div>
  );
}

export default App;
