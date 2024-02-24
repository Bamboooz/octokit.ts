import { Credentials } from "../https/credentials";
import { Session } from "../https/session";

class AnonymousAuthentication {
    constructor (private session: Session) {}

    public authenticate(credentials: Credentials) {
        // do nothing, retain anonymity
    }
}

export { AnonymousAuthentication };
