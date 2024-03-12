import {
  HttpClient,
  HttpMethod,
  HttpRequest,
} from "integration/infra/http/http-client";

import { AuthenticationProvider } from "../../../../domains/softtek/authentication/providers/authentication.provider";

export class AuthenticationHttpService implements AuthenticationProvider {
  constructor(private _httpClient: HttpClient) {}

  private readonly msAuth = "/api/user.json";

  getAuthentication(): Promise<any> {
    const request: HttpRequest<Record<string, unknown>> = {
      url: `${this.msAuth}`,
      method: HttpMethod.GET,
      body: {},
    };
    return this._httpClient.request(request) as any;
  }
}
