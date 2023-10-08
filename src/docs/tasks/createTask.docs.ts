export const createTaskRequestBody = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      example: 'Task Example'
    },
    description: {
      type: 'string',
      example: 'This is a task example description'
    },
    dueDate: {
      type: 'string',
      example: new Date().toString(),
    },
    tags: {
      type: 'array',
      items: {
        type: 'string',
        example: '#tag1'
      },
    }
  }
}

const createTaskReponse = {
  status: {
    type: 'string',
    example: 'success'
  },
  data: {
    type: 'object',
    properties: {
      title: {
        type: 'string',
        example: 'Task Example',
      },
      description: {
        type: 'string',
        example: 'This is a task example description'
      },
      dueDate: {
        type: 'string',
        example: new Date().toString(),
      },
      tags: {
        type: 'array',
        items: {
          type: 'string',
          example: ['#tag1', '#tag2']
        },
      },
      completed: {
        type: 'boolean',
        example: false
      },
      _id: {
        type: 'string',
        example: '6520148f0cec6045e4d7627e',
      },
      userId: {
        type: 'string',
        example: '6520148f0cec6045e4d7627e',
      },
      createdAt: {
        type: 'string',
        example: "2023-10-06T14:07:11.215Z"
      },
      updatedAt: {
        type: 'string',
        example: "2023-10-06T14:07:11.215Z"
      },
      __v: {
        type: 'number',
        example: 0
      }
    }
  }
}

const createTask = {
  tags: ['Tasks'],
  description: 'Creates a new task',
  security: [
    {
      bearerAuth: [],
    },
  ],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/createTaskRequestBody',
        },
      },
    },
    required: true,
  },
  responses: {
    '200': {
      description: 'Task created successfully',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: createTaskReponse,
          },
        },
      },
    },
    '400': {
      description: 'Failed to create task',
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
                example: 'Failed to create task'
              }
            }
          }
        }
      }
    }
  }
}

export const createTaskRoutes = {
  '/api/tasks/create': {
    post: createTask
  }
}