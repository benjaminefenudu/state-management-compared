import { useReducer } from 'react';
import { Todo } from './todo.type';

const initialTodos: Todo[] = [
  {
    id: 1,
    title: 'Todo 1',
    complete: false,
  },
  {
    id: 2,
    title: 'Todo 2',
    complete: false,
  },
];

const reducer = (state: Todo[], action: { type: string, id: number }) => {
  switch (action.type) {
    case 'COMPLETE':
      return state.map((todo: Todo) => {
        if (todo.id === action.id) {
          // ... is the spread operator
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

export default function TodoUseReducer() {
  // const [state, dispatch] = useReducer(reducer, initialValue);
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo: Todo) => {
    dispatch({ type: 'COMPLETE', id: todo.id });
  };

  return (
    <>
      {todos.map((todo) => (
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
