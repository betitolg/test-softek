import {
  HttpClient,
  HttpMethod,
  HttpRequest,
  HttpResponse,
} from "integration/infra/http/http-client";

import { PlansProvider } from "domains/softtek/plans/providers/plans.provider";

export class PlansHttpService implements PlansProvider {
  constructor(private _httpClient: HttpClient) {}

  private readonly msAuth = "/api/plans.json";

  getPlansInfo(): Promise<any> {
    const request: HttpRequest<Record<string, unknown>> = {
      url: `${this.msAuth}`,
      method: HttpMethod.GET,
      body: {},
    };
    return this._httpClient.request(request) as any;
  }
}
