/* eslint-disable @typescript-eslint/consistent-type-imports */
import { Button, FormInput, Loader } from "components/widgets";
import { LOGIN } from "routes/CONSTANTS";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "components/modules/navbar/Navbar";
import { FormikProps } from "formik";
import { useAppDispatch } from "hooks";
import { confirmAccount, resendConfirmAccountTokenSlice } from "../../redux/slices/auth.slice";
import { toast } from "react-toastify";
import PinInput from "react-pin-input";

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

const SignupView: React.FC<Props> = ({ loading, isVerifying, formik }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();


  const handleOgNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/^OG/, ""); // Remove existing "OG" if any
    formik.setFieldValue("ogNumber", `OG${value}`);
    console.log(formik.values.ogNumber)
  };
  const resendCode = (ogNumber: string) => {
    dispatch(resendConfirmAccountTokenSlice({ ogNumber }))
      .unwrap()
      .then((res) => {
        toast.success(` ${res.firstName}, code has been resent to ${res.phoneNumber}`);
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };

  const onComplete = (value: string, ogNumber: string) => {
    dispatch(confirmAccount({ code: value, ogNumber }))
      .unwrap()
      .then((res) => {
        toast.success(` ${res.ogNumber} has been successfully verified, kindly login`);
        navigate(LOGIN);
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };
  loading ? Loader : (
    <>
      <Navbar />
      <div className="sm: justify-self-center w-full mt-10 h-full padding-20 bg-black-100 p-8 rounded-lg shadow-lg">
        <form onSubmit={formik.handleSubmit} className="space-y-5">
          <div className="gap-4">
          
            <label htmlFor="ogNumber" className="block text-lg text-yellow-300"></label>
            <FormInput
              required
              size="lg"
              type="text"
              className="text-white text-lg bg-gray"
              id="ogNumber"
              name="ogNumber"
              label="Your OG-Number"
              placeholder="OG-number"
              errors={formik.errors.ogNumber}
              touched={formik.touched.ogNumber}
              onChange={ handleOgNumberChange   }          
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
              className="text-white text-lg bg-gray"
            />
            <FormInput
              required
              size="lg"
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              label="Phone Number"
              errors={formik.errors.phoneNumber}
              touched={formik.touched.phoneNumber}
              onChange={formik.handleChange}
              className="text-white text-lg bg-gray"
            />
            <FormInput
              required
              size="lg"
              type="tel"
              id="confirmPhoneNumber"
              name="confirmPhoneNumber"
              label="Confirm Phone Number"
              errors={formik.errors.confirmPhoneNumber}
              touched={formik.touched.confirmPhoneNumber}
              onChange={formik.handleChange}
              className="text-white text-lg bg-gray"
            />
            <Button
              size="lg"
              type="submit"
              className="w-full text-black flex items-center bg-green justify-center mt-4 hover:bg-[#50c878] hover:text-white"
            >
              {loading ? <Loader /> : "Register Account"}
            </Button>
            <p className="my-5 text-lg text-yellow-300 text-center">
              Already have an account?
              <Link to={LOGIN}>
                <span className="text-primary"> Sign In</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  )
   return !isVerifying ? (
    <>
      <Navbar />
      <div className="sm: justify-self-center w-full mt-10 h-full padding-20 bg-black-100 p-8 rounded-lg shadow-lg">
        <form onSubmit={formik.handleSubmit} className="space-y-5">
          <div className="gap-4">
            <label htmlFor="ogNumber" className="block text-lg text-yellow-300"></label>
            <FormInput
              required
              size="lg"
              type="text"
              className="text-white text-lg bg-gray"
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
              className="text-white text-lg bg-gray"
            />
            <FormInput
              required
              size="lg"
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              label="Phone Number"
              errors={formik.errors.phoneNumber}
              touched={formik.touched.phoneNumber}
              onChange={formik.handleChange}
              className="text-white text-lg bg-gray"
            />
            <FormInput
              required
              size="lg"
              type="tel"
              id="confirmPhoneNumber"
              name="confirmPhoneNumber"
              label="Confirm Phone Number"
              errors={formik.errors.confirmPhoneNumber}
              touched={formik.touched.confirmPhoneNumber}
              onChange={formik.handleChange}
              className="text-white text-lg bg-gray"
            />
            <Button
              size="lg"
              type="submit"
              className="w-full text-black flex items-center bg-green justify-center mt-4 hover:bg-[#50c878] hover:text-white"
            >
              {loading ? <Loader /> : "Register Account"}
            </Button>
            <p className="my-5 text-lg text-yellow-300 text-center">
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
      <div className="mt-[180px]">
        <div className="ml-[120px]">
          <PinInput
            length={6}
            initialValue=""
            secret={false}
            onChange={(value, index) => {
              console.log(value, index);
            }}
            type="numeric"
            inputMode="number"
            style={{ padding: "20px", marginTop: "100px", alignSelf: "center", border: 5 }}
            inputStyle={{ borderColor: "green" }}
            inputFocusStyle={{ borderColor: "blue" }}
            onComplete={(value) => {
              console.log(value, formik.values.ogNumber);
              onComplete(value, formik.values.ogNumber);
            }}
            autoSelect={true}
            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
          />
        </div>
        <p className="text-black ml-[160px]">
          Didn't receive code? click
          <span
            className="text-green cursor-pointer"
            onClick={() => resendCode(formik.values.ogNumber)}
          >
            <strong> here </strong>
          </span>
          to resend
        </p>
      </div>
    </>
  );

};

export default SignupView;
