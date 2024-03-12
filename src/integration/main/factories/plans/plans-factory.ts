import { PlansCase } from "domains/softtek/plans/use-case/plans-use-case";
import { PlansMapping } from "domains/softtek/plans/mappings/plans-mapping";
import { PlansHttpService } from "../../../infra/http-services/plans/plans-http-services";
import { httpClient } from "../http/http-factory";

export const PlansFactory: PlansCase = new PlansCase(
  new PlansHttpService(httpClient),
  new PlansMapping()
);
