import { AjaxError } from "rxjs/ajax";
import { HttpError } from "integration/infra/http/errors/http-error";
import { HttpStatusCode } from "integration/infra/http/http-client";

class CustomError {
  static getError = (error: AjaxError) => {
    if (error instanceof HttpError) {
      switch (error.status) {
        case HttpStatusCode.badRequest:
        case HttpStatusCode.unauthorized:
        case HttpStatusCode.forbidden:
        case HttpStatusCode.serverError:
          throw new HttpError(error.status, error.message, error.message);
        default:
          throw new HttpError(error.status, error.message, error.message);
      }
    } else {
      throw new HttpError(500, error.message, "Ocurrio un error desconocido");
    }
  };
}
export default CustomError;
