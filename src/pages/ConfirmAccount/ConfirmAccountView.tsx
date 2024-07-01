import PinInput from "react-pin-input";
import Navbar from "components/modules/navbar/Navbar";
import { FormInput } from "components";
import { FormikProps } from "formik";
import { useAppDispatch} from "hooks";
import { toast } from "react-toastify";
import { confirmAccount} from "../../redux/slices/auth.slice";
import { LOGIN } from "routes/CONSTANTS";
import { useNavigate } from "react-router-dom";


interface Props {
    loading: boolean;
    formik: FormikProps<{
      ogNumber: string;
    }>
}


const ConfirmAccountView: React.FC<Props> = ({ formik }: Props) => {
  const dispatch = useAppDispatch ()
  const navigate = useNavigate ()

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
  return (
    <>
    <Navbar></Navbar>
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
            </div>
            </form >
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

    </>
  );
};

export default ConfirmAccountView;
