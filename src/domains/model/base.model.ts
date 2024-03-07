import { classToPlain, plainToClass } from "class-transformer";

export class BaseModel {
  static fromJson<T extends BaseModel>(json: Record<string, unknown>): T {
    return plainToClass(this, json) as T;
  }

  toJson(): Record<string, unknown> {
    return classToPlain(this);
  }
}
