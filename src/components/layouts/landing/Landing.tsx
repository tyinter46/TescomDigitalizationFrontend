/* eslint-disable @typescript-eslint/consistent-type-imports */
import Navbar from "components/modules/navbar/Navbar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Landing = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Landing;
