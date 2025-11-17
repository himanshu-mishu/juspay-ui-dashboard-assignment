import MainLayout from "./components/layout/MainLayout";
import TopSellingTable from "./components/dashboard/TopSellingTable.jsx";

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
          <h2 className="text-lg font-semibold mb-4">Notifications</h2>
        </aside>
      </div>
    </MainLayout>
  );
}

export default App;
