import * as Yup from "yup";
import { useFormik } from "formik";
import SignupView from "./SignUpView";

export const SignupContainer = () => {
  const isLoading = false;
  const formik = useFormik({
    initialValues: {
      ogNumber: "",
      phoneNumber: "",
      password: ""
    },
    validationSchema: Yup.object().shape({
      ogNumber: Yup.string().required("OG-Number is required"),
      phoneNumber: Yup.string().required("Phone Number is Required"),
      confirmPhoneNumber: Yup.string()
        .required("Phone Number is Required")
        .oneOf([Yup.ref("phoneNumber")], "Does not match with field1!"),
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

  return <SignupView formik={formik} loading={isLoading} />;
};
