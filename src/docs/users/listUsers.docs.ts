const userResponse = {
  _id: {
    type: 'string',
    example: '60564fcb544047cdc3844818',
  },
  email: {
    type: 'string',
    example: 'example@example.com'
  },
  password: {
    type: 'string',
    example: 'w6Rf#KtP9xjE$Q2zL8N5U7mY4vF1G0aS',
  },
  role: {
    type: 'string',
    example: 'user',
  }
}

export const getUsers = {
  tags: ['Users'],
  description: 'Return all subscribed users',
  security: [
    {
      bearerAuth: [],
    },
  ],
  responses: {
    '200': {
      description: 'Users retrieved successfully',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              type: 'object',
              properties: userResponse,
            },
          },
        },
      },
    },
  }
}

export const listUsersPaths = {
  '/api/users': {
    get: getUsers
  },
}