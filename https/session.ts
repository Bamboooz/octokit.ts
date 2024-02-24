import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";

class Session {
    public axiosInstance: AxiosInstance;

    constructor(config: AxiosRequestConfig) {
        this.axiosInstance = axios.create(config);
    }

    async get<T = any>(endpoint: string, headers: Record<string, string> = {}, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        const requestHeaders = { ...this.axiosInstance.defaults.headers.common, ...headers };
        const requestConfig: AxiosRequestConfig = { ...config, headers: requestHeaders };

        return this.axiosInstance.get(endpoint, requestConfig);
    }

    async post<T = any>(endpoint: string, data?: any, headers: Record<string, string> = {}, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        const requestHeaders = { ...this.axiosInstance.defaults.headers.common, ...headers };
        const requestConfig: AxiosRequestConfig = { ...config, headers: requestHeaders };

        return this.axiosInstance.post(endpoint, data, requestConfig);
    }

    async put<T = any>(endpoint: string, data?: any, headers: Record<string, string> = {}, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        const requestHeaders = { ...this.axiosInstance.defaults.headers.common, ...headers };
        const requestConfig: AxiosRequestConfig = { ...config, headers: requestHeaders };
    
        return this.axiosInstance.put(endpoint, data, requestConfig);
    }
    
    async delete<T = any>(endpoint: string, headers: Record<string, string> = {}, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        const requestHeaders = { ...this.axiosInstance.defaults.headers.common, ...headers };
        const requestConfig: AxiosRequestConfig = { ...config, headers: requestHeaders };
    
        return this.axiosInstance.delete(endpoint, requestConfig);
    }
}

export { Session };
