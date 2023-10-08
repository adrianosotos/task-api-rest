import { TypeOf, array, object, string } from "zod";

export const createTaskSchema = object({
  body: object({
    title: string({ required_error: 'Title is required'}),
    description: string(),
    dueDate: string(),
    tags: array(string())
  })
})

export const editTaskSchema = object({
  body: object({
    title: string().optional(),
    description: string().optional(),
    dueDate: string().optional(),
    tags: array(string()).optional()
  })
});

export const deleteTaskSchema = object({
  body: object({
    id: string(),
  }),
});

export const listTasksSchema = object({});

export const completeTaskSchema = object({
  body: object({
    id: string()
  }),
});

export type CreateTaskInput = TypeOf<typeof createTaskSchema>['body'];
export type EditTaskInput = TypeOf<typeof editTaskSchema>['body'];
export type DeleteTaskInput = TypeOf<typeof deleteTaskSchema>['body'];
export type CompleteTaskInput = TypeOf<typeof completeTaskSchema>['body'];
