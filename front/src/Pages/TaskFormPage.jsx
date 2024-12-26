import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import { createTaskRequest, updateTaskRequest, getTaskRequest } from '../api/tasks';
import { useNavigate, useParams } from 'react-router-dom';

const TaskForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    loadTask();
  }, []);

  const loadTask = async () => {
    if (params.id) {
      const task = await getTaskRequest(params.id);
      setData(task.data);  // Asegúrate de usar task.data para acceder a los datos reales
    }
  };

  const onSubmit = handleSubmit((data) => {
    const dataValid = {
      ...data,
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
      difficulty: data.difficulty || "Fácil",
    };

    if (params.id) {
      updateTaskRequest(params.id, dataValid);
    } else {
      createTaskRequest(dataValid);
    }
    navigate("/tasks");
  });

  return (
    <form onSubmit={onSubmit} className="max-w-xl mx-auto bg-white p-8 shadow-md rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Título:
        </label>
        <input
          type="text"
          defaultValue={data.title}  // Usar el valor por defecto
          {...register('title', { required: true })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.title && <p className="text-red-500 text-xs italic">Por favor, ingresa un título.</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Descripción:
        </label>
        <textarea
          defaultValue={data.description}  // Usar el valor por defecto
          {...register('description', { required: true })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.description && <p className="text-red-500 text-xs italic">Por favor, ingresa una descripción.</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Fecha:
        </label>
        <input
          type="date"
          defaultValue={data.date}  // Usar el valor por defecto
          {...register('date')}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Dificultad:
        </label>
        <select
          defaultValue={data.difficulty}  // Usar el valor por defecto
          {...register('difficulty')}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="Fácil">Fácil</option>
          <option value="Media">Media</option>
          <option value="Difícil">Difícil</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Guardar
      </button>
    </form>
  );
};

export default TaskForm;
