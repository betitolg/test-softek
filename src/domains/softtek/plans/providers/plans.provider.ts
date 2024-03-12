import { HttpResponse } from "integration/infra/http/http-client";

export interface PlansProvider {
  getPlansInfo(): Promise<HttpResponse<Record<string, unknown>>>;
}
