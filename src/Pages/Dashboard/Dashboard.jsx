import TitlePage from "../../components/TitlePage";
import DashboardChart from "./DashboardChart";
import DashboardTotal from "./DashboardTotal";

const Dashboard = () => {
  return (
    <>
      <TitlePage title="Dashboard" />
      <DashboardTotal />
      <DashboardChart />
    </>
  );
};

export default Dashboard;
