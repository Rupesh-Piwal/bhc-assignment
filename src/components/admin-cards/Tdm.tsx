import Image from "next/image";
import React from "react";
import fax from "@/app/assets/openmoji_fax-machine.png";
import fax2 from "@/app/assets/openmoji_fax-machine_green.png";

const Tdm = () => {
  return (
    <div className="border bg-[#ffffff] shadow-md border-[#E6E6E6] py-5 px-8 rounded-[35px]">
      <h2 className="text-[#26323C] text-[18px] font-[700]">TDM Information</h2>
      <div className="flex flex-row items-center justify-center  gap-[30px] py-1">
        <div className="flex flex-col items-center">
          <Image src={fax} alt="fax" width={50} height={50} />
          <h2 className="text-[#26323C] text-[30px] font-[700]">07</h2>
          <p className="text-[#929292] text-[15px] font-[400]">Total TDMs</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="bg-[#E7F9E9] rounded-[6px]"
            src={fax2}
            alt=""
            width={50}
            height={50}
          />
          <h2 className="text-[#26323C] text-[30px] font-[700]">05</h2>
          <p className="text-[#929292] text-[15px] font-[400]">Active TDMs</p>
        </div>
      </div>
    </div>
  );
};

export default Tdm;
