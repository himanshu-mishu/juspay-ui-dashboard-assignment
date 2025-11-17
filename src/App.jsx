import MainLayout from "./components/layout/MainLayout";
import TopSellingTable from "./components/dashboard/TopSellingTable.jsx";
import NotificationList from "./components/notifications/NotificationList.jsx";
import ActivityList from "./components/notifications/ActivityList.jsx";
import ContactList from "./components/notifications/ContactList.jsx";
import KPICards from "./components/dashboard/KPICards";
import ProjectionsGraph from "./components/dashboard/ProjectionsGraph.jsx";

function App() {
  return (
    <MainLayout>
      <div className="flex gap-6">
        {/* Main dashboard content */}
        <div className="flex-1">
          <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm">
            <div className="flex gap-7 mb-10 items-start">
              {/* KPI Cards left */}
              <div className="w-1/2">
                <h2 className="text-sm font-semibold mb-2">eCommerce</h2>
                <KPICards />
              </div>
              {/* Chart right */}
              <div className="w-1/2">
                <ProjectionsGraph />
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
