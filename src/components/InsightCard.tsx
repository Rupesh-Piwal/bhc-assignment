import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const InsightCard = () => {
  return (
    <div className="bg-white rounded-[24px] border border-[#DFDFDF] shadow-md p-4">
      <div className="flex flex-row items-center py-3  justify-between">
        <Select>
          <SelectTrigger className="w-[145px]">
            <SelectValue placeholder="Select Timespan" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Week">Week</SelectItem>
            <SelectItem value="Month">Month</SelectItem>
            <SelectItem value="Year">Year</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex flex-row gap-2">
          <span className="border border-[#DFDFDF] px-2 rounded-[5px] text-[#A1A1A1] text-[13px] font-[400]">
            This Year
          </span>
          <span className="border border-[#DFDFDF] px-2 text-[#A1A1A1] text-[13px] font-[400] rounded-[5px]">
            This Month
          </span>
          <span className="border border-[#C1CDFF] px-2 text-[13px] bg-[#FAFBFF] text-[#4F5D96] rounded-[5px]">
            This Week
          </span>
          <span className="border border-[#DFDFDF] px-2 text-[#A1A1A1] text-[13px] font-[400] rounded-[5px]">
            Today
          </span>
          <span className="border border-[#DFDFDF] px-2 text-[#A1A1A1] text-[13px] font-[400] rounded-[5px]">
            TDM
          </span>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-5">

        <div className="flex flex-col gap-5 mx-[20px]">
          <div className="flex flex-col items-start">
            <p className="text-[#53564E] text-[16px] font-[400]">
              Daily Consultation
            </p>
            <h2 className="text-[#26323C] text-[30px] font-[700]">124</h2>
            <p className="text-[#FD6F6F] text-[12px] font-[500]">
              Low from Last Week
            </p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-[#53564E] text-[16px] font-[400]">
              Avg Consultation <br /> income per patient
            </p>
            <h2 className="text-[#26323C] text-[30px] font-[700]">₹100</h2>
            <p className="text-[#4EAF21] text-[12px] font-[500]">
              High from last Week
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 mx-[20px]">
          <div className="flex flex-col items-start">
            <p className="text-[#53564E] text-[16px] font-[400]">
              Consultation Duration
            </p>
            <h2 className="text-[#26323C] text-[30px] font-[700]">21:00</h2>
            <p className="text-[#4EAF21] text-[12px] font-[500]">
              High from Last Week
            </p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-[#53564E] text-[16px] font-[400]">
              Mini-Consultation <br /> income per patient
            </p>
            <h2 className="text-[#26323C] text-[30px] font-[700]">₹45</h2>
            <p className="text-[#FD6F6F] text-[12px] font-[500]">
              Low from last Week
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 mx-[20px]">
          <div className="flex flex-col items-start">
            <p className="text-[#53564E] text-[16px] font-[400]">
              Max-Consultation Fee
            </p>
            <h2 className="text-[#26323C] text-[30px] font-[700]">₹650</h2>
            <p className="text-[#FD6F6F] text-[12px] font-[500]">
              Low from last Week
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightCard;
