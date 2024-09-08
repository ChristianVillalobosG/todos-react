import 'react';
import { Route, Routes } from 'react-router-dom';
import TodoList from './components/TodoList';
import TodoDetail from './components/TodoDetail';

const App = () => {
  return (
    <Routes> 
      <Route path="/" element={<TodoList />} />
      <Route path="/todos" element={<TodoList />} />
      <Route path="/todos/:id" element={<TodoDetail />} />
    </Routes>
  );
};

export default App;