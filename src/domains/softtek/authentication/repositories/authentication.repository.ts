/* eslint-disable prettier/prettier */

import { Authentication } from "../models/authentication.model";

export interface AuthenticationRepository {
  getAuthentication(): Promise<Authentication>;
}
