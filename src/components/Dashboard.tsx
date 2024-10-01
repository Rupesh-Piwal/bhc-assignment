// src/components/Dashboard.tsx

import { homeCareServicesData } from "@/data/data"; // Ensure all relevant data is imported
import TdmServices from "./cards/TdmServices";
import TdmInfo from "./cards/TdmInfo";
import DoctorCard from "./cards/DoctorCard";
import HomeCareServices from "./cards/HomeCareServices";
import PieChart from "@/components/charts/PieChart";
import WavesChart from "./charts/WavesChart";
import ThreeWavesChart from "./charts/ThreeWavesChart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BarChart from "./charts/BarChart";
import InsightCard from "./InsightCard";

const Dashboard = () => {
  return (
    <div className="px-[20px]">
      <div className="grid grid-cols-8 gap-3 pt-3">
        <div className="col-span-3 h-full">
          <TdmServices />
          <TdmInfo />
        </div>
        <div className="col-span-3 h-full">
          <DoctorCard />
          <HomeCareServices services={homeCareServicesData} />
        </div>
        <div className="bg-[#ffffff] rounded-[24px] col-span-2 px-4 h-full border border-[#D3D3D3]">
          <div className="flex flex-col justify-between items-end pr-4 py-3 gap-2">
            <h2 className="text-[17px] font-[700]">
              Revenue Distribution by Source
            </h2>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Timespan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Week">Week</SelectItem>
                <SelectItem value="Month">Month</SelectItem>
                <SelectItem value="Year">Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <PieChart />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 h-[350px] pt-5 mb-[40px]">
        <div className="bg-[#ffffff] rounded-[35px] border border-[#D3D3D3] py-4 px-[20px] flex flex-col items-center">
          <div className="flex flex-row item-center gap-[5px] justify-between py-2 mb-2">
            <h2 className="text-[17px] text-[#26323C] font-[700]">
              Patient Acquisition
            </h2>
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
          <div className="h-64 w-full flex justify-center items-center">
            <WavesChart />
          </div>
        </div>

        <div className="bg-[#ffffff] rounded-[35px] border border-[#D3D3D3] py-4 px-[40px]">
          <div className="flex flex-row items-center justify-between pb-2">
            <h2 className="text-[#26323C] text-[18px] font-[700]">
              Total Income Graph
            </h2>
            <div className="flex flex-row gap-4">
              <Select>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Select Timespan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Week">Week</SelectItem>
                  <SelectItem value="Month">Month</SelectItem>
                  <SelectItem value="Year">Year</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Select Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Total Consultations">
                    Total Consultations
                  </SelectItem>
                  <SelectItem value="Health Checkup">Health Checkup</SelectItem>
                  <SelectItem value="ECG">ECG</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <ThreeWavesChart />
        </div>
      </div>

      <div className="grid grid-cols-7 gap-3 h-[350px] pt-5">
        <div className="bg-[#ffffff] shadow-sm rounded-[35px] col-span-4 border border-[#D3D3D3] mt-6">
          <InsightCard />
        </div>
        <div className="bg-[#ffffff] shadow-sm rounded-[35px] col-span-3 border border-[#D3D3D3] mt-6 px-4">
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
