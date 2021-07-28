import { Injectable } from '@angular/core';
import axios, { AxiosInstance, AxiosResponse, Method } from 'axios';
import { AppConfigService } from './app-config.service';

export interface Params {
  [key: string]: any;
}
export interface GetOptions {
  path: string;
  params?: Params;
}

export interface PostOptions {
  path: string;
  params: Params;
}

@Injectable({
  providedIn: 'root',
})
export class AxiosClientService {
  private axiosClient: AxiosInstance;
  private baseUrl: string;

  constructor(private appConfig: AppConfigService) {
    this.axiosClient = axios.create({
      withCredentials: true,
    });
    this.baseUrl = this.appConfig.config.baseUrl;

    // Add a request interceptor
    this.axiosClient.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    this.axiosClient.interceptors.response.use(
      (response) => {
        this._handleResponse(response);
        return response;
      },
      (error) => {
        this._handleError(error.response);
        return Promise.reject(error);
      }
    );
  }

  protected async axiosCall<T>(
    method: Method,
    options: GetOptions | PostOptions
  ): Promise<T> {
    try {
      const axiosResponse = await this.axiosClient.request<T>({
        method: method,
        url: `${this.baseUrl}${options.path}`,
        data: options.params,
      });
      return axiosResponse.data;
    } catch (error) {
      Promise.reject(error);
      return error;
    }
  }

  public async get<T>(options: GetOptions): Promise<T> {
    return this.axiosCall('get', options);
  }
  public async post<T>(options: PostOptions): Promise<T> {
    return this.axiosCall('post', options);
  }
  public async put<T>(options: PostOptions): Promise<T> {
    return this.axiosCall('put', options);
  }
  public async delete<T>(options: GetOptions): Promise<T> {
    return this.axiosCall('delete', options);
  }

  private _handleResponse = (response: AxiosResponse) => {
    return response;
  };

  protected _handleError = (error: any) => {
    return Promise.reject(error);
  };
}
function withCredentials(withCredentials: any) {
  throw new Error('Function not implemented.');
}

