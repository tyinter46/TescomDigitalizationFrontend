import * as Yup from "yup";
import { useFormik } from "formik";
import SignupView from "./SignUpView";
import { useState } from "react";

export const SignupContainer = () => {
  const isLoading = false;
  const [isVerifying, setIsVerifying] = useState(false);
  const formik = useFormik({
    initialValues: {
      ogNumber: "",
      password: "",
      phoneNumber: "",
      confirmPhoneNumber: ""
    },
    validationSchema: Yup.object().shape({
      ogNumber: Yup.string().required("OG-Number is required"),
      password: Yup.string()
        .required("Password is required")
        .matches(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
          "Weak Password. Password must have at least: 1 upper case, 1 digit, 1 special character, Minimum eight in length"
        ),
      phoneNumber: Yup.string().required("Phone Number is Required").min(17, "Phone Number Length Incomplete"),
      confirmPhoneNumber: Yup.string()
        .required("Confirm Phone Number is Required")
        .oneOf([Yup.ref("phoneNumber")], "Does not match with the phone number")
    }),

    onSubmit: () => {
      setIsVerifying(true);
      console.log("is verifying");
    }
  });

  return <SignupView formik={formik} loading={isLoading} isVerifying={isVerifying} />;
};
