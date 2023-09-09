import { Navigate } from "react-router-dom";

export default function RouteProtect({ children, isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
}
