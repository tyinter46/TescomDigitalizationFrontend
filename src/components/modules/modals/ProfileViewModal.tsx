import { Button } from "components/widgets";
import { TesClose } from "components/icons";
import * as Yup from "yup";
import { UserDetails , Qualifications} from "types";
import { Formik, Form, Field } from "formik"; 

type ModalId = string | null;

interface ModalProps {
    title?: string;
    onSubmit: Function;
    userDetails: UserDetails;
    setOpenModal: (value: ModalId | null) => void;
    [key: string]: any;
}
function ProfileViewModal ({title, setOpenModal, onSubmit, userDetails }: ModalProps){
    const ProfileViewSchema = Yup.object.shape({
        tscFileNumber: Yup.string().min(9, "Too Short").max(16, "Too Long!").required(),
        schoolOfPresentPosting: Yup.string().min(5, "Too short!").required(),
        zone: Yup.string().min(4, "Too short!").required(),
        division: Yup.string().required(),
        nationality: Yup.string().required(),
        stateOfOrigin: Yup.string().required(),
        lgOfOrigin: Yup.string().required(),
        ward: Yup.string().required(),
        qualifications: Yup.array().of(Yup.object().shape({  
                  
             degreeType: Yup.string().required(),
             specialization: Yup.string().required(),
            // startYear: Date,
            // endYear: Date,
             schoolName: Yup.string().required(),  
             startYear: Yup.string().test(
      "not-in-future",
      "Start Year cannot be a future date",
      function (value) {
        // If no value is provided, it passes validation (assuming it's a non-required field)
        if (!value) {
          return false;
        }
        // Check if the selected date is greater than today's date
        const selectedDate = new Date(value);
        const currentDate = new Date();
        return selectedDate <= currentDate;
      }
    ),

    }))
})}