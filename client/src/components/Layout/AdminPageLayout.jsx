import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "components/Layout/AdminNavbar";

const AdminPageLayout = () => {
  return (
    <div className="flex flex-col">
      <AdminNavbar />
      <Outlet />
    </div>
  );
};

export default AdminPageLayout;
