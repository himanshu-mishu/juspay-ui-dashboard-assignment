import { ThemeProvider } from "./contexts/ThemeContext";
import MainLayout from "./components/layout/MainLayout";
import Sidebar from "./components/layout/Sidebar";
import TopBar from "./components/layout/TopBar";
import KPICards from "./components/dashboard/KPICards";
import ProjectionsGraph from "./components/dashboard/ProjectionsGraph";
import RevenueChart from "./components/dashboard/RevenueChart";
import RevenueByLocation from "./components/dashboard/RevenueByLocation";
import TopSellingTable from "./components/dashboard/TopSellingTable";
import TotalSalesChart from "./components/dashboard/TotalSalesChart";
import NotificationList from "./components/notifications/NotificationList";
import ActivityList from "./components/notifications/ActivityList";
import ContactList from "./components/notifications/ContactList";

function NotificationSection() {
  return (
    <aside className="w-full md:w-[330px] min-h-screen flex flex-col p-0">
      <div className="bg-white dark:bg-[#1a1d23] border-l border-[#e6e7ea] dark:border-[#23232f]  h-full p-5 flex flex-col gap-2">
        <NotificationList />
        <ActivityList />
        <ContactList />
      </div>
    </aside>
  );
}

// --- Main App
function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <Sidebar />
        <main className="flex flex-col md:flex-row flex-1 w-full min-h-screen bg-white dark:bg-[#1a1d23] p-0">
          {/* Dashboard content */}
          <div className="flex-1 flex flex-col p-0 md:p-8 bg-white dark:bg-[#1a1d23] min-h-screen">
            <TopBar />
            <h2 className="text-sm font-semibold mb-2 dark:text-white mt-6 md:mt-10">eCommerce</h2>
            {/* KPI + Projections Row */}
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="md:w-1/2"><KPICards /></div>
              <div className="md:w-1/2"><ProjectionsGraph /></div>
            </div>
            {/* Revenue + Location Row */}
            <div className="flex flex-row gap-4 items-start mb-4">
              <div className="flex-1"><RevenueChart /></div>
              <div className="w-[350px]"><RevenueByLocation /></div>
            </div>
            {/* Top Selling + Total Sales Row */}
            <div className="flex flex-row gap-4 items-start">
              <div className="flex-1"><TopSellingTable /></div>
              <div className="w-[350px]"><TotalSalesChart /></div>
            </div>
          </div>
          <NotificationSection />
        </main>
      </MainLayout>
    </ThemeProvider>
  );
}
export default App;
