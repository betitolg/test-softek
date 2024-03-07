import { HttpClient, HttpRequest, HttpResponse } from "../http/http-client";
import axios, { AxiosError, AxiosResponse } from "axios";

import { HttpError } from "../http/errors/http-error";

export class AxiosHttpClient implements HttpClient {
  constructor(private baseUrl = "") {}

  private isAbsoluteUrl = (url: string): boolean => {
    const path = /^https?:\/\//i;
    return path.test(url);
  };

  private getUrl = (url: string) => {
    if (this.isAbsoluteUrl(url)) return url;
    return `${this.baseUrl}/${url}`;
  };

  getPrivateHeader() {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
  }

  async request<T = unknown, R = unknown>(
    data: HttpRequest<T>
  ): Promise<HttpResponse<R>> {
    let axiosResponse: AxiosResponse<R, Error>;
    try {
      axiosResponse = await axios.request<T, AxiosResponse<R, Error>>({
        url: this.getUrl(data.url),
        method: data.method,
        data: data.body,
        headers: data.headers as Partial<any>,
      });
    } catch (error) {
      const errorResponse = error as AxiosError;
      throw new HttpError(
        errorResponse?.status ?? -1,
        errorResponse.code,
        errorResponse.message
      );
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }
}
