import { NavLink } from "react-router-dom";
import { ABOUT } from "routes/CONSTANTS";

const AboutUsHome = () => {
  return (
    <div className="flex flex-col gap-4 h-80 w-80 bg-sky mt-60">
      <div className="">
        <h4>About Us</h4>
      </div>
      <div className="text-wrap gap-6">
        <p>
          {" "}
          Our innovative platform is designed to empower Ogun State <br />
          Teaching Service Commission with a comprehensive solution{" "}
        </p>
        <p> for efficient staff management</p>

        <strong>
          {" "}
          <NavLink to={ABOUT}> Show more</NavLink>
        </strong>
      </div>
    </div>
  );
};

export default AboutUsHome;
