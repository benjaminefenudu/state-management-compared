import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/store';
import { complete } from './redux/reducers/todosReducer';
import { Todo } from './todo.type';

export default function TodoRedux() {
  // const state = useSelector((state: RootState) => state);
  const todos = useSelector((state: RootState) => state.todos.value);
  const dispatch = useDispatch();

  const handleComplete = (todo: Todo) => {
    // complete is an action creator
    dispatch(complete(todo));
  };

  return (
    <>
      {todos.map((todo: Todo) => (
        <div key={todo.id}>
          <label>
            <input
              type='checkbox'
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}
