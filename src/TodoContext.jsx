import { createContext, useReducer, useEffect } from 'react';

const TodoContext = createContext();

const initialState = {
  todos: [],
  selectedTodo: null,
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TODOS':
      return { ...state, todos: action.payload };
    case 'SET_SELECTED_TODO':
      return { ...state, selectedTodo: action.payload };
    default:
      return state;
  }
};

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const loadTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    dispatch({ type: 'SET_TODOS', payload: data });
  };

  const selectTodo = (todo) => {
    dispatch({ type: 'SET_SELECTED_TODO', payload: todo });
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <TodoContext.Provider value={{ state, selectTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };