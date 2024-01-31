import { Link, useLocation } from "react-router-dom";
import { HOME, LOGIN, SIGNUP } from "routes/CONSTANTS";
import { Button } from "components/widgets/button";
// interface Props {
//     transparent?: boolean;
// }
import { ogLogo } from "assets/logos";
import NavLink from "./NavLink";

const Navbar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div
      className={
        location.pathname === "/"
          ? "flex flex-row items-center top-0 absolute w-3/4 right-0 h-16 justify-between opacity-100 bg-inherit border-b-2 border-b-primary"
          : "flex flex-row items-center top-0 absolute w-full right-0 h-16 justify-between opacity-100 bg-green border-b-2 border-b-primary"
      }
    >
      <div className="flex flex-row justify-start">
        <Link to={HOME}>
          <img src={ogLogo} alt="logo here"></img>
        </Link>
      </div>
      <div className="flex flex-row justify-end mt-0">
        <div className="flex flex-row justify-end w-80 gap-4">
          <div className="vertical-align-bottom mt-2">
            <NavLink to={LOGIN}>Log In</NavLink>
          </div>
          <Button
            to={SIGNUP}
            variant="full"
            className="bg-yellow text-black border border-black-200 hover:bg-black-100 hover:text-white rounded-full mt-0.7"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
