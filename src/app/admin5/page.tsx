import Doc from "@/components/admin-cards/Doc";
import Export from "@/components/admin-cards/Export";
import List from "@/components/admin-cards/List";
import Patient from "@/components/admin-cards/Patient";
import Tdm from "@/components/admin-cards/Tdm";
import TransactionHistory from "@/components/admin-cards/TransactionHistory";
import InsightCard from "@/components/InsightCard";

const Page = () => {
  return (
    <div className="flex flex-col ">
      <div className="grid grid-cols-9 gap-4 p-6">
        <div className="col-span-2">
          <Tdm />
        </div>
        <div className="col-span-3">
          <Doc />
        </div>
        <div className="col-span-4">
          <Patient />
        </div>
      </div>
      <div className="grid grid-cols-9 gap-3 p-6">
        <div className="border border-[#E6E6E6] h-[680px] col-span-3 bg-[#ffffff] rounded-[35px] shadow-sm">
          <List />
        </div>
        <div className="col-span-4 flex flex-col gap-4">
          <InsightCard />
          <div className="text-lg font-bold text-center">
            <TransactionHistory />
          </div>
        </div>
        <div className="col-span-2 bg-[#ffffff] border border-[#D7D7D7] rounded-[35px] flex items-center justify-center h-[396px]">
          <Export />
        </div>
      </div>
    </div>
  );
};

export default Page;
