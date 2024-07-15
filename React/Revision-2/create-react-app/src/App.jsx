import './App.css';
import { useEffect, useState } from 'react';
import TaskItem from './components/TaskItem';
import {ErrorIndicator} from './components/ErrorIndicator';
import {LoadingIndicator} from './components/LoadingIndicator';

function App() {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchAndUpdateData();
  }, []);

  const fetchAndUpdateData = async (url) => {};

  return (
    <div className="App">
      <h1>List of tasks</h1>
    </div>
  );
}

export default App;


