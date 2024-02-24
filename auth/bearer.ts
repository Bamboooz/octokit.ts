import { Credentials } from "../https/credentials";
import { Session } from "../https/session";

class BearerAuthentication {
    constructor (private session: Session) {}

    public authenticate(credentials: Credentials) {
        const authHeaderValue = `Bearer ${credentials.token}`;

        this.session.axiosInstance.defaults.headers["Authorization"] = authHeaderValue;
    }
}

export { BearerAuthentication };
