# octokit.ts

Octokit.ts is a simple GitHub typescript client

## Usage

### Get information

```ts
// import here

const client = new GitHubClient();

(async () => {
    try {
        const putResponse = await client.get("/users/Bamboooz");
        console.log(putResponse.data);
    } catch (error) {
        console.error(error);
    }
})();
```

### Use authentication

```ts
// import here

const credentials = new Credentials(Auth.BEARER, token="token_here");
const client = new GitHubClient(credentials);

(async () => {
    try {
        const putResponse = await client.get("/users/Bamboooz");
        console.log(putResponse.data);
    } catch (error) {
        console.error(error);
    }
})();
```
