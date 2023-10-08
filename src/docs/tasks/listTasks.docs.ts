const listTasksResponseSchema = {
  status: {
    type: 'string',
    example: 'success'
  },
  data: {
    type: 'object',
    properties: {
      task: {
        type: 'object',
        properties: {
          title: {
            type: 'string',
            example: 'Updated Task Title'
          },
          description: {
            type: 'string',
            example: 'Updated task description'
          },
          dueDate: {
            type: 'string',
            example: new Date().toString()
          },
          tags: {
            type: 'array',
            items: {
              type: 'string',
              example: ['#updatedtag']
            }
          },
          completed: {
            type: 'boolean',
            example: false
          },
          _id: {
            type: 'string',
            example: '6520148f0cec6045e4d7627e'
          },
          userId: {
            type: 'string',
            example: '6520148f0cec6045e4d7627e'
          },
          createdAt: {
            type: 'string',
            example: '2023-10-06T14:07:11.215Z'
          },
          updatedAt: {
            type: 'string',
            example: '2023-10-06T14:07:11.215Z'
          },
          __v: {
            type: 'number',
            example: 0
          }
        }
      }
    }
  }
};

const listTasksHandler = {
  tags: ['Tasks'],
  description: 'Lists all tasks for the authenticated user',
  security: [
    {
      bearerAuth: []
    }
  ],
  responses: {
    '200': {
      description: 'List of tasks',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: listTasksResponseSchema
          }
        }
      }
    },
    '400': {
      description: 'Failed to list tasks'
    }
  }
};

export const listTasksRoutes = {
  '/api/tasks/list': {
    get: listTasksHandler
  }
};
