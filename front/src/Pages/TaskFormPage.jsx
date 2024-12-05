import {useForm} from "react-hook-form";
import { useTasks } from "../Context/TasksContext";
import {useNavigate,useParams} from "react-router-dom";
import { useEffect } from "react";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TaskFormPage(){
  const {register,handleSubmit,setValue}=useForm();
  const {createTask,getTask, updateTask}=useTasks();
  const navigate=useNavigate();
  const params=useParams();

  useEffect(()=>{
    async function loadTask(){
      if(params.id){
        const task=await getTask(params.id);
        console.log(task)
        setValue('title',task.title);
        setValue('description',task.description);
        setValue("date",dayjs(task.date).utc().format("YYYY-MM-DD"));
      }
    }
    loadTask();
  },[]);

  const onSubmit=handleSubmit((data)=>{
    const dataValid={
      ...data,
      date:data.date ? dayjs.utc(data.date).format():dayjs.utc().format(),
    }
    //if(data.date) dataValid.date=dayjs.utc(data.date).format();
    
    if(params.id){
      updateTask(params.id,dataValid);
    }else{
      createTask(dataValid);
    }
    navigate('/tasks');

  });
  return(
    <div className="bg-black/60 w-full p-10 rounded-lg h-full p-10">
        <form onSubmit={onSubmit}>
          <label htmlFor="title" class='text-white'>Título</label>
            <input
                type="text"
                placeholder="Title"
                {...register("title")}
                
                className="bg-black/40 w-full text-white px-4 py-2 rounded-md my-2"
                autoFocus
            />
            <label htmlFor="description" class='text-white'>Descripcion</label>

            <textarea rows="3" placeholder="Description" {...register("description")}
            className=" bg-black/40 w-full  text-white px-4 py-2 rounded-md my-2">
            </textarea>
            <label htmlFor="date" class='text-white'>Date</label>
              <input type="date" {...register('date')}  
              className=" bg-black/40 w-full  text-white px-4 py-2 rounded-md my-2"/>




            <button className="w-1/2 pr-5 bg-indigo-500 px-2 py-2 rounded-md text-white">
                Save
            </button>
        </form>
    </div>
  );
};
export default TaskFormPage