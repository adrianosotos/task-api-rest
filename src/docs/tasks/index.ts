import { completeTaskRequestBody, completeTaskRoutes } from "./completeTask.docs";
import { createTaskRequestBody, createTaskRoutes } from "./createTask.docs";
import { listTasksRoutes } from "./listTasks.docs";
import { deleteTaskRequestBody, editTaskRequestBody, editTaskRoutes } from "./tasks.docs";

export default {
  tag: {
    name: 'Tasks'
  },
  paths: {
    ...createTaskRoutes,
    ...editTaskRoutes,
    ...listTasksRoutes,
    ...completeTaskRoutes
  },
  schemas: {
    createTaskRequestBody,
    editTaskRequestBody,
    completeTaskRequestBody,
    deleteTaskRequestBody
  }
}
