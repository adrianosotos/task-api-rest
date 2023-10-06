import taskModel, { Task } from "../models/task.model";

export const createTask = async (input: Partial<Task>) => {
  const task = await taskModel.create(input);
  return task.toJSON();
}

export const editTask = async (taskId: string, input: Partial<Task>) => {
  const updatedTask = await taskModel.findByIdAndUpdate(
    taskId,
    { $set: input },
    { new: true }
  );

  return updatedTask ? updatedTask.toJSON() : null;
};

export const deleteTask = async (taskId: string) => {
  const deletedTask = await taskModel.findByIdAndDelete(taskId);
  return deletedTask ? deletedTask.toJSON() : null;
};

export const listTasks = async () => {
  const tasks = await taskModel.find();
  return tasks.map((task) => task.toJSON());
};

export const completeTask = async (taskId: string) => {
  const updatedTask = await taskModel.findByIdAndUpdate(
    taskId,
    { completed: true },
    { new: true }
  );

  return updatedTask ? updatedTask.toJSON() : null;
};
