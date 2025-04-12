import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

const TodoViewOnly = () => {
  const todos = useSelector((state: RootState) => state.todos.value);

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input type='checkbox' checked={todo.complete} />
            {todo.title}
          </label>
        </div>
      ))}
    </div>
  );
};

export default TodoViewOnly;
