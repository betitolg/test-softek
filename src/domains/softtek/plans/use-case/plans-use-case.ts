import { PlansMapping } from "../mappings/plans-mapping";
import { PlansModel } from "../models/plans-model";
import { PlansProvider } from "../providers/plans.provider";
import { PlansRepository } from "../repositories/plans.repository";
import CustomError from "../../../error/custom-error";
import { from, map, catchError, firstValueFrom } from "rxjs";

export class PlansCase implements PlansRepository {
  constructor(
    private _plansProvider: PlansProvider,
    private _plansMapping: PlansMapping // eslint-disable-next-line no-empty-function
  ) {}
  getPlansInfo(): Promise<PlansModel> {
    const source$ = from(this._plansProvider.getPlansInfo()).pipe(
      map(this._plansMapping.fromResponseToAuth),
      catchError(CustomError.getError)
    );
    return firstValueFrom(source$);
  }
}
