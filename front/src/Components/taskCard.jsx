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
            
            // agregar la logica de eliminar con axios aqui
            
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
      <div className="bg-black/60 max-w-md w-full p-10 rounded-full">
          <header className="flex justify-between">
              <h1 className="text-white text-2xl font-bold">{task.title}</h1>
              <div className="flex gap-x-2 items-center">
                  <button 
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                      onClick={handleDelete}
                  >
                      Eliminar
                  </button>
                  <button>
                      <Link to={`/tasks/${task._id}`}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Editar</Link>
                  </button>
              </div>
          </header>
          <p className="text-slate-300 truncate max-w-sm">{task.description}</p>
          <p className="text-white">{days(task.date).utc().format("DD/MM/YY")}</p>
      </div>
  );
}


export default TaskCard