import PinInput from "react-pin-input";
// import { FormInput } from "../input";



interface Props{
  onComplete: Function;
  ogNumber: string
}

function InputPin({onComplete, ogNumber}: Props) {
  // const [input, setInput] = useState([]);



  return (

    <div>
      
 
    <PinInput
      length={6}
      initialValue=""
      secret={false}
      // secretDelay={100}
      onChange={
       
        (value, index) => {
        console.log(value, index);
      
      }
    }
      type="numeric"
      inputMode="number"
      style={{ padding: "20px", marginTop: "300px", alignSelf: "center", marginLeft: "500px" }}
      inputStyle={{ borderColor: "green" }}
      inputFocusStyle={{ borderColor: "blue" }}
      onComplete={(value, index) => {
        onComplete
        console.log(value, index, ogNumber);
      }}
      
      autoSelect={true}
      regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
    />

    </div>
  );
}

export default InputPin;
