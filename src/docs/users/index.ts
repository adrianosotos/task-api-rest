import { listUsersPaths } from "./listUsers.docs";
import { myProfilePaths } from "./myProfile.docs";

export default {
  tag: {
    name: 'Users'
  },
  paths: {
    ...listUsersPaths,
    ...myProfilePaths
  }
}