import React from "react";
import Image from "next/image";
import bag from "@/app/assets/healthbag.png";
import health from "@/app/assets/health_and_safety.png";
import ecg from "@/app/assets/monitor_heart.png";

const TdmServices = () => {
  return (
    <div className="bg-[#ffffff] border border-[#E6E6E6] shadow-sm w-full pt-1 pb-3 rounded-[35px] mb-4">
      <div className="flex flex-row items-end justify-between">
        <h2 className="px-[20px] py-[6px] font-[700] text-[18px] text-[#26323C]">
          TDMs Services
        </h2>
        <p className="text-right py-1 text-[#868686] text-[14px] font-[400] pr-3 hover:text-blue-600 cursor-pointer">
          See more
        </p>
      </div>
      <div className="flex flex-row items-center justify-center gap-[40px]">
        <div className="flex flex-col items-center justify-center">
          <Image
            className="bg-[#DDEBFF] p-2 rounded-[6px]"
            src={bag}
            alt="bag"
            width={52}
            height={52}
          />
          <h2 className="text-[28px] text-[#26323C] font-[700]">3540</h2>
          <p className="text-[14px] text-[#929292]">Total Consultations</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            className="bg-[#DDEBFF] p-2 rounded-[6px]"
            src={health}
            alt="health"
            width={52}
            height={52}
          />
          <h2 className="text-[28px] text-[#26323C] font-[700]">3540</h2>
          <p className="text-[14px] text-[#929292]">Health Checkup</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            className="bg-[#DDEBFF] p-2 rounded-[6px]"
            src={ecg}
            alt="ecg"
            width={52}
            height={52}
          />
          <h2 className="text-[28px] text-[#26323C] font-[700]">3540</h2>
          <p className="text-[14px] text-[#929292]">ECG</p>
        </div>
      </div>
    </div>
  );
};

export default TdmServices;
