import Image from "next/image";
import React from "react";
import maki from "@/app/assets/maki_doctor_org.png";
import maki3 from "@/app/assets/maki_doctor.png";

const Doc = () => {
  return (
    <div className=" bg-[#ffffff] shadow-md border border-[#E6E6E6] py-5 px-8 rounded-[35px]">
      <h2 className="text-[#26323C] text-[18px] font-[700]">Doctor</h2>
      <div className="flex flex-row items-center justify-center gap-[60px] py-1">
        <div>
          <Image
            className="bg-[#FFF5EC] p-2 rounded-[10px]"
            src={maki}
            alt="fax"
            width={50}
            height={50}
          />
          <h2 className="text-[#26323C] text-[30px] font-[700]">07</h2>
          <p className="text-[#929292] text-[15px] font-[400]">Total TDMs</p>
        </div>
        <div>
          <Image
            className="bg-[#E7F9E9] p-2 rounded-[10px]"
            src={maki3}
            alt="fax"
            width={50}
            height={50}
          />
          <h2 className="text-[#26323C] text-[30px] font-[700]">07</h2>
          <p className="text-[#929292] text-[15px] font-[400]">Total TDMs</p>
        </div>
      </div>
    </div>
  );
};

export default Doc;
