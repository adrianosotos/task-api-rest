import taskModel, { Task } from "../models/task.model";

export const createTask = async (input: Partial<Task>) => {
  const task = await taskModel.create(input);
  return task.toJSON();
}

export const editTask = async (taskId: string, input: Partial<Task>) => {
  const task = await taskModel.findOne({ _id: taskId, userId: input.userId });

  if (!task) {
    return null;
  }

  const updatedTask = await taskModel.findByIdAndUpdate(
    taskId,
    { $set: input },
    { new: true }
  );

  return updatedTask ? updatedTask.toJSON() : null;
};

export const deleteTask = async (taskId: string, userId: string) => {
  const task = await taskModel.findOne({ _id: taskId, userId });

  if (!task) {
    return null;
  }

  const deletedTask = await taskModel.findByIdAndDelete(taskId);
  return deletedTask ? deletedTask.toJSON() : null;
};

export const listTasks = async (userId: string) => {
  const tasks = await taskModel.find({ userId });
  return tasks.map((task) => task.toJSON());
};

export const completeTask = async (taskId: string, userId: string) => {
  const task = await taskModel.findOne({ _id: taskId, userId });

  if (!task) {
    return null;
  }

  const updatedTask = await taskModel.findByIdAndUpdate(
    taskId,
    { completed: true },
    { new: true }
  );

  return updatedTask ? updatedTask.toJSON() : null;
};
