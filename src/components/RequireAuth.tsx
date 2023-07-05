import { ReactNode } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function RequireAuth({ children }: { children: ReactNode }) {
  const {user} = useAuth();
  const location = useLocation();

  if(!user){
    return <Navigate to="/login" state={{from: location}} replace />
  }

  return children;
}

export default RequireAuth;
