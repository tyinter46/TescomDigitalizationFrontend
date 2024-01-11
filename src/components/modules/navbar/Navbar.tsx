import { Link } from "react-router-dom";
/* eslint-disable prettier/prettier */
import { HOME, SIGNUP } from "routes/CONSTANTS";
import { Button } from "components/widgets/button";
// interface Props {
//     transparent?: boolean;
// }
import { ogLogo } from "assets/logos";

const Navbar = () => {
  return (
    <div className="flex flex-row w-full h-30 justify-between bg-green ">
      <div className="flex flex-row w-full justify-start ">
        <Link to={HOME}>
          <img src={ogLogo} alt="logo here"></img>
        </Link>
      </div>
      <div className="flex flex-row w-full justify-end ">
        <Button to={SIGNUP} variant="full">
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
