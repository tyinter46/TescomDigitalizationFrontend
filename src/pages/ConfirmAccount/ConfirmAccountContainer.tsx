import * as Yup from "yup";
import { useFormik } from "formik";
import ConfirmAccountView from "./ConfirmAccountView";
import { useAppSelector } from "hooks";


export const ConfirmAccountContainer = () => {
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


         onSubmit: () => {}
        })
    
  return (
    <div>
      <ConfirmAccountView loading ={isLoading} formik = {formik}> </ConfirmAccountView>
    </div>
  );
};
