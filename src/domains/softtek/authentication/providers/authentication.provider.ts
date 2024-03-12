import { HttpResponse } from "integration/infra/http/http-client";

export interface AuthenticationProvider {
  getAuthentication(): Promise<HttpResponse<Record<string, unknown>>>;
}
