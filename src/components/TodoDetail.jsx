
import { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TodoContext } from '../TodoContext';

const TodoDetail = () => {
  const { id } = useParams();
  const { state } = useContext(TodoContext);
  const [todoDetail, setTodoDetail] = useState(null);

  useEffect(() => {
    const fetchTodoDetail = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
      const data = await response.json();
      setTodoDetail(data);
    };

    if (!state.selectedTodo || state.selectedTodo.id !== parseInt(id)) {
      fetchTodoDetail();
    } else {
      setTodoDetail(state.selectedTodo);
    }
  }, [id, state.selectedTodo]);

  return (
    <div>
      <h1>Detalles de la Tarea</h1>
      {todoDetail ? (
        <div>
          <h2>{todoDetail.title}</h2>
          <p>Completado: {todoDetail.completed ? 'Sí' : 'No'}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default TodoDetail;