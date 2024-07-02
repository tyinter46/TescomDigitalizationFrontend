import * as Yup from "yup";
import { useFormik } from "formik";
import ConfirmAccountView from "./ConfirmAccountView";
import { useAppSelector, useAppDispatch } from "hooks";
import { resendConfirmAccountTokenSlice } from  "../../redux/slices/auth.slice";
import { toast } from "react-toastify";


export const ConfirmAccountContainer = () => {
    const dispatch = useAppDispatch()
   const {isLoading } = useAppSelector ((state)=> state.auth)
   const formik = useFormik({

    initialValues: {
      ogNumber: ""  
    },

    validationSchema: Yup.object().shape({
      ogNumber: Yup.string()
        .required("OG-Number is required.")
        .min(4, "OG-Number should be at least 4 characters")
        .max(7, "OG-Number should not be more than 7 characters"),
         }),


         onSubmit: (details) => {
          dispatch(resendConfirmAccountTokenSlice({ ogNumber: details.ogNumber }))
          .unwrap()
          .then((res) => {
            toast.success(`${res.firstName}, code has been resent to ${res.phoneNumber}`);
          })
          .catch((error) => {
            toast.error(`${error.message}`);
          });
         }
        })
    
  return (
    <div>
      <ConfirmAccountView loading ={isLoading} formik = {formik}> </ConfirmAccountView>
    </div>
  );
};
