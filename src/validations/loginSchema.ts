const validation = (values: { ogNumber: string; password: string }) => {
  const errors = {
    ogNumber: "",
    password: ""
  };
  if (!values.ogNumber) {
    errors.ogNumber = "OGNumber is required";
  } else if (values.ogNumber.length < 7) {
    errors.ogNumber =
      "Invalid OG-Number! Kindly enter a valid OG-Number and ensure you add 0G before the numbers";
  }

  if (!values.password) {
    errors.password = "Password is required";
  }
  return errors;
};

export default validation;
