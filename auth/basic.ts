import { Credentials } from "../https/credentials";
import { Session } from "../https/session";

class BasicAuthentication {
    constructor (private session: Session) {}

    public authenticate(credentials: Credentials) {
        const combinedCredentials = `${credentials.user}:${credentials.pass}`;
        const encodedCredentials = Buffer.from(combinedCredentials).toString('base64');
        const authHeaderValue = `Basic ${encodedCredentials}`;

        this.session.axiosInstance.defaults.headers["Authorization"] = authHeaderValue;
    }
}

export { BasicAuthentication };
