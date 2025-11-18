export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen w-full flex bg-[#f4f5fa] dark:bg-[#23272F] font-inter transition-colors">
      {children}
    </div>
  );
}
