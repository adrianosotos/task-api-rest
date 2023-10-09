import config from "config";
import { CookieOptions, NextFunction, Request, Response } from "express";
import { CreateTaskInput, EditTaskInput } from "../schemas/task.schema";
import { completeTask, createTask, deleteTask, editTask, listTasks } from "../services/task.service";
import AppError from "../utils/appError";

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
      tags: req.body.tags,
      userId: res.locals.user._id
    })

    res.status(201).json({
      status: 'success',
      data: {
        task
      }
    })
  } catch (error: any) {
    next(new AppError('Failed to create task', 400));
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
      tags: req.body.tags,
      userId: res.locals.user._id
    });

    if (updatedTask) {
      res.status(200).json({
        status: 'success',
        data: {
          task: updatedTask
        }
      });
    } else {
      next(new AppError('Task not found', 404));
    }
  } catch (error: any) {
    next(new AppError('Failed to update task', 400));
  }
};

export const deleteTaskHandler = async (
  req: Request<{ id: string }, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const taskId = req.params.id;
    const deletedTask = await deleteTask(taskId, res.locals.user._id);

    if (deletedTask) {
      res.status(200).json({
        status: "success",
        message: "Task deleted successfully",
      });
    } else {
      next(new AppError('Task not found', 404));
    }
  } catch (error: any) {
    next(new AppError('Failed to delete task', 400));
  }
};

export const listTasksHandler = async (
  _req: Request<{}, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const tasks = await listTasks(res.locals.user._id);

    res.status(200).json({
      status: "success",
      data: {
        tasks
      },
    });
  } catch (error: any) {
    next(new AppError('Failed to list tasks', 400));
  }
};

export const completeTaskHandler = async (
  req: Request<{ id: string }, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const taskId = req.params.id;
    const updatedTask = await completeTask(taskId, res.locals.user._id);

    if (updatedTask) {
      res.status(200).json({
        status: "success",
        message: "Task completed successfully",
        data: {
          task: updatedTask,
        },
      });
    } else {
      next(new AppError('Task not found', 404));
    }
  } catch (error: any) {
    next(new AppError('Failed to complete task', 400));
  }
};