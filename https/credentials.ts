import { Auth } from "../auth/auth";

class Credentials {
    authType: Auth;
    user?: string;
    pass?: string;
    token?: string;

    constructor(authType: Auth.ANONYMOUS);
    constructor(authType: Auth.BASIC, user: string, pass: string);
    constructor(authType: Auth.BEARER, token: string);
    constructor(authType: Auth, user?: string, pass?: string, token?: string) {
        this.authType = authType;
        this.user = user;
        this.pass = pass;
        this.token = token;
    }
}

export { Credentials };
