/* eslint-disable @typescript-eslint/consistent-type-imports */
import { Button, FormInput, Loader } from "components/widgets";
import { LOGIN } from "routes/CONSTANTS";
import { Link } from "react-router-dom";
import Navbar from "components/modules/navbar/Navbar";
import { FormikProps } from "formik";

// import { Landing } from "components/layouts";

interface Props {
  loading: boolean;
  formik: FormikProps<{
    ogNumber: string;
    phoneNumber: string;
    password: string;
  }>;
}

const SignupView = ({ loading, formik }: Props) => {
  return (
    <>
      <Navbar />
      <div className="sm: justify-self-center w-full mt-20 h-80">
        <form className="space-y-3">
          <div className="gap-4">
            <label htmlFor="ogNumber" className="block text-lg text-gray-200"></label>

            <FormInput
              required
              size="lg"
              type="text"
              id="ogNumber"
              name="ogNumber"
              label="Your OG-Number"
              placeholder="OG-number"
              errors={formik.errors.ogNumber}
              touched={formik.touched.ogNumber}
              onChange={() => {
                console.log("hi");
              }}
            />
            <FormInput
              required
              size="lg"
              type="password"
              id="password"
              name="password"
              label="Create password"
              placeholder="Enter password"
              errors={formik.errors.password}
              touched={formik.touched.password}
              onChange={() => {
                console.log("hi");
              }}
            />
            <FormInput
              required
              size="lg"
              type="tel"
              id="tel"
              name="tel"
              label="Phone Number"
              placeholder="Phone Number"
              errors={formik.errors.password}
              touched={formik.touched.password}
              onChange={() => {
                console.log("hi");
              }}
            />
            <FormInput
              required
              size="lg"
              type="tel"
              id="tel"
              name="confimPhoneNumber"
              label="Phone Number"
              placeholder="Confirm Phone Number"
              errors={formik.errors.password}
              touched={formik.touched.password}
              onChange={() => {
                console.log("hi");
              }}
            />
            <Button
              size="lg"
              type="submit"
              className="w-full text-black flex items-center bg-[#50c878] text-black justify-center mt-4 hover:bg-[#50c878] hover:text-white"
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
  );
};

export default SignupView;
