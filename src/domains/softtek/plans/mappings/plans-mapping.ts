import { PlansModel } from "../models/plans-model";

export class PlansMapping {
  fromResponseToAuth = (json: Record<string, unknown>): PlansModel => {
    const { body } = json as any;
    return PlansModel.fromJson(body);
  };
}
