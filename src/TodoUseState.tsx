import { useState } from 'react';
import { Todo } from './todo.type';

const initialTodos: Todo[] = [
  {
    id: 3,
    title: 'Todo 3',
    complete: false,
  },
  {
    id: 4,
    title: 'Todo 4',
    complete: false,
  },
];

const doSomething = (state: Todo[], action: { type: string, id: number }) => {
  switch (action.type) {
    case 'COMPLETE':
      return state.map((todo: Todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

export default function TodoUseState() {
  // const [state, setState] = useState(initialValue);
  const [todos, setTodos] = useState(initialTodos);

  const handleComplete = (todo: Todo) => {
    setTodos(doSomething(todos, { type: 'COMPLETE', id: todo.id }));
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
