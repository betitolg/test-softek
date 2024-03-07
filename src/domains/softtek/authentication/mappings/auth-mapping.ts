import { Authentication } from "../models/authentication.model";

export class AuthMapping {
  fromResponseToAuth = (json: Record<string, unknown>): Authentication => {
    const { body } = json as any;
    return Authentication.fromJson(body);
  };
}
