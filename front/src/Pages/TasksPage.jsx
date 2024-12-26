import { useEffect, useState } from "react";
import { useTasks } from "../Context/TasksContext.jsx";
import TaskCard from "../Components/taskCard.jsx";
import { Link } from "react-router-dom";

function TasksPage() {
  const { getTasks, tasks } = useTasks();
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);

  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {
    if (selectedDifficulty) {
      setFilteredTasks(tasks.filter(task => task.difficulty === selectedDifficulty));
    } else {
      setFilteredTasks(tasks);
    }
  }, [tasks, selectedDifficulty]);

  const handleDifficultyClick = (difficulty) => {
    setSelectedDifficulty(difficulty);
  };

  if (tasks.length === 0) {
    return <h1 className="text-center text-2xl text-gray-300 mt-10">No existen tareas registradas</h1>;
  }

  return (
    <div className="bg-gray-900 min-h-screen p-4">
      <div className="flex">
        <aside className="bg-gray-800 p-4 h-screen w-64">
          <ul>
            <li>
              <a href="#" onClick={() => handleDifficultyClick('Fácil')} className="text-white block py-2 hover:bg-gray-700">Fácil</a>
            </li>
            <li>
              <a href="#" onClick={() => handleDifficultyClick('Media')} className="text-white block py-2 hover:bg-gray-700">Media</a>
            </li>
            <li>
              <a href="#" onClick={() => handleDifficultyClick('Difícil')} className="text-white block py-2 hover:bg-gray-700">Difícil</a>
            </li>
            <li>
              <a href="#" onClick={() => handleDifficultyClick(null)} className="text-white block py-2 hover:bg-gray-700">Todos</a>
            </li>
          </ul>
          <div className="mt-4 border-t border-gray-600 pt-4">
            <ul>
              <li>
                <a href="#" className="text-white block py-2 hover:bg-gray-700">Simplifica Tareas</a>
              </li>
              <li>
                <a href="#" className="text-white block py-2 hover:bg-gray-700">Crear Objetivo</a>
              </li>
             
            </ul>
          </div>
        </aside>
        <main className="container mx-auto flex-grow">
          <h1 className="text-center text-2xl text-gray-300 m-10">Tareas Pendientes</h1>
          <div className="text-center my-4">
            <Link
              to="/add-task"
              className="m-4 bg-indigo-400 hover:bg-indigo-300 text-white px-4 py-2 rounded-full transition-all duration-300"
            >
              + Nueva
            </Link>
          </div>
          <div className="flex flex-row flex-wrap gap-6 bg-gray-700 p-5 border border-gray-600 rounded-lg">
            {filteredTasks.map(task => (
              <TaskCard task={task} key={task._id} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default TasksPage;
