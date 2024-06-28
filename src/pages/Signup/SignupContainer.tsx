import * as Yup from "yup";
import { useFormik } from "formik";
// import { useState } from "react";
import { toast } from "react-toastify";

import { Auth } from "components";
import { signup } from "../../redux/slices/auth.slice";
import { useAppDispatch, useAppSelector } from "hooks";

import SignupView from "./SignUpView";

export const SignupContainer = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.auth);
  // const [isVerifying, setIsVerifying] = useState(false);
  let { isVerifying } = useAppSelector((state) => state.auth);
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
      phoneNumber: Yup.string()
        .required("Phone Number is Required")
        .min(17, "Phone Number Length Incomplete"),
      confirmPhoneNumber: Yup.string()
        .required("Confirm Phone Number is Required")
        .oneOf([Yup.ref("phoneNumber")], "Does not match with the phone number")
    }),

    onSubmit: (details) => {
      isVerifying = true;
      console.log("is verifying", details);
      void dispatch(
        signup({
          ogNumber: details.ogNumber,
          password: details.password,
          phoneNumber: details.phoneNumber
        })
      )
        .unwrap()
        .then((res) => {
          setTimeout(() => {
            toast.success(
              `Verification code has been sent to this phone number "${res.phoneNumber}", kindly input the code for verification`
            );
          }, 5000);
        });
    }
  });

  return (
    <Auth>
      <SignupView formik={formik} loading={isLoading} isVerifying={isVerifying} />
    </Auth>
  );
};
