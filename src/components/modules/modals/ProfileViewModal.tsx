import { Button, Dropdown } from "components/widgets";
import { TesClose } from "components/icons";
import * as Yup from "yup";
import { UserDetails, Settings } from "types";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";

type ModalId = string | null;

interface ModalProps {
  title?: string;
  onSubmit: Function;
  userDetails: UserDetails;
  setOpenModal: (value: ModalId | null) => void;
  [key: string]: any;
}

interface School {
  name: string;
  info: string;
}

interface SchoolProps {
  school: School;
}

const SchoolComponent: React.FC<SchoolProps> = ({ school }) => {
  return (
    <div className="mb-4">
      <Dropdown button={<button>{school.name}</button>}>
        <p>{school.info}</p>
        {/* Add more children elements as needed */}
      </Dropdown>
    </div>
  );
};

interface SchoolListProps {
  schools: School[];
}
const schools: School[] = [
  { name: "School 1", info: "Some info about School 1" },
  { name: "School 2", info: "Some info about School 2" },
  { name: "School 3", info: "Some info about School 3" },
  { name: "School 4", info: "Some info about School 4" }
  // Add more schools here
];
const SchoolList: React.FC<SchoolListProps> = ({ schools }) => {
  return (
    <div>
      {schools.map((school, index) => (
        <SchoolComponent key={index} school={school} />
      ))}
    </div>
  );
};

