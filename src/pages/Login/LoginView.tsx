/* eslint-disable @typescript-eslint/consistent-type-imports */
import { Button, FormInput, Loader, Navbar } from "components";
import { SIGNUP } from "routes/CONSTANTS";
import { Link } from "react-router-dom";
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

const LoginView = ({ loading, formik }: Props) => {
  return (
    <>
      <Navbar />
      <div className="sm: justify-self-center w-full mt-40 h-80 ">
        <form onSubmit={formik.handleSubmit}  className="space-y-3 bg-black-100 p-8 rounded-lg shadow-lg h-[580px] w-full -mt-[97px] ">
          <div className="gap-8 mt-20">
            <label htmlFor="ogNumber" className="block text-lg text-gray-200"></label>

            <FormInput
              required
              size="lg"
              type="text"
              id="ogNumber"
              name="ogNumber"
              label="Enter your OG-Number"
              placeholder="OG-number"
              errors={formik.errors.ogNumber}
              touched={formik.touched.ogNumber}
              onChange={formik.handleChange}
              className="text-black bg-white"
            />
            <FormInput
              required
              size="lg"
              type="password"
              id="password"
              name="password"
              label="Enter password"
              placeholder="Enter password"
              errors={formik.errors.password}
              touched={formik.touched.password}
              onChange={formik.handleChange}
              className="text-black bg-white"
            />
            <Button
              size="lg"
              type="submit"
              className="w-full text-white flex items-center bg-green justify-center mt-4 hover:bg-[#50c878] hover:text-black"
            >
              {loading ? <Loader /> : "Login Account"}
            </Button>
            <p className="my-5 text-lg text-yellow text-center">
              Don't have an account?
              <Link to={SIGNUP}>
                <span className="text-primary"> Sign up</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginView;
