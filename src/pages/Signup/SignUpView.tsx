/* eslint-disable @typescript-eslint/consistent-type-imports */
import { Button, FormInput, Loader } from "components/widgets";
import { LOGIN } from "routes/CONSTANTS";
import { Link } from "react-router-dom";
import Navbar from "components/modules/navbar/Navbar";
import { FormikProps } from "formik";
import { useAppDispatch } from "hooks";
import { confirmAccount } from "../../redux/slices/auth.slice";
import { toast } from "react-toastify";

// import InputPin from "components/widgets/pinInput/PinInput";

// import { useState } from "react";

// import { Landing } from "components/layouts";

import PinInput from "react-pin-input";
// import { FormInput } from "../input";

// interface Props {
//   onComplete: (value: any, ogNumber: any) => void;
// }

// const [input, setInput] = useState([]);

interface Props {
  loading: boolean;
  isVerifying: boolean;
  formik: FormikProps<{
    ogNumber: string;
    phoneNumber: string;
    password: string;
    confirmPhoneNumber: string;
  }>;
}

// const [isVerifying, setIsVerifying] = useState(false)

const SignupView = ({ loading, isVerifying, formik }: Props) => {
  const onComplete = (value: any, ogNumber: any) => {
    const dispatch = useAppDispatch();
    // const {isLoading} = useAppSelector ((state)=> state.auth)

    void dispatch(
      confirmAccount({
        code: value,
        ogNumber: ogNumber
      })
    )
      .unwrap()
      .then((res) => {
        setTimeout(() => {
          toast.success(` ${res.ogNumber}You have been successfully verified kindly login`);
        }, 5000);
      });
  };

  return !isVerifying ? (
    <>
      <Navbar />
      <div className="sm: justify-self-center w-full mt-20 h-80 padding-20">
        <form onSubmit={formik.handleSubmit} className="space-y-5">
          <div className="gap-4">
            <label htmlFor="ogNumber" className="block text-lg text-gray-200"></label>
            <FormInput
              required
              size="lg"
              type="text"
              className="text-9xl"
              id="ogNumber"
              name="ogNumber"
              label="Your OG-Number"
              placeholder="OG-number"
              errors={formik.errors.ogNumber}
              touched={formik.touched.ogNumber}
              onChange={formik.handleChange}
            />
            <FormInput
              required
              size="lg"
              type="password"
              id="password"
              name="password"
              maxLength={15}
              label="Create password"
              placeholder="Enter password"
              errors={formik.errors.password}
              touched={formik.touched.password}
              onChange={formik.handleChange}
            />
            <FormInput
              required
              size="lg"
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              label="Phone Number"
              // placeholder="+234 80 123 456 7"
              errors={formik.errors.phoneNumber}
              touched={formik.touched.phoneNumber}
              onChange={formik.handleChange}
            />
            <FormInput
              required
              size="lg"
              type="tel"
              id="confirmPhoneNumber"
              name="confirmPhoneNumber"
              label="Confirm Phone Number"
              // placeholder="Confirm Phone Number"
              errors={formik.errors.confirmPhoneNumber}
              touched={formik.touched.confirmPhoneNumber}
              onChange={formik.handleChange}
            />
            <Button
              size="lg"
              type="submit"
              className="w-full text-black flex items-center bg-green text-black justify-center mt-4 hover:bg-[#50c878] hover:text-white"
            >
              {loading ? <Loader /> : "Register Account"}
            </Button>
            <p className="my-5 text-lg text-gray-200 text-center">
              Already have an account?
              <Link to={LOGIN}>
                <span className="text-primary"> Sign In</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  ) : (
    <>
      <Navbar></Navbar>
      {/* <InputPinContainer onComplete ={oncomplete()} /> */}
      {/* <InputPinContainer onComplete={onComplete} /> */}
      <PinInput
        length={6}
        initialValue=""
        secret={false}
        // secretDelay={100}
        onChange={(value, index) => {
          console.log(value, index);
        }}
        type="numeric"
        inputMode="number"
        style={{ padding: "20px", marginTop: "300px", alignSelf: "center", marginLeft: "500px" }}
        inputStyle={{ borderColor: "green" }}
        inputFocusStyle={{ borderColor: "blue" }}
        onComplete={(value) => {
          console.log(value, formik.values.ogNumber);
          onComplete(value, formik.values.ogNumber);
        }}
        autoSelect={true}
        regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
      />
    </>
  );
};

export default SignupView;
