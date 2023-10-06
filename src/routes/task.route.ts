import express from 'express';
import { validate } from '../middleware/validate';
import { completeTaskSchema, createTaskSchema, deleteTaskSchema, editTaskSchema, listTasksSchema } from '../schemas/task.schema';
import { completeTaskHandler, createTaskHandler, deleteTaskHandler, editTaskHandler, listTasksHandler } from '../controllers/task.controller';
import { deserializeUser } from '../middleware/deserializeUser';
import { requireUser } from '../middleware/requireUser';

const router = express.Router();

router.use(deserializeUser, requireUser);

router.post('/create', validate(createTaskSchema), createTaskHandler);

router.put('/:id', validate(editTaskSchema), editTaskHandler);

router.delete("/:id", validate(deleteTaskSchema), deleteTaskHandler);

router.get("/list", validate(listTasksSchema), listTasksHandler);

router.put("/:id/complete", validate(completeTaskSchema), completeTaskHandler);

export default router;
