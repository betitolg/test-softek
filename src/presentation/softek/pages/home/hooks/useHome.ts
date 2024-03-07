import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PlanesContext } from "@presentation/context/planes/planes.context";
import { useAuth } from "@integration/main/hooks/authentication/use-auth";
import { usePlans } from "@integration/main/hooks/plans/use-plans";
import { authFactory } from "@integration/main/factories/authentication/auth-factory";
import { plansFactory } from "@integration/main/factories/plans/plans-factory";

function useHome(repository: authFactory, plansRepository: plansFactory) {
  const navigate = useNavigate();
  const { setPage } = useContext(PlanesContext);

  const { refetch: callUserInfo } = useAuth(repository);
  const { refetch: callPlansInfo } = usePlans(plansRepository);
  const goToPlanes = () => {
    callUserInfo();
    callPlansInfo();
    setPage(1);
    navigate("/planes");
  };

  return {
    goToPlanes,
  };
}
export default useHome;
