import config from "config";
import { CookieOptions, NextFunction, Request, Response } from "express";
import { CreateTaskInput, EditTaskInput } from "../schemas/task.schema";
import { completeTask, createTask, deleteTask, editTask, listTasks } from "../services/task.service";

const accessTokenCookieOptions: CookieOptions = {
  expires: new Date(
    Date.now() + config.get<number>('accessTokenExpiresIn') * 60 * 1000
  ),
  maxAge: config.get<number>('accessTokenExpiresIn') * 60 * 1000,
  httpOnly: true,
  sameSite: 'lax',
  };
  
  if (process.env.NODE_ENV === 'production') {
    accessTokenCookieOptions.secure = true;
  }

if (process.env.NODE_ENV === 'production') {
  accessTokenCookieOptions.secure = true;
}

export const createTaskHandler = async (
  req: Request<{}, {}, CreateTaskInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const task = await createTask({
      title: req.body.title,
      description: req.body.description,
      dueDate: req.body.dueDate,
      tags: req.body.tags
    })

    res.status(201).json({
      status: 'success',
      data: {
        task
      }
    })
  } catch (error: any) {
    res.status(400).json({
      status: 'fail',
      message: 'Failed to create task'
    });
  }
};

export const editTaskHandler = async (
  req: Request<{ id: string }, {}, EditTaskInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const taskId = req.params.id;
    const updatedTask = await editTask(taskId, {
      title: req.body.title,
      description: req.body.description,
      dueDate: req.body.dueDate,
      tags: req.body.tags
    });

    if (updatedTask) {
      res.status(200).json({
        status: 'success',
        data: {
          task: updatedTask
        }
      });
    } else {
      res.status(404).json({
        status: 'fail',
        message: 'Task not found'
      });
    }
  } catch (error: any) {
    res.status(400).json({
      status: 'fail',
      message: 'Failed to update task'
    });
  }
};

export const deleteTaskHandler = async (
  req: Request<{ id: string }, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const taskId = req.params.id;
    const deletedTask = await deleteTask(taskId);

    if (deletedTask) {
      res.status(200).json({
        status: "success",
        message: "Task deleted successfully",
      });
    } else {
      res.status(404).json({
        status: "fail",
        message: "Task not found",
      });
    }
  } catch (error: any) {
    res.status(400).json({
      status: "fail",
      message: "Failed to delete task",
    });
  }
};

export const listTasksHandler = async (
  req: Request<{}, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const tasks = await listTasks();

    res.status(200).json({
      status: "success",
      data: {
        tasks,
      },
    });
  } catch (error: any) {
    res.status(400).json({
      status: "fail",
      message: "Failed to list tasks",
    });
  }
};

export const completeTaskHandler = async (
  req: Request<{ id: string }, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const taskId = req.params.id;
    const updatedTask = await completeTask(taskId);

    if (updatedTask) {
      res.status(200).json({
        status: "success",
        message: "Task completed successfully",
        data: {
          task: updatedTask,
        },
      });
    } else {
      res.status(404).json({
        status: "fail",
        message: "Task not found",
      });
    }
  } catch (error: any) {
    res.status(400).json({
      status: "fail",
      message: "Failed to complete task",
    });
  }
};