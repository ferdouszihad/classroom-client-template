import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Loading from "../pages/Loading";
import { Navigate, useLocation } from "react-router-dom";
const PrivateRoute = (props = {}) => {
  const { children } = props || {};
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  console.log(loading, user);
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname} replace></Navigate>;
};

export default PrivateRoute;
