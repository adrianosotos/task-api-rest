export const logInRequestBody = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      example: 'example@example.com'
    },
    password: {
      type: 'string',
      example: 'w6Rf#KtP9xjE$Q2zL8N5U7mY4vF1G0aS',
    }
  }
}

const logInResponse = {
  status: {
    type: 'string',
    example: 'sucess'
  },
  accessToken: {
    type: 'string',
    example: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTIwMTQ4ZjBjZWM2MDQ1ZTRkNzYyN2UiLCJpYXQiOjE2OTY2MjQ1NTAsImV4cCI6MTY5NjYyNTQ1MH0.SaCWkK6OW51-M6pqeb5E_HyZVbvTdnPalYMCx9OnO_4QLvcGvsgcwVgel-oFFXr390yR14NvJ0TKLD0QdN7gCfR_WJOwayNM3M-0QHA36_zr6idTJPd8dzWCrNVP_EtYX5Fol2DmaD-1Al6QkRl646NE-eoMj2nN7A3sPn02ClnQmzydzRKG4qjPxHGw68Y1Nj4priiFcFNSiVTOuoApNg5Mpn8-wVsZ-Tr_UXPjT4Y2xspvpZcEpqHDQeir4UI9kfrBlJfdO6AW4X1lZSlNeicIFAji7u5jLYhpPTRLbuEKhC4FPdsv7iMK2HwuooG3MwCOB_qZyZ2endZuSoucmyN5XDe8mTQLoLbG0UP1QlxevdxMNlBBuc2Xwy1gz6DPlNTW2qQHC5m6wwzLDd9NvzbQ7mRxP5PdC7HbqnW-lU3ENdLMkKxJIgpymbD9KyAYBBj7RiHsUnibIT4XROnYFZJyCZo8sLQrjCtQtEpRIjrwqY-8s7UR8z5Y6Gx7niA6rlryaGWWNnQGqKHaNeMM8bNGxOgysrgUkpSS9S7HajAA2P05Ohc72upmifU-JLdSgaI-TFkTVW9p4JVF79hW5nrXXFKWPjRqa3DC3Thc3jdIeoJzvC4NFnOJDUnOH-6B0MXps7WicvyI3UOoogXkdL66Ce1_8sREuC_g6bxemCo"
  }
}

const loginAuth = {
  tags: ['Auth'],
  description: 'Logs in user',
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/logInRequestBody',
        },
      },
    },
    required: true
  },
  responses: {
    '200': {
      description: 'Users logged in successfully',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: logInResponse,
          },
        },
      },
    },
    '401': {
      description: 'Invalid email or password',
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
                example: 'Invalid email or password'
              }
            }
          }
        }
      }
    }
  }
}

export const logInPaths = {
  '/api/auth/login': {
    post: loginAuth
  }
}