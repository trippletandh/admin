import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import "./RootLayout.css";

const RootLayout = () => {
  return (
    <div className="container">
      <Sidebar />

      <Outlet />
    </div>
  );
};

export default RootLayout;
