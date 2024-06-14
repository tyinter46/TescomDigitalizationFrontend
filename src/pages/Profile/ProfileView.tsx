// import { Button, Input, Loader } from "components";
// import { SvgTesMessageSquareEdit, TesCheckedboxMarkedCircle } from "components/icons";
// // import { user } from "assets/images";
// import { ProfileViewModal } from "components/modules/modals";
// import { useState } from "react";
// import { UserDetails, Settings } from "types";
// import { Formik } from "formik";

// type ModalId = string | null;
// interface Props {
//   loading: boolean;
//   create: Function;
//   userDetails: UserDetails;
//   image: string;
//   pictureUpload: Function;
//   isLoading: boolean;
// }

// function ProfileView({ loading, create, userDetails, pictureUpload, image, isLoading }: Props) {
//   const [openModal, setOpenModal] = useState<ModalId>(null);

//   const onsubmit = (updatedProfile: Settings) => {
//     create(updatedProfile);
//   };

//   const handlePhotoUpload = (event: any) => {
//     const file = event.currentTarget.files[0];

//     pictureUpload(file);
//   };
//   return (
//     <div>
//       {isLoading ? (
//         <p className="flex justify-center">Loading Profile View...</p>
//       ) : (
//         <div>
//           <Formik
//             initialValues={{}}
//             onSubmit={handlePhotoUpload}
//             enableReinitialize
//             validationSchema={{}}
//           >
//             <div className="relative flex justify-center mb-10">
//               <div className="relative flex p-2 items-center flex-col mb-3 w-[120px] h-[120px]">
//                 <div className="relative shadow rounded-full w-[120px] h-[120px] align-middle mb-2">
//                   <img
//                     src={image || ""}
//                     alt="..."
//                     className="shadow rounded-full w-[120px] h-[120px] align-middle border-2 border-green mb-2"
//                   />
//                   <div className="absolute right-5 bottom-0">
//                     <TesCheckedboxMarkedCircle
//                       color="green"
//                       width="25px"
//                       height="25px"
//                     ></TesCheckedboxMarkedCircle>
//                   </div>
//                 </div>
//                 <Input
//                   className="absolute sm:rounded-full rounded-full align-middle w-full h-full cursor-pointer opacity-0"
//                   type="file"
//                   name="select-photo"
//                   id="select-photo"
//                   onChange={handlePhotoUpload}
//                   accept="image/png, image/jpeg ,image/jpg"
//                 />
//                 <div className="flex flex-row colums-2">
//                   <div className="">
//                     <SvgTesMessageSquareEdit color="green"></SvgTesMessageSquareEdit>
//                   </div>
//                   <label
//                     htmlFor="select-photo"
//                     className="text-[12px] leading-4 font-medium text-green-600"
//                   >
//                     Change Photo
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </Formik>
//           <div className="flex flex-row items-start bg-white columns-2 rounded-md mb-10 drop-shadow-md flex-wrap sm:flex-nowrap">
//             {/* <div className="basis-0 grow-[1] p-2">
//               <div className="text-[14px] leading-4 text-green-600 font-normal">Full Name</div>
//               <span className="text-[16px] leading-8">
//                 {userDetails?.name?.firstName ? userDetails?.name?.firstName : "-"}{" "}
//                 {userDetails?.name?.lastName}
//               </span>
//             </div> */}
//             {/* <div className="basis-0 grow-[1.2] p-2">
//               <div className="text-[14px] leading-4 text-green-600 font-normal">Date of Birth</div>
//               <span className="text-[16px] leading-8">
//                 {userDetails?.dateOfBirth ? userDetails?.dateOfBirth : "-"}
//               </span>
//             </div> */}
//           </div>
//           <div className="bg-white rounded-md mb-10 drop-shadow-md flex-wrap sm:flex-nowrap">
//             <div className="flex flex-row items-start columns-2">
//               <div className="basis-0 grow-[1] p-2">
//                 <div className="text-[14px] leading-4 text-green-600 font-normal">Address</div>
//                 <span className="text-[16px] leading-8">
//                   {userDetails?.tscFileNumber ? userDetails?.tscFileNumber : "-"}
//                 </span>
//               </div>
//             </div>
//             <div className="flex flex-row items-start columns-3">
//               <div className="basis-0 grow-[1] p-2">
//                 <div className="text-[14px] leading-4 text-green-600 font-normal">Zip</div>
//                 <span className="text-[16px] leading-8">
//                   {userDetails?.schoolOfPresentPosting ? userDetails?.schoolOfPresentPosting : "-"}
//                 </span>
//               </div>
//               <div className="basis-0 grow-[1.2] p-2">
//                 <div className="text-[14px] leading-4 text-green-600 font-normal">City</div>
//                 <span className="text-[16px] leading-8">
//                   {userDetails?.zone ? userDetails?.zone : "-"}
//                 </span>
//               </div>
//             </div>
//             <div className="flex flex-row items-start columns-3">
//               <div className="basis-0 grow-[1] p-2">
//                 <div className="text-[14px] leading-4 text-green-600 font-normal">State</div>
//                 <span className="text-[16px] leading-8">
//                   {userDetails?.division ? userDetails?.division : "-"}
//                 </span>
//               </div>
//               <div className="basis-0 grow-[1.2] p-2">
//                 <div className="text-[14px] leading-4 text-green-600 font-normal">Country</div>
//                 <span className="text-[16px] leading-8">
//                   {userDetails?.nationality ? userDetails?.nationality : "-"}
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-row items-start bg-white columns-2 rounded-md mb-10 drop-shadow-md flex-wrap sm:flex-nowrap">
//             <div className="basis-0 grow-[1] p-2">
//               <div className="text-[14px] leading-4 text-green-600 font-normal">Phone Number</div>
//               <span className="text-[16px] leading-8">
//                 {userDetails?.dateOfPresentSchoolPosting
//                   ? userDetails?.dateOfPresentSchoolPosting
//                   : "-"}
//               </span>
//             </div>
//             <div className="basis-0 grow-[1.2] p-2">
//               <div className="text-[14px] leading-4 text-green-600 font-normal">Email Address</div>
//               <span className="text-[16px] leading-8">
//                 {userDetails?.email ? userDetails?.email : "-"}
//               </span>
//             </div>
//           </div>

//           <div className="relative flex flex-row  justify-end">
//             <Button
//               onClick={() => setOpenModal("form")}
//               size="sm"
//               type="submit"
//               className="w-20 h-12"
//             >
//               {loading ? <Loader /> : "Edit"}
//             </Button>
//           </div>
//         </div>
//       )}

//       {openModal === "form" && (
//         <div className="">
//           <ProfileViewModal
//             title="Edit Profile"
//             onSubmit={onsubmit}
//             userDetails={userDetails}
//             setOpenModal={setOpenModal}
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProfileView;