function ProfileViewModal({ title, setOpenModal, onSubmit, userDetails }: ModalProps) {
  const ProfileViewSchema = Yup.object().shape({
    tscFileNumber: Yup.string().min(9, "Too Short").max(16, "Too Long!").required(),
    schoolOfPresentPosting: Yup.string().min(5, "Too short!").required(),
    zone: Yup.string().min(4, "Too short!").required(),
    division: Yup.string().required(),
    nationality: Yup.string().required(),
    stateOfOrigin: Yup.string().required(),
    lgOfOrigin: Yup.string().required(),
    ward: Yup.string().required(),
    qualifications: Yup.array().of(
      Yup.object().shape({
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
            // const selectedDate = new Date(value);
            const currentDate = new Date();
            return parseInt(value) <= parseInt(currentDate.getFullYear().toString());
          }
        ),

        endYear: Yup.string()
          .matches(/^\d{4}$/, "End year must be a 4-digit year")
          .required("End year is required")
          .test(
            "End Year Should not be less than start year",
            "End Year Should not be less than start year",
            function (value) {
              return parseInt(this.resolve(Yup.ref("startYear"))) <= parseInt(value);
            }
          )
      })
    ),
    dateOfPresentSchoolPosting: Yup.string().test(
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
    cadre: Yup.string().required(),
    gradeLevel: Yup.string().required(),
    pfa: Yup.string().required(),
    pensionNumber: Yup.string().required(),
    professionalStatus: Yup.string().required()
  });
  const initialValues: Settings = {
    tscFileNumber: userDetails?.tscFileNumber || "",
    schoolOfPresentPosting: userDetails?.schoolOfPresentPosting || "",
    zone: userDetails?.zone || "",
    division: userDetails?.division || "",
    nationality: userDetails?.nationality || "",
    stateOfOrigin: userDetails?.stateOfOrigin || "",
    lgOgOrigin: userDetails?.lgOgOrigin || "",
    ward: userDetails?.ward || "",
    qualifications: userDetails?.qualifications || [],
    dateOfPresentSchoolPosting: userDetails?.dateOfPresentSchoolPosting || "",
    cadre: userDetails?.cadre || "",
    gradeLevel: userDetails?.gradeLevel || "",
    pfa: userDetails?.pfa || "",
    pensionNumber: userDetails?.pensionNumber || "",
    professionalStatus: userDetails?.professionalStatus || "",
    email: userDetails?.email || ""
    // staffType: userDetails?.staffType || "",
    //  profilePhoto: userDetails.profilePhoto || ""
  };

  const handleSubmit = (values: Settings) => {
    const event = {
      id: userDetails?._id,
      tscFileNumber: values?.tscFileNumber,
      schoolOfPresentPosting: values.schoolOfPresentPosting,
      zone: values?.zone,
      division: values?.division,
      nationality: values?.nationality,
      stateOfOrigin: values?.stateOfOrigin,
      lgOgOrigin: values?.lgOgOrigin,
      ward: values?.ward,
      qualifications: values?.qualifications,
      dateOfPresentSchoolPosting: values?.dateOfPresentSchoolPosting,
      cadre: values?.cadre,
      gradeLevel: values?.gradeLevel,
      pfa: values?.pfa,
      pensionNumber: values?.pensionNumber,
      professionalStatus: values?.professionalStatus,
      email: values?.email,
      staffType: values?.staffType
    };
    onSubmit(event);
    setTimeout(() => {
      setOpenModal(null);
    }, 1000);
  };
  return (
    <div className="w-4/5 sm:max-w-4xl mx-auto h-screen fixed inset-0 flex items-center justify-center p-5">
      <div className="relative sm:max-w-md sm:w-3/4 bg-white rounded-lg overflow-hidden z-50">
        <div className="w-full h-14 flex items-center justify-between px-4 py-2 border-b-2 border-b-gray-200 bg-gray-50 rounded-t-lg">
          <p className="text-black font-medium text-[16px] pb-4 pt-4">{title}</p>
          <TesClose
            size={12}
            onClick={() => {
              setOpenModal(null);
            }}
            className="text-green cursor-pointer"
          />
        </div>
        <div className="px-8 pt-4 sm:w-[600px] w-5/6 min-h-[40vh] max-h-[80vh] overflow-y-auto mb-4 flex-wrap sm:flex-nowrap">
          <div>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={ProfileViewSchema}
            >
              {({ errors, touched, values }) => (
                <Form>
                  <div className="p-1 basis-1">
                    <div className="mb-5">
                      <label
                        htmlFor="tescomFileNumber"
                        className="text-[14px] leading-4 font-medium"
                      >
                        Tescom File Number
                      </label>
                      <Field
                        type="text"
                        id="tescomFileNumber"
                        name="tescomFileNumber"
                        className="block py-2.5 px-2 sm:w-[330px] w-52 h-[25px] text-gray-900 sm:text-[14px] text-[14px] border border-green-600"
                      />

                      {errors.tscFileNumber && touched.tscFileNumber ? (
                        <p className="mb-4 text-[0.8rem] text-alerts-error-color">
                          {errors.tscFileNumber}
                        </p>
                      ) : null}
                    </div>
                    {/* schools */}
                    <div className="mb-5">
                      <SchoolList schools={schools} />
                    </div>
                    <div className="mb-5">
                      <label htmlFor="Zone" className="text-[14px] leading-4 font-medium">
                        Zone
                      </label>
                      <Field
                        required
                        type="text"
                        id="zone"
                        name="zone"
                        autoComplete="on"
                        className="block py-2.5 px-2 sm:w-[330px] w-52 h-[25px] text-gray-900 sm:text-[14px] text-[14px] border border-green-600"
                      />
                      {errors.zone && touched.zone ? (
                        <p className="mb-4 text-[0.8rem] text-alerts-error-color">{errors.zone}</p>
                      ) : null}
                    </div>
                    <div className="mb-5">
                      <label htmlFor="division" className="text-[14px] leading-4 font-medium">
                        Division
                      </label>
                      <Field
                        required
                        type="text"
                        id="Division"
                        name="Division"
                        autoComplete="on"
                        className="block py-2.5 px-2 sm:w-[330px] w-52 h-[25px] text-gray-900 sm:text-[14px] text-[14px] border border-green-600"
                      />
                      {errors.division && touched.division ? (
                        <p className="mb-4 text-[0.8rem] text-alerts-error-color">
                          {errors.division}
                        </p>
                      ) : null}
                    </div>
                    <div className="mb-5">
                      <label htmlFor="country" className="text-[14px] leading-4 font-medium">
                        Nationality
                      </label>
                      <Field
                        type="text"
                        id="nationality"
                        name="nationality"
                        className="block py-2.5 px-2 sm:w-[330px] w-52 h-[25px] text-gray-900 sm:text-[14px] text-[14px] border border-green-600"
                      />
                    </div>
                    <div className="mb-5">
                      <label htmlFor="state" className="text-[14px] leading-4 font-medium">
                        State of Origin
                      </label>
                      <Field
                        type="text"
                        id="state"
                        name="state"
                        className="block py-2.5 px-2 sm:w-[330px] w-52 h-[25px] text-gray-900 sm:text-[14px] text-[14px] border border-green-600"
                      />
                    </div>

                    <div className="mb-5">
                      <label htmlFor="City" className="text-[14px] leading-4 font-medium">
                        Local Government of Origin
                      </label>
                      <Field
                        type="text"
                        id="localGovernment"
                        name="localGovernmen"
                        className="block py-2.5 px-2 sm:w-[330px] w-52 h-[25px] text-gray-900 sm:text-[14px] text-[14px] border border-green-600"
                      />
                    </div>

                    <div className="flex flex-row items-start columns-2 mb-6 flex-wrap sm:flex-nowrap">
                      <div className="p-1 basis-1">
                        <label htmlFor="ward" className="text-[14px] leading-4 font-medium">
                          ward
                        </label>
                        <span className="text-lg leading-8">
                          <Field
                            required
                            type="text"
                            id="ward"
                            name="ward"
                            autoComplete="on"
                            className="block py-2.5 px-2 sm:w-[230px] w-52 h-[25px] text-gray-900 sm:text-[14px] text-[14px] border border-green-600"
                          />
                        </span>
                        {errors.ward && touched.ward ? (
                          <p className="mb-4 text-[0.8rem] text-alerts-error-color">
                            {errors.ward}
                          </p>
                        ) : null}
                      </div>
                      <div className="mb-5">
                        <label htmlFor="cadre" className="text-[14px] leading-4 font-medium">
                          Cadre
                        </label>
                        <Field
                          required
                          type="text"
                          id="cadre"
                          name="cadre"
                          autoComplete="on"
                          className="block py-2.5 px-2 sm:w-[330px] w-52 h-[25px] text-gray-900 sm:text-[14px] text-[14px] border border-green-600"
                        />
                        {errors.division && touched.division ? (
                          <p className="mb-4 text-[0.8rem] text-alerts-error-color">
                            {errors.cadre}
                          </p>
                        ) : null}
                      </div>
                      <div className="mb-5">
                        <label htmlFor="gradeLevel" className="text-[14px] leading-4 font-medium">
                          Grade Level
                        </label>
                        <Field
                          required
                          type="text"
                          id="gradeLevel"
                          name="gradeLevel"
                          autoComplete="on"
                          className="block py-2.5 px-2 sm:w-[330px] w-52 h-[25px] text-gray-900 sm:text-[14px] text-[14px] border border-green-600"
                        />
                        {errors.gradeLevel && touched.gradeLevel ? (
                          <p className="mb-4 text-[0.8rem] text-alerts-error-color">
                            {errors.gradeLevel}
                          </p>
                        ) : null}
                      </div>

                      <div>
                        <h3>Academic Records</h3>
                        <FieldArray name="academicRecords">
                          {({ push, remove }) => (
                            <>
                              {values.qualifications.map((_, index) => (
                                <div key={index}>
                                  <label>
                                    School Name:
                                    <Field
                                      type="text"
                                      name={`academicRecords[${index}].schoolName`}
                                      autoComplete="on"
                                      className="block py-2.5 px-2 sm:w-[90px] w-30   h-[25px] text-gray-900 sm:text-[14px] text-[14px] border border-green-600"
                                    />
                                  </label>
                                  <ErrorMessage
                                    name={`academicRecords[${index}].schoolName`}
                                    component="div"
                                  />
                                  <label>
                                    Degree Type:
                                    <Field
                                      type="text"
                                      name={`academicRecords[${index}].degreeType`}
                                      autoComplete="on"
                                      className="block py-2.5 px-2 sm:w-[90px] w-30   h-[25px] text-gray-900 sm:text-[14px] text-[14px] border border-green-600"
                                    />
                                  </label>
                                  <ErrorMessage
                                    name={`academicRecords[${index}].degreeType`}
                                    component="div"
                                  />

                                  <label>
                                    Specialization:
                                    <Field
                                      type="text"
                                      name={`academicRecords[${index}].degreeType`}
                                      autoComplete="on"
                                      className="block py-2.5 px-2 sm:w-[90px] w-30   h-[25px] text-gray-900 sm:text-[14px] text-[14px] border border-green-600"
                                    />
                                  </label>
                                  <ErrorMessage
                                    name={`academicRecords[${index}].specialization`}
                                    component="div"
                                  />

                                  <label>
                                    Start Year:
                                    <Field
                                      type="text"
                                      name={`academicRecords[${index}].startYear`}
                                      autoComplete="on"
                                      className="block py-2.5 px-2 sm:w-[90px] w-30   h-[25px] text-gray-900 sm:text-[14px] text-[14px] border border-green-600"
                                    />
                                  </label>
                                  <ErrorMessage
                                    name={`academicRecords[${index}].startYear`}
                                    component="div"
                                  />
                                  <label>
                                    End Year:
                                    <Field
                                      type="text"
                                      name={`academicRecords[${index}].endYear`}
                                      autoComplete="on"
                                      className="block py-2.5 px-2 sm:w-[90px] w-30   h-[25px] text-gray-900 sm:text-[14px] text-[14px] border border-green-600"
                                    />
                                  </label>
                                  <ErrorMessage
                                    name={`academicRecords[${index}].endYear`}
                                    component="div"
                                  />
                                  <button type="button" onClick={() => remove(index)}>
                                    Remove
                                  </button>
                                </div>
                              ))}
                              <button
                                type="button"
                                onClick={() => {
                                  push({
                                    schoolName: "",
                                    degreeType: "",
                                    specialization: "",
                                    startYear: "",
                                    endYear: ""
                                  });
                                }}
                              >
                                Add Academic Record
                              </button>
                            </>
                          )}
                        </FieldArray>
                      </div>
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="dateOfPresentSchoolPosting"
                        className="text-[14px] leading-4 font-medium"
                      >
                        Date of Present School Posting
                      </label>
                      <Field
                        required
                        type="date"
                        id="dateOfPresentSchoolPosting"
                        name="dateOfPresentSchoolPosting"
                        autoComplete="on"
                        className="block py-2.5 px-2 sm:w-[330px] w-52 h-[25px] text-gray-900 sm:text-[14px] text-[14px] border border-green-600"
                      />
                      {errors.dateOfPresentSchoolPosting && touched.dateOfPresentSchoolPosting ? (
                        <p className="mb-4 text-[0.8rem] text-alerts-error-color">
                          {errors.dateOfPresentSchoolPosting}
                        </p>
                      ) : null}
                    </div>

                    <div className="mb-5">
                      <label htmlFor="cadre" className="text-[14px] leading-4 font-medium">
                        Cadre
                      </label>
                      <Field
                        required
                        type="text"
                        id="cadre"
                        name="cadre"
                        autoComplete="on"
                        className="block py-2.5 px-2 sm:w-[330px] w-52 h-[25px] text-gray-900 sm:text-[14px] text-[14px] border border-green-600"
                      />
                      {errors.dateOfPresentSchoolPosting && touched.dateOfPresentSchoolPosting ? (
                        <p className="mb-4 text-[0.8rem] text-alerts-error-color">
                          {errors.dateOfPresentSchoolPosting}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="px-5 sm:pl-52 pl-34 flex flex-row items-start columns-2 ">
                      <div className="">
                        <Button
                          onClick={() => {
                            setOpenModal(null);
                          }}
                          size="sm"
                          variant="outline"
                          className="w-20 h-12"
                          type="reset"
                        >
                          Cancel
                        </Button>
                      </div>
                      <div className="pl-2">
                        <Button size="sm" type="submit" className="w-20 h-12">
                          Save
                        </Button>
                      </div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <div onClick={() => setOpenModal(null)} className="fixed inset-0 bg-black/70 z-10"></div>
    </div>
  );
}

export default ProfileViewModal;
