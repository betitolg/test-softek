import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PlanesContext } from "@presentation/context/planes/planes.context";
import { useAuth } from "@integration/main/hooks/authentication/use-auth";
import { usePlans } from "@integration/main/hooks/plans/use-plans";
import { AuthenticationRepository } from "@domains/softtek/authentication/repositories/authentication.repository";
import { PlansRepository } from "@domains/softtek/plans/repositories/plans.repository";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import { useForm } from "react-hook-form";

const fields = ["documentTypeNumber"]

interface FormUser {
  documentTypeNumber: string
  documentNumber: string
  phone: string
}

const validationsForm = yup
.object<FormUser>()
.shape({
  documentTypeNumber:yup.string().required(),
  documentNumber: yup.string().required().when("documentTypeNumber", (document) => {
    if(document[0] === 'dni'){
      return yup.number()
    }
    return yup.string()
  }),
  phone: yup.string().required(),
  politicaPrivacidad: yup.bool().required(),
  politicaComunicaciones: yup.bool()
})

function useHome(repository: AuthenticationRepository, plansRepository: PlansRepository) {
  const { handleSubmit, formState:{ errors }, control, watch } = useForm({
    resolver: yupResolver(validationsForm)
  });
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
