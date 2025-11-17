import MainLayout from "./components/layout/MainLayout";
import TopSellingTable from "./components/dashboard/TopSellingTable.jsx";

function App() {
  return (
    <MainLayout>
      <div>
        <TopSellingTable />
      </div>
    </MainLayout>
  );
}

export default App;
