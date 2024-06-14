// import { Qualifications } from "types";
// import { Formik, Field, Form, FieldArray, ErrorMessage } from 'formik';

// export const AcademicRecord = ()=>{
//     return (
//         <>

//         {({ values : any}) => (
//           <Form>
//              <div>
//               <h3>Academic Records</h3>
//               <FieldArray name="academicRecords">
//                 {({ push, remove }) => (
//                   <>
//                     {values.academicRecords.map((_, index) => (
//                       <div key={index}>
//                         <label>
//                           School Name:
//                           <Field type="text" name={`academicRecords[${index}].schoolName`}  autoComplete="on"
//                             className="block py-2.5 px-2 sm:w-[90px] w-30   h-[25px] text-gray-900 sm:text-[14px] text-[14px] border border-green-600" />
//                         </label>
//                         <ErrorMessage name={`academicRecords[${index}].schoolName`} component="div"  />
//                         <label>
//                           Degree Type:
//                           <Field type="text" name={`academicRecords[${index}].degreeType`}  autoComplete="on"
//                             className="block py-2.5 px-2 sm:w-[90px] w-30   h-[25px] text-gray-900 sm:text-[14px] text-[14px] border border-green-600"/>
//                         </label>
//                         <ErrorMessage name={`academicRecords[${index}].degreeType`} component="div" />

//                         <label>
//                           Specialization:
//                           <Field type="text" name={`academicRecords[${index}].degreeType`}  autoComplete="on"
//                             className="block py-2.5 px-2 sm:w-[90px] w-30   h-[25px] text-gray-900 sm:text-[14px] text-[14px] border border-green-600"/>
//                         </label>
//                         <ErrorMessage name={`academicRecords[${index}].specialization`} component="div" />

//                         <label>
//                           Start Year:
//                           <Field type="text" name={`academicRecords[${index}].startYear`}  autoComplete="on"
//                             className="block py-2.5 px-2 sm:w-[90px] w-30   h-[25px] text-gray-900 sm:text-[14px] text-[14px] border border-green-600"/>
//                         </label>
//                         <ErrorMessage name={`academicRecords[${index}].startYear`} component="div" />
//                         <label>
//                           End Year:
//                           <Field type="text" name={`academicRecords[${index}].endYear`}  autoComplete="on"
//                             className="block py-2.5 px-2 sm:w-[90px] w-30   h-[25px] text-gray-900 sm:text-[14px] text-[14px] border border-green-600"/>
//                         </label>
//                         <ErrorMessage name={`academicRecords[${index}].endYear`} component="div" />
//                         <button type="button" onClick={() => remove(index)}>Remove</button>
//                       </div>
//                     ))}
//                     <button type="button" onClick={() => push({ schoolName: '', degreeType: '',  specialization: '', startYear: '', endYear: '' })}>
//                       Add Academic Record
//                     </button>
//                   </>
//                 )}
//               </FieldArray>
//             </div>
//             <button type="submit">Submit All Data</button>
//           </Form>
//         )}

//       </>
//     )
// }

// src/components/FormModal.tsx
// import React, { useState } from 'react';
// import Modal from 'react-modal';
// import { useDispatch, useSelector } from 'react-redux';
// import { Formik, Field, Form, FieldArray, ErrorMessage } from 'formik';
// import { RootState } from '../app/store';
// import { setName, setEmail, setAcademicRecords } from '../features/form/formSlice';
// import { userSchema } from '../validationSchema';

// Modal.setAppElement('#root'); // This is for accessibility reasons

// interface FormModalProps {
//   isOpen: boolean;
//   onRequestClose: () => void;
// }

// const FormModal: React.FC<FormModalProps> = ({ isOpen, onRequestClose }) => {
//   const dispatch = useDispatch();
//   const formState = useSelector((state: RootState) => state.form);

//   const handleSubmit = async (values: any) => {
//     dispatch(setName(values.name));
//     dispatch(setEmail(values.email));
//     dispatch(setAcademicRecords(values.academicRecords));

//     // Replace with your actual backend endpoint
//     const endpoint = 'https://your-backend-api.com/submit-form';

//     try {
//       const response = await fetch(endpoint, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(values),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Form submitted successfully:', data);
//         onRequestClose(); // Close the modal after successful submission
//       } else {
//         console.error('Form submission failed:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onRequestClose}
//       contentLabel="Academic Records Form"
//     >
//       <h2>Submit Academic Records</h2>
//       <Formik
//         initialValues={formState}
//         validationSchema={userSchema}
//         onSubmit={handleSubmit}
//       >
//         {({ values }) => (
//           <Form>
//             <div>
//               <label>
//                 Name:
//                 <Field type="text" name="name" />
//               </label>
//               <ErrorMessage name="name" component="div" />
//             </div>
//             <div>
//               <label>
//                 Email:
//                 <Field type="email" name="email" />
//               </label>
//               <ErrorMessage name="email" component="div" />
//             </div>
//             <div>
//               <h3>Academic Records</h3>
//               <FieldArray name="academicRecords">
//                 {({ push, remove }) => (
//                   <>
//                     {values.academicRecords.map((_, index) => (
//                       <div key={index}>
//                         <label>
//                           School Name:
//                           <Field type="text" name={`academicRecords[${index}].schoolName`} />
//                         </label>
//                         <ErrorMessage name={`academicRecords[${index}].schoolName`} component="div" />
//                         <label>
//                           Degree Type:
//                           <Field type="text" name={`academicRecords[${index}].degreeType`} />
//                         </label>
//                         <ErrorMessage name={`academicRecords[${index}].degreeType`} component="div" />
//                         <label>
//                           Start Year:
//                           <Field type="text" name={`academicRecords[${index}].startYear`} />
//                         </label>
//                         <ErrorMessage name={`academicRecords[${index}].startYear`} component="div" />
//                         <label>
//                           End Year:
//                           <Field type="text" name={`academicRecords[${index}].endYear`} />
//                         </label>
//                         <ErrorMessage name={`academicRecords[${index}].endYear`} component="div" />
//                         <button type="button" onClick={() => remove(index)}>Remove</button>
//                       </div>
//                     ))}
//                     <button type="button" onClick={() => push({ schoolName: '', degreeType: '', startYear: '', endYear: '' })}>
//                       Add Academic Record
//                     </button>
//                   </>
//                 )}
//               </FieldArray>
//             </div>
//             <button type="submit">Submit All Data</button>
//           </Form>
//         )}
//       </Formik>
//     </Modal>
//   );
// };

// export default FormModal;
