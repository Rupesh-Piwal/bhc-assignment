// src/components/cards/TdmInfo.tsx

import Image from "next/image";
import { TdmService } from "@/types"; // Importing the TdmService type definition

interface TdmInfoProps {
  services: TdmService[]; // Use the TdmService interface for props type
}

const TdmInfo: React.FC<TdmInfoProps> = ({ services }) => {
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
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <Image
              className={`bg-[#DDEBFF] ${service.imagePadding} w-[60px] rounded-[6px]`}
              src={
                typeof service.imageSrc === "string"
                  ? service.imageSrc
                  : service.imageSrc.src
              } // Use the src property if it's StaticImageData
              alt={service.label}
              width={42}
              height={42}
            />
            <h2 className="text-[28px] text-[#26323C] font-[700]">
              {service.value}
            </h2>
            <p className="text-[14px] text-[#929292]">{service.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TdmInfo;
