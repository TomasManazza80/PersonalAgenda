import { useTasks } from "../Context/TasksContext";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

import days from "dayjs";
import utc from "dayjs/plugin/utc";
days.extend(utc);

function TaskCard({ task, onTaskDeleted }) {
  const { deleteTask } = useTasks();

  const handleDelete = () => {
      Swal.fire({
          title: '¿Estás seguro?',
          text: "¡No podrás revertir esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí, eliminarlo!'
      }).then((result) => {
          if (result.isConfirmed) {
              deleteTask(task._id).then(() => {
                  Swal.fire(
                      'Eliminado!',
                      'Tu tarea ha sido eliminada.',
                      'success'
                  );
                  onTaskDeleted(); // Llama a la función pasada en props
              });
          }
      });
  };

  return (
      <div className="bg-gray-800 max-w-md w-full p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:max-h-full hover:overflow-auto">
          <header className="flex justify-between mb-4">
              <h1 className="text-blue-300 text-xl font-bold">{task.title}</h1>
              <div className="flex gap-x-2 items-center">
                  <button 
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-full transition-all duration-300"
                      onClick={handleDelete}
                  >
                      Eliminar
                  </button>
                  <button>
                      <Link to={`/tasks/${task._id}`}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-full transition-all duration-300">Editar</Link>
                  </button>
              </div>
          </header>
          <p className="text-gray-400 mb-4">{task.description}</p>
          <p className="text-gray-500">{days(task.date).utc().format("DD/MM/YY")}</p>
      </div>
  );
}

export default TaskCard;
