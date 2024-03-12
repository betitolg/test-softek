import { AxiosHttpClient } from "../../../infra/http-client/axios-http-client";
import { HttpClient } from "../../../infra/http/http-client"; //core/http/http-client

export const httpClient: HttpClient = new AxiosHttpClient(
  "https://rimac-front-end-challenge.netlify.app"
);
