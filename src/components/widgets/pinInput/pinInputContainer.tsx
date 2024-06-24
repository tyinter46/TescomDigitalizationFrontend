import InputPin from "./PinInput";
import { confirmAccount } from "redux/slices/auth.slice";
// import { useState } from "react";
import { useAppDispatch } from "hooks";
import { toast } from "react-toastify";

interface Props {
  ogNumber: string;
}

const InputPinContainer: React.FC<Props> = ({ ogNumber }) => {
  const onComplete = (value: any) => {
    const dispatch = useAppDispatch();
    // const {isLoading} = useAppSelector ((state)=> state.auth)

    void dispatch(
      confirmAccount({
        code: value,
        ogNumber
      })
    )
      .unwrap()
      .then((res) => {
        setTimeout(() => {
          toast.success(` ${res.ogNumber}You have been successfully verified kindly login`);
        }, 5000);
      });
  };

  return <InputPin onComplete={onComplete} ogNumber={ogNumber}></InputPin>;
};

export default InputPinContainer;
