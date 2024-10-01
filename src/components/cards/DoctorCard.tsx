import Image from "next/image";
import maki from "@/app/assets/maki_doctor.png";
import maki2 from "@/app/assets/maki_doctor-2.png";
import cash from "@/app/assets/payments.png";

const DoctorCard = () => {
  return (
    <div className="bg-[#ffffff] border border-[#E6E6E6] shadow-sm w-[460px] pt-1 pb-3 rounded-[35px] mb-4">
      <div className="flex flex-row items-end justify-between">
        <h2 className="px-[20px] py-[6px] font-[700] text-[18px] text-[#26323C]">
          Doctor
        </h2>

        <p className="text-right py-1 text-[#868686] text-[14px] font-[400] pr-3 hover:text-blue-600 cursor-pointer">
          See more
        </p>
      </div>
      <div className="flex flex-row items-center justify-center gap-[40px]">
        <div className="flex flex-col items-center justify-center">
          <Image
            className="bg-[#E7F9E9] p-2 rounded-[6px]"
            src={maki}
            alt="make"
            width={52}
            height={52}
          />
          <h2 className="text-[28px] text-[#26323C] font-[700]">50</h2>
          <p className="text-[14px] text-[#929292]">Total Doctors</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            className="bg-[#DFFFFD] p-2 rounded-[6px]"
            src={maki2}
            alt="mak"
            width={52}
            height={52}
          />
          <h2 className="text-[28px] text-[#26323C] font-[700]">45</h2>
          <p className="text-[14px] text-[#929292]">Active Doctors</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            className="bg-[#DDEBFF] p-2 rounded-[6px]"
            src={cash}
            alt="payment"
            width={52}
            height={52}
          />
          <h2 className="text-[28px] text-[#26323C] font-[700]">₹650</h2>
          <p className="text-[14px] text-[#929292]">Avg Fees</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
