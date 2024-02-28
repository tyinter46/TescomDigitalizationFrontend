import { ABOUT_ME } from "routes/CONSTANTS";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const isLoggedIn = false;
  return isLoggedIn ? <Navigate to={ABOUT_ME} replace /> : <Outlet />;
};

export default PublicRoutes;
