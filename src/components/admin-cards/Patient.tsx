import Image from "next/image";
import React from "react";
import fax from "@/app/assets/openmoji_fax-machine_green.png";
import maki from "@/app/assets/maki_doctor_org.png";
import maki2 from "@/app/assets/maki_doctor_red.png";
import maki3 from "@/app/assets/maki_doctor.png";

const Patient = () => {
  return (
    <div className="bg-[#ffffff] shadow-sm border border-[#E6E6E6] py-5 px-8 rounded-[35px]">
      <h2 className="text-[#26323C] text-[18px] font-[700]">TDM Patient</h2>
      <div className="flex flex-row items-center justify-center gap-[50px] py-2">
        <div className="flex flex-col items-center">
          <Image
            className="bg-[#FFF5EC] p-2 rounded-[10px]"
            src={maki}
            alt="fax"
            width={50}
            height={50}
          />
          <h2 className="text-[#26323C] text-[30px] font-[700]">30</h2>
          <p className="text-[#929292] text-[15px] font-[400]">Avg Patient</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="bg-[#E7F9E9] p-2 rounded-[10px]"
            src={maki3}
            alt="fax"
            width={50}
            height={50}
          />
          <h2 className="text-[#26323C] text-[30px] font-[700]">350</h2>
          <p className="text-[#929292] text-[15px] font-[400]">Daily Patient</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="bg-[#FFDDE5] p-2 rounded-[10px]"
            src={maki2}
            alt="fax"
            width={50}
            height={50}
          />
          <h2 className="text-[#26323C] text-[30px] font-[700]">5000</h2>
          <p className="text-[#929292] text-[15px] font-[400]">
            Monthly Patient
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Patient;
