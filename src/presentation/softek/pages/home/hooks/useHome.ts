import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { PlanesContext } from "presentation/context/planes/planes.context";
import { useAuth } from "integration/main/hooks/authentication/use-auth";
import { usePlans } from "integration/main/hooks/plans/use-plans";
import { AuthenticationRepository } from "domains/softtek/authentication/repositories/authentication.repository";
import { PlansRepository } from "domains/softtek/plans/repositories/plans.repository";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import { useForm } from "react-hook-form";

const fields = ["documentTypeNumber"]

interface FormUser {
  documentTypeNumber: string;
  documentNumber: string;
  phone: string;
  politicaPrivacidad: boolean;
  politicaComunicaciones: boolean;
}

const validationsForm = yup.object<FormUser>().shape({
  documentTypeNumber: yup.string().required(),
  documentNumber: yup
    .string()
    .required()
    .when("documentTypeNumber", (document) => {
      if (document[0] === "dni") {
        return yup.string().matches(/^[0-9]*$/);
      }
      return yup.string().matches(/^[a-zA-Z0-9_]*$/);
    }),
  phone: yup
    .string()
    .required()
    .matches(/^[0-9]*$/),
  politicaPrivacidad: yup.bool().required(),
  politicaComunicaciones: yup.bool(),
});

function useHome(repository: AuthenticationRepository, plansRepository: PlansRepository) {
  const {
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setValue,
  } = useForm({
    resolver: yupResolver(validationsForm),
  });
  const navigate = useNavigate();
  const { setPage } = useContext(PlanesContext);

  const { refetch: callUserInfo } = useAuth(repository);
  const { refetch: callPlansInfo } = usePlans(plansRepository);

  useEffect(() => {
    setValue("documentTypeNumber", "dni");
  }, []);

  const goToPlanes = () => {
    callUserInfo();
    callPlansInfo();
    setPage(1);
    navigate("/planes");
  };
  const onSubmit = (data: any) => {
    console.log(data);
    goToPlanes()
  };
  return {
    goToPlanes,
    handleSubmit,
    errors,
    control,
    watch,
    onSubmit
  };
}
export default useHome;
