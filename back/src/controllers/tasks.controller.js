import Task from '../models/task.model.js';

export const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

export const getTaskById = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json(task);
};

export const createTask = async (req, res) => {
  const { title, description, date, difficulty } = req.body;



  const newTask = new Task({
    title,
    description,
    date,
    difficulty,
    user: req.user.id
  });
  const savedTask = await newTask.save()
  res.json(savedTask);
};

export const updateTaskById = async (req, res) => {
  const { id } = req.params;
  const { title, description, date, difficulty } = req.body;
  const task = await Task.findByIdAndUpdate(id, { title, description, date, difficulty }, { new: true });
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json(task);
};

export const deleteTaskById = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByIdAndDelete(id);
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json({ message: 'Task deleted successfully' });
};