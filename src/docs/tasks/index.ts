import { completeTaskRoutes } from "./completeTask.docs";
import { createTaskRequestBody, createTaskRoutes } from "./createTask.docs";
import { listTasksRoutes } from "./listTasks.docs";
import { editTaskRequestBody, editTaskRoutes } from "./tasks.docs";

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
    editTaskRequestBody
  }
}
