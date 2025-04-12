import { createSlice } from '@reduxjs/toolkit';
import { Todo } from '../../todo.type';

const initialTodos: Todo[] = [
  {
    id: 5,
    title: 'Todo 5',
    complete: false,
  },
  {
    id: 6,
    title: 'Todo 6',
    complete: false,
  },
];

const todosSlice = createSlice({
  name: 'todos',
  initialState: { value: initialTodos },
  reducers: {
    complete: (state, action) => {
      state.value = state.value.map((todo) => {
        if (todo.id === action.payload.id) {
          // ... is the spread operator
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
      return state;
    },
  },
});

export const { complete } = todosSlice.actions;
export default todosSlice.reducer;
