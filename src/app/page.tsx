import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="bg-blue-300 h-full">Dashboard</div>
      </div>
    </div>
  );
}
