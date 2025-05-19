import { Outlet } from "react-router-dom";
// import DashboardSidebar from "../components/DashboardSidebar";

export default function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      {/* <DashboardSidebar /> */}
      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
}
