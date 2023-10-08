import config from "config";
import authDocs from './auth'
import usersDocs from './users'
import tasksDocs from './tasks'

const swaggerSpec = {
  openapi: '3.0.0',
  info: {
    title: 'Task API REST',
    version: '1.0.0',
    description: 'This is a task manager API Rest with auth.',
  },
  servers: [
    {
      url: `http://localhost:${config.get<number>('port')}`
    }
  ],
  tags: [
    authDocs.tag,
    usersDocs.tag,
    {
      name: 'Tasks',
    },
  ],
  paths: {
    ...authDocs.paths,
    ...usersDocs.paths,
    ...tasksDocs.paths
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
      ...authDocs.schemas,
      ...tasksDocs.schemas
    }
  }
}

export default swaggerSpec;