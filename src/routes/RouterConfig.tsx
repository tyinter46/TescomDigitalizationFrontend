import { Routes, Route } from "react-router-dom";

import { Home, Signup, AboutUs, Login, Profile, Dashboard } from "pages";

import { HOME, SIGNUP, ABOUT, LOGIN, ABOUT_ME, DASHBOARD } from "./CONSTANTS";

import type { FC } from "react";
import { PublicRoute, ProtectedRoute } from "components/gaurds";

const RouterConfig: FC = () => {
  return (
    <div>
      <Routes>
        {/* Public routes should be placed in here */}
        <Route path={HOME} element={<Home />} />

        <Route path={ABOUT} element={<AboutUs />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path={SIGNUP} element={<Signup />} />
        <Route path={ABOUT_ME} element={<Profile />} />
        <Route path={DASHBOARD} element={<Dashboard />} />
        <Route path="/" element={<PublicRoute />} />
        {/* Auth pages */}

        {/* <Route /> */}

        <Route path="/" element={<ProtectedRoute navigate={SIGNUP} />}>
        {/* Protected routes should be placed in here */}
        </Route> 
      </Routes>
    </div>
  );
};

export default RouterConfig;
