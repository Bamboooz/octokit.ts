import { AxiosResponse, AxiosRequestConfig } from "axios";
import { Credentials } from "../https/credentials";
import { Auth, Authenticator } from "../auth/auth";
import { Session } from "../https/session";

class GitHubClient {
    private session: Session;
    private authenticator: Authenticator;

    constructor(credentials: Credentials = new Credentials(Auth.ANONYMOUS)) {
        const sessionConfig: AxiosRequestConfig = {
            baseURL: "https://api.github.com",
            headers: {
                "Accept": "application/vnd.github.v3+json",
            },
        };

        this.session = new Session(sessionConfig);
        this.authenticator = new Authenticator(credentials);
        this.authenticator.apply(this.session);
    }

    async get<T = any>(endpoint: string, headers: Record<string, string> = {}, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.session.get(endpoint, headers, config);
    }

    async post<T = any>(endpoint: string, data?: any, headers: Record<string, string> = {}, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.session.post(endpoint, data, headers, config);
    }

    async put<T = any>(endpoint: string, data?: any, headers: Record<string, string> = {}, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.session.put(endpoint, data, headers, config);
    }
    
    async delete<T = any>(endpoint: string, headers: Record<string, string> = {}, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.session.delete(endpoint, headers, config);
    }
}

export default GitHubClient;
