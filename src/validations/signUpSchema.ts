const validation = (values: {
  ogNumber: string;
  phoneNumber: string;
  password: string;
  confirmPhoneNumber: string;
}) => {
  const errors = {
    ogNumber: "",
    phoneNumber: "",
    password: "",
    confirmPhoneNumber: ""
  };
  if (!values.ogNumber) {
    errors.ogNumber = "OGNumber is required";
  } else if (values.ogNumber.length < 7) {
    errors.ogNumber =
      "Invalid OG-Number! Kindly enter a valid OG-Number and ensure you add 0G before the numbers e.g OG12345";
  } else if (values.ogNumber.length > 7) {
    errors.ogNumber =
      "OG-Numbers should not be more than 7 characters e.g OG12345";
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = "PhoneNumber is required";
  } else if (!values.confirmPhoneNumber) {
    errors.confirmPhoneNumber = "Confirm Phone Number is required";
  } else if (
    !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(values.password)
  ) {
    errors.password =
      "Weak Password. Password must have:, At least one upper case, At least one lower case, At least one digit, At least one special character, Minimum eight in length";
  } else if (values.password.length > 25) {
    errors.password = " Password length exceeded";
  }
  return errors;
};

export default validation;
