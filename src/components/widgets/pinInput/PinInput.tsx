import PinInput from "react-pin-input";
// import { useState } from "react";

function InputPin() {
  // const [input, setInput] = useState([]);

  // const handleChange = (event: any) => {
  //   setInput(event.target.value);
  // };
  return (
    <PinInput
      length={6}
      initialValue=""
      secret={false}
      // secretDelay={100}
      onChange={(value, index) => {
        console.log(value, index);
        //
        // handleChange(value);
      }}
      type="numeric"
      inputMode="number"
      style={{ padding: "20px", marginTop: "300px", alignSelf: "center", marginLeft: "500px" }}
      inputStyle={{ borderColor: "green" }}
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
