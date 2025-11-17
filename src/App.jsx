import MainLayout from "./components/layout/MainLayout";
import TopSellingTable from "./components/dashboard/TopSellingTable.jsx";
import NotificationList from "./components/notifications/NotificationList.jsx";
import ActivityList from "./components/notifications/ActivityList.jsx";
import ContactList from "./components/notifications/ContactList.jsx";
import KPICards from "./components/dashboard/KPICards";
import ProjectionsGraph from "./components/dashboard/ProjectionsGraph.jsx";
import RevenueByLocation from "./components/dashboard/RevenueByLocation.jsx";
import RevenueChart from "./components/dashboard/RevenueChart.jsx";

function App() {
  return (
    <MainLayout>
      <div className="flex gap-6">
        <div className="flex-1">
          <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm">
            <h2 className="text-sm font-semibold mb-2">eCommerce</h2>
            {/* Top row: KPI cards & projections graph */}
            <div className="flex gap-7 mb-8 items-stretch">
              <div className="w-1/2 flex flex-col justify-between">
                <KPICards />
              </div>
              <div className="w-1/2 flex flex-col justify-between">
                <ProjectionsGraph />
              </div>
            </div>
            {/* Revenue and Revenue by Location side-by-side */}
            <div className="flex gap-7 mb-8">
              <div className="flex-1">
                <RevenueChart />
              </div>
              <div className="min-w-[240px] flex-shrink-0">
                <RevenueByLocation />
              </div>
            </div>
            <TopSellingTable />
          </div>
        </div>
        {/* Notification panel */}
        <aside className="w-[300px] bg-white border-l p-4 rounded-md shadow-sm">
          <NotificationList />
          <ActivityList />
          <ContactList />
        </aside>
      </div>
    </MainLayout>
  );
}

export default App;
