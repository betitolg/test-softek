import { AuthCase } from "domains/softtek/authentication/use-case/auth-use-case";
import { AuthMapping } from "domains/softtek/authentication/mappings/auth-mapping";
import { AuthenticationHttpService } from "../../../infra/http-services/authentication/authentication-http-services";
import { httpClient } from "../http/http-factory";

export const AuthFactory: AuthCase = new AuthCase(
  new AuthenticationHttpService(httpClient),
  new AuthMapping()
);
