import { AxiosHttpClient } from "@integration/infra/http-client/axios-http-client";
import { HttpClient } from "@integration/infra/http-client"; //core/http/http-client

export const httpClient: HttpClient = new AxiosHttpClient(
  "https://rimac-front-end-challenge.netlify.app"
);
