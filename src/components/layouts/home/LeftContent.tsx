import { whitePolygon, yellowPolygon } from "assets/logos";
import { Button } from "components/widgets/button";
import { SIGNUP } from "routes/CONSTANTS";

const LeftContent = () => {
  return (
    <div className="flex flex-col content-center w-1/4 h-screen bg-gradient-to-r from-green from-100% via-yellow-500 via-100% to-green-500 to-200%">
      <div className="flex flex-col mt-20 ml-10 content-center md: block">
        <strong>
          {" "}
          <h4 className="text-white">Simplified .</h4>
          <h4 className="text-yellow">Secure.</h4>
          <h5 className="text-white">Analytical Staff Data Management</h5>
        </strong>
      </div>
      <div className="mt-40 gap-x-10">
        <img src={yellowPolygon} alt="yellowPolygon" />
        <img src={whitePolygon} alt="whitePolygon" />
      </div>
      <div className="mt-10 flex md: flex flex-row justify-evenly mt-40 w-inherit ">
        <div className="text-wrap text-base content-center text-white block w-1/2 hidden md:block">
          Unlock Efficiency with Our Advanced Staff Management Platform
        </div>
        <div className="flex flex-row   content-center bg-inherit ">
          <Button
            to={SIGNUP}
            variant="outline"
            className="mt-inherit bg-yellow text-base md:text-sm bg-yellow rounded-full text-black hover:bg-black-100 hover:text-white"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
