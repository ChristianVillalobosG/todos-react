

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TodoContext } from '../TodoContext';

const TodoList = () => {
  const { state, selectTodo } = useContext(TodoContext);

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>
            <Link 
              to={`/todos/${todo.id}`} 
              onClick={() => selectTodo(todo)}
            >
              {todo.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;