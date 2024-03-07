/* eslint-disable prettier/prettier */

import { PlansModel } from "../models/plans-model";

export interface PlansRepository {
  getPlansInfo(): Promise<PlansModel>;
}
