import { Credentials } from "../https/credentials";
import { Session } from "../https/session";
import { AnonymousAuthentication } from "./anon";
import { BasicAuthentication } from "./basic";
import { BearerAuthentication } from "./bearer";

enum Auth {
    ANONYMOUS = 0,
    BASIC = 1,
    BEARER = 2,
}

class Authenticator {
    constructor ( private credentials: Credentials ) {}

    public apply(session: Session) {
        const AuthenticatorClass = this.credentials.authType === Auth.ANONYMOUS ? AnonymousAuthentication
            : this.credentials.authType === Auth.BASIC ? BasicAuthentication
            : BearerAuthentication;

        const authenticator = new AuthenticatorClass(session);

        authenticator.authenticate(this.credentials);
    }
}

export { Auth, Authenticator};
