import { BaseModel } from "../../../model/base.model";

export class PlansModel extends BaseModel {
  public name: string = "";
  public price: number = 0;
  public description: string[] = [];
  public age: number = 0;
}
