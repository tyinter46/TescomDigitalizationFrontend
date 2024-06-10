export interface UserDetails {
  tscFileNumber: string;
  schoolOfPresentPosting: string;
  zone: string;
  division: string;
  nationality: string;
  stateOfOrigin: string;
  lgOgOrigin: string;
  ward: string;
  qualifications: Qualifications[];
  dateOfPresentSchoolPosting: string;
  cadre: string;
  // dateOfFirstAppointment?: Date;
  // dateOfLastPromotion?: Date;
  // dateOfBirth?: Date;
  gradeLevel: number;
  pfa: string;
  pensionNumber: string;
  // dateOfRetirement?: Date;
  professionalStatus: string;
  email: string;
  ogNumber: string;
  password: string;
  confirmationCode: string;
  profilePhoto: string;
  tetiaryCertificate: string;
  primarySchoolCertificate?: string;
  secondarySchoolCert?: string;
  firstAppointmentLetter?: string;
  lastPromotionLetter?: string;
  birthCertificate?: string;
  serviceStatus?: string;
  staffType?: string;
  // remark?: string;
}

// export interface UserDetails {
//     country: string;
//     email: string;
//     name: Name;
//     phoneNumber: string;
//     _id: string;
//     address: string;
//     zip: string;
//     dateOfBirth: string;
//     city: string;
//     state: string;
//     profilePhoto: string;
//   }

export interface Qualifications {
  degreeType: string;
  specialization: string;
  startYear: string;
  endYear: string;
  schoolName: string;
}

export interface ExistingStaffDetails {}
