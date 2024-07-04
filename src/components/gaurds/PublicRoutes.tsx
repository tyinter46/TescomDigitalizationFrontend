import { HOME } from "routes/CONSTANTS";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const isLoggedIn = false;
  return isLoggedIn ? <Navigate to={HOME} replace /> : <Outlet />;
};

export default PublicRoutes;
