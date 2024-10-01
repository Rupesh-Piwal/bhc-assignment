import Image from "next/image";
import fax from "@/app/assets/openmoji_fax-machine.png";
import fax2 from "@/app/assets/openmoji_fax-machine (1).png";
import user from "@/app/assets/carbon_user-filled.png";

const TdmInfo = () => {
  return (
    <div className="bg-[#ffffff] border border-[#E6E6E6] shadow-sm w-full pt-1 pb-3 rounded-[35px] mb-4">
      <div className="flex flex-row items-end justify-between">
        <h2 className="px-[20px] py-[6px] font-[700] text-[18px] text-[#26323C]">
          TDMs Information
        </h2>

        <p className="text-right py-1 text-[#868686] text-[14px] font-[400] pr-3">
          See more
        </p>
      </div>
      <div className="flex flex-row items-center justify-center gap-[40px]">
        <div className="flex flex-col items-center justify-center">
          <Image
            className="bg-[#FFF5EC] p-2 rounded-[6px]"
            src={fax}
            alt="fax"
            width={52}
            height={52}
          />
          <h2 className="text-[28px] text-[#26323C] font-[700]">40</h2>
          <p className="text-[14px] text-[#929292]">Total TDMs</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            className="bg-[#FFDDE5] p-2 rounded-[6px]"
            src={fax2}
            alt="fax2"
            width={52}
            height={52}
          />
          <h2 className="text-[28px] text-[#26323C] font-[700]">05</h2>
          <p className="text-[14px] text-[#929292]"> Inactive TDMs</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            className="bg-[#F3EFFF] p-2 rounded-[6px]"
            src={user}
            alt="user"
            width={52}
            height={52}
          />
          <h2 className="text-[28px] text-[#26323C] font-[700]">3540</h2>
          <p className="text-[14px] text-[#929292]">Total Patients</p>
        </div>
      </div>
    </div>
  );
};

export default TdmInfo;
