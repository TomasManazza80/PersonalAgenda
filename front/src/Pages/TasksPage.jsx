import { useEffect } from "react";
import { useTasks } from "../Context/TasksContext.jsx";
import TaskCard from "../Components/taskCard.jsx";

function TasksPage() {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) return (<h1 className="text-center text-2xl text-gray-300 mt-10">No existen tareas registradas</h1>);

  return (
    <div className="bg-black min-h-screen p-4">
      <div className="container mx-auto">
        <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {tasks.map(task => (
            <TaskCard task={task} key={task._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TasksPage;
