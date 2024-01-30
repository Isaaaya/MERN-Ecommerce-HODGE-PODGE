import { Outlet } from "react-router-dom";
import { AdminNavbar } from "layout";

const AdminPageLayout = () => {
  return (
    <div className="flex flex-col">
      <AdminNavbar />
      <Outlet />
    </div>
  );
};

export default AdminPageLayout;
