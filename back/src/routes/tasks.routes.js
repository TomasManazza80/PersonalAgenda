import { Router } from "express";
import {authRequired} from "../Middlewares/validateToken.js";
import { getTaskById,getTasks,createTask,updateTaskById,deleteTaskById } from "../controllers/tasks.controller.js";
import { validateSchema } from "../Middlewares/validator.middleware.js";
import { createTaskSchema } from "../Schemas/task.schema.js";

const router=Router();

router.get('/tasks',authRequired,getTasks);
router.get('/tasks/:id',authRequired,getTaskById);
router.post(
    '/tasks',
    authRequired,
    validateSchema(createTaskSchema),
    createTask
);
router.delete('/tasks/:id',authRequired,deleteTaskById);
router.put('/tasks/:id',authRequired,updateTaskById);




export default router