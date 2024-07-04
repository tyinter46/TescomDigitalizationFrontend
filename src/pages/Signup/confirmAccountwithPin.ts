// import { useAppDispatch } from "hooks";
// import { confirmAccount, resendConfirmAccountTokenSlice } from "../../redux/slices/auth.slice"
// import PinInput from "react-pin-input"

// import { Navbar } from "components";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// function confirmAccountAfterSignUp = ()=>{
//     const dispatch = useAppdispatch()


// const onComplete = (value: string, ogNumber: string) => {
//     dispatch(confirmAccount({ code: value, ogNumber }))
//       .unwrap()
//       .then((res) => {
//         toast.success(` ${res.ogNumber} has been successfully verified, kindly login`);
//         navigate(LOGIN);
//       })
//       .catch((error) => {
//         toast.error(`${error.message}`);
//       });
//   };
//   const resendCode = (ogNumber: string) => {
//     dispatch(resendConfirmAccountTokenSlice({ ogNumber }))
//       .unwrap()
//       .then((res) => {
//         toast.success(` ${res.firstName}, code has been resent to ${res.phoneNumber}`);
//       })
//       .catch((error) => {
//         toast.error(`${error.message}`);
//       });
//   }



// return (
//     <>
//       <Navbar />
    
//       <div className="mt-[180px]">
//         <div className="ml-[120px]">
//           <PinInput
//             length={6}
//             initialValue=""
//             secret={false}
//             onChange={(value, index) => {
//               console.log(value, index);
//             }}
//             type="numeric"
//             inputMode="number"
//             style={{ padding: "20px", marginTop: "100px", alignSelf: "center", border: 5 }}
//             inputStyle={{ borderColor: "green" }}
//             inputFocusStyle={{ borderColor: "blue" }}
//             onComplete={(value) => {
//               console.log(value, formik.values.ogNumber);
//               onComplete(value, formik.values.ogNumber);
//             }}
//             autoSelect={true}
//             regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
//           />
//         </div>
//         <p className="text-black ml-[160px]">
//           Didn't receive code? click
//           <span
//             className="text-green cursor-pointer"
//             onClick={() => resendCode(formik.values.ogNumber)}
//           >
//             <strong> here </strong>
//           </span>
//           to resend
//         </p>
//       </div>
//     </>
//   );

// };

// export default confirmAccountAfterSignUp