import * as Yup from "yup";
import { useFormik } from "formik";
import LoginView from "./LoginView";

export const LoginContainer = () => {
  const isLoading = false;
  const formik = useFormik({
    initialValues: {
      ogNumber: "",
      phoneNumber: "",
      password: ""
    },
    validationSchema: Yup.object().shape({
      ogNumber: Yup.string().required("OG-Number is required"),
      password: Yup.string()
        .required("Password is required")
        .matches(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
          "Weak Password. Password must have at least: 1 upper case, 1 digit, 1 special character, Minimum eight in length"
        )
    }),

    onSubmit: () => {
      console.log("submitting details");
    }
  });

  return <LoginView formik={formik} loading={isLoading} />;
};
