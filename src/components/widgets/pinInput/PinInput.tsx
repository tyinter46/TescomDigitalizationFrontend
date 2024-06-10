import PinInput from "react-pin-input";

function InputPin() {
  return (
    <PinInput
      length={6}
      initialValue=""
      secret
      secretDelay={100}
      onChange={(value, index) => {
        console.log(value, index);
      }}
      type="numeric"
      inputMode="number"
      style={{ padding: "10px" }}
      inputStyle={{ borderColor: "red" }}
      inputFocusStyle={{ borderColor: "blue" }}
      onComplete={(value, index) => {
        console.log(value, index);
      }}
      autoSelect={true}
      regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
    />
  );
}

export default InputPin;
