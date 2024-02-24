import GitHubClient from "./client/client";
import { Credentials } from "./https/credentials";
import { Auth } from "./auth/auth";

const credentials = new Credentials(Auth.ANONYMOUS);
const client = new GitHubClient();

(async () => {
    try {
      const putResponse = await client.get("/users/Bamboooz");
      console.log(putResponse.data);
    } catch (error) {
      console.error(error);
    }
  })();

export { Credentials, Auth };
export default GitHubClient;
