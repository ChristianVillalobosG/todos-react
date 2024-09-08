
import { createRoot } from 'react-dom/client'
import App from './App.jsx' 
import { TodoProvider } from './TodoContext'; 
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'

createRoot(document.getElementById('root')).render(
  <Router>
  <TodoProvider>
    <App />
  </TodoProvider>
</Router>
)
