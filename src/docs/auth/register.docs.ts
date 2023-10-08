export const registerAuthRequestBody = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      example: 'Adriano Sotos'
    },
    email: {
      type: 'string',
      example: 'example@example.com'
    },
    password: {
      type: 'string',
      example: 'w6Rf#KtP9xjE$Q2zL8N5U7mY4vF1G0aS',
    },
    passwordConfirm: {
      type: 'string',
      example: 'w6Rf#KtP9xjE$Q2zL8N5U7mY4vF1G0aS',
    }
  }
}

const registerResponse = {
  status: {
    type: 'string',
    example: 'success'
  },
  data: {
    type: 'object',
    properties: {
      _id: {
        type: 'string',
        example: '6520148f0cec6045e4d7627e',
      },
      email: {
        type: 'string',
        example: 'example@example.com'
      },
      role: {
        type: 'string',
        example: 'user',
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
};

const registerAuth = {
  tags: ['Auth'],
  description: 'Registers a new login authentication',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/registerAuthRequestBody',
        },
      },
    },
    required: true,
  },
  responses: {
    '200': {
      description: 'Users registered successfully',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: registerResponse,
          },
        },
      },
    },
    '409': {
      description: 'Email already exists',
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
                example: 'Email already exists'
              }
            }
          }
        }
      }
    }
  }
}

export const registerPaths = {
  '/api/auth/register': {
    post: registerAuth
  }
}