import { AuthenticationRepository } from "domains/softtek/authentication/repositories/authentication.repository";
import { useQuery } from "react-query";

export const useAuth = (repository: AuthenticationRepository) => {
  const result = useQuery("auth", () => repository.getAuthentication(), {
    refetchOnWindowFocus: false,
    enabled: false,
  });
  return result;
};
