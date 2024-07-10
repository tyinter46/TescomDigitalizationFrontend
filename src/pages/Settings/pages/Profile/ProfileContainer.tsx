/* eslint-disable @typescript-eslint/consistent-type-imports */
import ProfileView from "./ProfileView";
import { UserDetails } from "types";
import { useAppSelector } from "hooks";
import { getLongDate } from "utils";
// import FormData from "form-data"
// import axios from "axios";
// import env from "configs";

export const ProfileContainer = () => {
  const {user} = useAppSelector((state)=> state.auth)

console.log(user)
const dateOfBirth = getLongDate(user?.user?._doc?.dateOfBirth)
const dateOfFirstAppointment = getLongDate(user?.user?._doc?.dateOfFirstAppointment)
const dateOfRetirement = getLongDate(user?.user?._doc?.dateOfRetirement)


  const userDetails: UserDetails = {
    _id: user?.user?._doc.id,
    staffName: user?.user?._doc?.staffName.firstName,  
    dateOfBirth: dateOfBirth,
    dateOfFirstAppointment: dateOfFirstAppointment,
    dateOfRetirement: dateOfRetirement ,
    tscFileNumber: "-",
    phoneNumber: user?.user?._doc.phoneNumber,
    schoolOfPresentPosting: "",
    zone: "",
    division: "-",
    nationality: "-",
    stateOfOrigin: "-",
    lgOgOrigin: "-",
    ward: "-",
    qualifications: [
      {
        schoolName: "oou",
        specialization: "agric",
        startYear: "1997",
        endYear: "2000",
        degreeType: "Bsc"
      },
      {
        schoolName: "oou",
        specialization: "agric",
        startYear: "1997",
        endYear: "2000",
        degreeType: "Bsc"
      }
    ],
    dateOfPresentSchoolPosting: "-",
    cadre: "-",
    // dateOfFirstAppointment?: Date;
    // dateOfLastPromotion?: Date;
    // dateOfBirth?: Date;
    gradeLevel: "-",
    pfa: "-",
    pensionNumber: "-",
    ogNumber: "46454",
    // dateOfRetirement?: Date;
    professionalStatus: "-",
    email: "-"
  };

// const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>)=>{
// const files = event.target.files
// if(files){
//   const formData = new FormData ()
//   formData.append('file', files[0])

//   const response = await axios.post("",{

//   })
// }  
// }

  return (
    <>
      <ProfileView
        loading={false}
        create={() => {
          console.log("create");
        }}
        userDetails={userDetails}
        image={"imageUrl"}
        pictureUpload={() => {
          return true;
        }}
      ></ProfileView>
    </>
  );
};
