import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useGetUser } from "hooks/user/useGetUser";

const ProtectedUserRoute = () => {
  const { user, isUserLoading } = useGetUser();
  return !isUserLoading && !user ? <Navigate to="/auth/signin" /> : <Outlet />;
};

export default ProtectedUserRoute;
