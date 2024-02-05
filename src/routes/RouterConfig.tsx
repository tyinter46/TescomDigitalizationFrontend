import { Routes, Route } from "react-router-dom";

import { Home, Signup, AboutUs, Login } from "pages";

import { HOME, SIGNUP, ABOUT, LOGIN } from "./CONSTANTS";

import type { FC } from "react";
// import {ProtectedRote, PublicRoute} from "components"

const RouterConfig: FC = () => {
  return (
    <div>
      <Routes>
        {/* Public routes should be placed in here */}
        <Route path={HOME} element={<Home />} />
        <Route path={SIGNUP} element={<Signup />} />
        <Route path={ABOUT} element={<AboutUs />} />
        <Route path={LOGIN} element={<Login />} />
      </Routes>
    </div>
  );
};

export default RouterConfig;
