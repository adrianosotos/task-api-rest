import { logInPaths, logInRequestBody } from "./logIn.docs";
import { registerAuthRequestBody, registerPaths } from "./register.docs";

export default {
  tag: {
    name: 'Auth'
  },
  paths: {
    ...registerPaths,
    ...logInPaths
  },
  schemas: {
    registerAuthRequestBody,
    logInRequestBody
  }
}