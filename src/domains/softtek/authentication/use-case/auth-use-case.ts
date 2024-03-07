import { AuthMapping } from "../mappings/auth-mapping";
import { Authentication } from "../models/authentication.model";
import { AuthenticationProvider } from "../providers/authentication.provider";
import { AuthenticationRepository } from "../repositories/authentication.repository";
import CustomError from "../../../error/custom-error";
import { from, map, catchError, firstValueFrom } from "rxjs";

export class AuthCase implements AuthenticationRepository {
  constructor(
    private _authProvider: AuthenticationProvider,
    private _authMapping: AuthMapping // eslint-disable-next-line no-empty-function
  ) {}

  getAuthentication(): Promise<Authentication> {
    const source$ = from(this._authProvider.getAuthentication()).pipe(
      map(this._authMapping.fromResponseToAuth),
      catchError(CustomError.getError)
    );
    return firstValueFrom(source$);
  }
}
