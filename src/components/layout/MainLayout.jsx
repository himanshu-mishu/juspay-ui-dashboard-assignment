import Sidebar from "./Sidebar";

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen min-w-full bg-[#f4f5fa] font-inter">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <main className="flex-1 p-6 bg-[#f4f5fa]">{children}</main>
      </div>
    </div>
  );
}
