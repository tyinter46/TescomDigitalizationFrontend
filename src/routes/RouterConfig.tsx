import { Routes, Route } from "react-router-dom";

import { Home, Signup } from "pages";

import { HOME, SIGNUP } from "./CONSTANTS";

import type { FC } from "react";
// import {ProtectedRote, PublicRoute} from "components"

const RouterConfig: FC = () => {
  return (
    <div>
      <Routes>
        {/* Public routes should be placed in here */}
        <Route path={HOME} element={<Home />} />
        <Route path={SIGNUP} element={<Signup />} />
      </Routes>
    </div>
  );
};

export default RouterConfig;
