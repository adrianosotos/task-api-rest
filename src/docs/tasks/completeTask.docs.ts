
const completedTaskResponseSchema = {
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
            example: true
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


const completeTaskHandler = {
  tags: ['Tasks'],
  description: 'Completes a task by changing its status to completed',
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: 'id',
      in: 'path',
      required: true,
      description: 'ID of the task to complete',
      schema: {
        type: 'string'
      }
    }
  ],
  responses: {
    '200': {
      description: 'Task completed successfully',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: completedTaskResponseSchema
          }
        }
      }
    },
    '404': {
      description: 'Task not found',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              status: {
                type: 'string',
                example: 'fail'
              },
              message: {
                type: 'string',
                example: 'Task not found'
              }
            }
          }
        }
      }
    },
    '400': {
      description: 'Failed to complete task'
    }
  }
};

export const completeTaskRoutes = {
  '/api/tasks/{id}/complete': {
    patch: completeTaskHandler
  }
};
