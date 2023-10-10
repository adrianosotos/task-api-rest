export const editTaskRequestBody = {
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
        example: '#updatedtag'
      }
    }
  }
};

const editTaskResponse = {
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

const editTask = {
  tags: ['Tasks'],
  description: 'Updates a task',
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
      schema: {
        type: 'string',
        example: '6520148f0cec6045e4d7627e'
      },
      description: 'Task ID'
    }
  ],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/editTaskRequestBody'
        }
      }
    },
    required: true
  },
  responses: {
    '200': {
      description: 'Task updated successfully',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: editTaskResponse
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
      description: 'Failed to update task',
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
                example: 'Failed to update task'
              }
            }
          }
        }
      }
    }
  }
};

export const deleteTaskRequestBody = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      example: '65231badb271b0c2ecc258a6'
    }
  }
};

const deleteTask = {
  tags: ['Tasks'],
  description: 'Deletes a task',
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
      schema: {
        type: 'string',
        example: '6520148f0cec6045e4d7627e'
      },
      description: 'Task ID'
    }
  ],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/deleteTaskRequestBody'
        }
      }
    },
    required: true
  },
  responses: {
    '200': {
      description: 'Task deleted successfully',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              status: {
                type: 'string',
                example: 'success'
              },
              message: {
                type: 'string',
                example: 'Task deleted successfully'
              }
            }
          }
        }
      }
    },
    '404': {
      description: 'Task not found'
    },
    '400': {
      description: 'Failed to delete task'
    }
  }
};

export const editTaskRoutes = {
  '/api/tasks/{id}': {
    put: editTask,
    delete: deleteTask
  }
};
