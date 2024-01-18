import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useGetUser } from "hooks/user/useGetUser";

const ProtectedAdminRoute = () => {
  const { user, isUserLoading } = useGetUser();
  return !isUserLoading && !user?.isAdmin ? <Navigate to="/" /> : <Outlet />;
};

export default ProtectedAdminRoute;
