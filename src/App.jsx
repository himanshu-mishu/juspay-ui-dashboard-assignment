import MainLayout from "./components/layout/MainLayout";
import TopSellingTable from "./components/dashboard/TopSellingTable.jsx";
import NotificationList from "./components/notifications/NotificationList.jsx";
import ActivityList from "./components/notifications/ActivityList.jsx";
import ContactList from "./components/notifications/ContactList.jsx";
function App() {
  return (
    <MainLayout>
      <div className="flex gap-6">
        {/* Main dashboard content */}
        <div className="flex-1">
          <TopSellingTable />
        </div>
        {/* Notification section placeholder - fixed width */}
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
