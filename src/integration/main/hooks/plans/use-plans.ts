import { PlansRepository } from "domains/softtek/plans/repositories/plans.repository";
import { useQuery } from "react-query";

export const usePlans = (repository: PlansRepository) => {
  const result = useQuery("plans", () => repository.getPlansInfo(), {
    refetchOnWindowFocus: false,
    enabled: false,
  });
  return result;
};
