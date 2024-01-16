import { whitePolygon, yellowPolygon } from "assets/logos";
import { Button } from "components/widgets/button";
import { SIGNUP } from "routes/CONSTANTS";

const HomeView = () => {
  return (
    <div className="flex flex-col content-center w-1/4 h-screen bg-gradient-to-r from-green from-100% via-yellow-500 via-100% to-green-500 to-200%">
      <div className="mt-80 gap-x-10">
        <img src={yellowPolygon} alt="yellowPolygon" />
        <img src={whitePolygon} alt="whitePolygon" />
      </div>
      <div className="flex flex-row justify-evenly mt-20 w-inherit">
        <div className="text-wrap text-base text-white w-1/2 sm: visibility-hidden">
          Our innovative platform is designed to empower Ogun State Teaching Service Commission with
          a comprehensive solution for efficient staff management
        </div>
        <div className="flex flex-row mt-5  content-center bg-inherit">
          <Button
            to={SIGNUP}
            variant="outline"
            className="text-sm bg-yellow rounded-full text-black hover:bg-black-100 hover:text-white"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};
export default HomeView;
